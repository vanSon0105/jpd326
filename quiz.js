const $ = id => document.getElementById(id);
const KANJI_TYPES = ["kanji-hira", "hira-kanji", "kanji-meaning", "meaning-kanji"];
const GRAMMAR_TYPES = ["sentence", "connection", "pattern-meaning", "meaning-pattern"];
const PROMPTS = {
  "kanji-hira": "Kanji này đọc bằng hiragana thế nào?",
  "hira-kanji": "Hiragana này tương ứng với từ Kanji nào?",
  "kanji-meaning": "Từ Kanji này có nghĩa gì?",
  "meaning-kanji": "Nghĩa này tương ứng với từ Kanji nào?",
  sentence: "Chọn phần phù hợp để hoàn thành câu.",
  connection: "Chọn dạng nối đúng vào chỗ trống.",
  "pattern-meaning": "Cấu trúc này có nghĩa gì?",
  "meaning-pattern": "Ý nghĩa này ứng với cấu trúc nào?"
};
const QUESTIONS = {
  kanji: WORDS.flatMap(item => KANJI_TYPES.map(type => ({ category: "kanji", type, item, id: `k-${item.id}-${type}` }))),
  grammar: GRAMMAR.flatMap(item => GRAMMAR_TYPES.flatMap(type => {
    const variants = type === "connection" && EXTRA_CONNECTIONS[item.id] ? [0, 1] : [0];
    return variants.map(variant => ({ category: "grammar", type, item, variant, id: `g-${item.id}-${type}-${variant}` }));
  }))
};
let decks = { kanji: [], grammar: [] };
let current = null;
const history = [];
let historyIndex = -1;
let lastCategory = null;
let categoryStreak = 0;

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function meaningParts(value) { return value.split(";").map(part => part.trim().toLocaleLowerCase("vi")); }
function meaningOverlap(a, b) {
  return meaningParts(a).some(left => meaningParts(b).some(right => left === right || left.includes(right) || right.includes(left)));
}
function display(value) { return value === "∅" ? "Không thêm gì" : value; }
function grammarConnection(item, variant) {
  return variant ? EXTRA_CONNECTIONS[item.id] : { connection: item.connection, answer: item.connectionAnswer, distractors: item.connectionDistractors };
}
function wordField(item, type) {
  if (type === "kanji-hira") return item.hira;
  if (type === "kanji-meaning") return item.meaning;
  return item.kanji;
}
function wordOptions(item, type) {
  const answer = wordField(item, type);
  const eligible = other => other.id !== item.id && wordField(other, type) !== answer &&
    (type !== "hira-kanji" || other.hira !== item.hira) &&
    (!["kanji-meaning", "meaning-kanji"].includes(type) || !meaningOverlap(other.meaning, item.meaning));
  const nearby = shuffle(WORDS.filter(other => other.lesson === item.lesson && eligible(other)));
  const rest = shuffle(WORDS.filter(other => other.lesson !== item.lesson && eligible(other)));
  const values = [answer];
  for (const other of [...nearby, ...rest]) {
    const value = wordField(other, type);
    if (!values.includes(value)) values.push(value);
    if (values.length === 4) break;
  }
  return shuffle(values);
}
function grammarOptions(item, type, variant) {
  if (type === "sentence") return shuffle([item.answer, ...item.distractors]);
  if (type === "connection") {
    const rule = grammarConnection(item, variant);
    return shuffle([rule.answer, ...rule.distractors]);
  }
  const field = type === "pattern-meaning" ? "meaning" : "pattern";
  const values = [item[field]];
  const nearby = shuffle(GRAMMAR.filter(other => other.id !== item.id && other.lesson === item.lesson));
  const rest = shuffle(GRAMMAR.filter(other => other.lesson !== item.lesson));
  for (const other of [...nearby, ...rest]) {
    if (!values.includes(other[field])) values.push(other[field]);
    if (values.length === 4) break;
  }
  return shuffle(values);
}
function questionParts(spec) {
  const { category, type, item, variant = 0 } = spec;
  if (category === "kanji") {
    const text = type === "hira-kanji" ? item.hira : type === "meaning-kanji" ? item.meaning : item.kanji;
    return { text, answer: wordField(item, type), options: wordOptions(item, type), viQuestion: type === "meaning-kanji", viOptions: type === "kanji-meaning" };
  }
  if (type === "sentence") return { text: item.sentence, marker: "＿＿", answer: item.answer, options: grammarOptions(item, type, variant) };
  if (type === "connection") {
    const rule = grammarConnection(item, variant);
    return { text: rule.connection, marker: "［　］", answer: rule.answer, options: grammarOptions(item, type, variant) };
  }
  if (type === "pattern-meaning") return { text: item.pattern, answer: item.meaning, options: grammarOptions(item, type, variant), viOptions: true };
  return { text: item.meaning, answer: item.pattern, options: grammarOptions(item, type, variant), viQuestion: true };
}
function drawSpec() {
  let category = Math.random() < .5 ? "kanji" : "grammar";
  if (categoryStreak >= 3) category = lastCategory === "kanji" ? "grammar" : "kanji";
  if (!decks[category].length) decks[category] = shuffle(QUESTIONS[category]);
  const deck = decks[category];
  const previousSource = current?.spec.category === category ? current.spec.item.id : null;
  const alternate = deck.findIndex(spec => spec.item.id !== previousSource);
  if (alternate > 0) [deck[0], deck[alternate]] = [deck[alternate], deck[0]];
  const spec = deck.shift();
  categoryStreak = category === lastCategory ? categoryStreak + 1 : 1;
  lastCategory = category;
  return spec;
}
function renderQuestionText(text, marker, viQuestion) {
  const root = $("questionText"); root.replaceChildren();
  root.className = "question-text" + (viQuestion ? " vi" : "") + (marker ? " sentence" : "");
  root.lang = viQuestion ? "vi" : "ja";
  if (!marker) { root.textContent = text; return; }
  const [before, after] = text.split(marker);
  const blank = document.createElement("span"); blank.className = "blank"; blank.textContent = marker;
  root.append(document.createTextNode(before), blank, document.createTextNode(after));
}
function renderQuestion(entry) {
  current = entry;
  const { spec, parts } = entry;
  $("feedback").hidden = true;
  $("questionPrompt").textContent = PROMPTS[spec.type];
  renderQuestionText(parts.text, parts.marker, parts.viQuestion);
  const root = $("answers"); root.replaceChildren(); root.classList.remove("answered");
  for (const [index, option] of parts.options.entries()) {
    const button = document.createElement("button"); button.type = "button";
    button.className = "answer" + (parts.viOptions ? " vi" : "");
    button.dataset.value = option;
    const number = document.createElement("span"); number.className = "number"; number.textContent = `${index + 1}.`;
    button.append(number, document.createTextNode(display(option)));
    button.onclick = () => { if (current.chosen !== null) nextQuestion(); else grade(option); };
    root.append(button);
  }
  $("previousButton").disabled = historyIndex === 0;
  if (entry.chosen !== null) showResult(entry);
}
function nextQuestion() {
  if (historyIndex < history.length - 1) historyIndex++;
  else {
    const spec = drawSpec();
    history.push({ spec, parts: questionParts(spec), chosen: null });
    historyIndex++;
  }
  renderQuestion(history[historyIndex]);
}
function previousQuestion() {
  if (historyIndex <= 0) return;
  historyIndex--;
  renderQuestion(history[historyIndex]);
}
function grade(chosen) {
  if (!current || current.chosen !== null) return;
  current.chosen = chosen;
  showResult(current);
}
function showResult(entry) {
  const { spec, parts, chosen } = entry;
  const correct = chosen === parts.answer;
  const root = $("answers"); root.classList.add("answered");
  for (const button of root.querySelectorAll(".answer")) {
    if (button.dataset.value === parts.answer) button.classList.add("correct");
    else if (button.dataset.value === chosen) button.classList.add("incorrect");
  }
  const feedback = $("feedback"); feedback.className = "feedback " + (correct ? "good" : "bad"); feedback.replaceChildren();
  const title = document.createElement("strong"); title.textContent = correct ? "Đúng" : `Chưa đúng · ${display(parts.answer)}`;
  feedback.append(title);
  if (spec.category === "kanji") {
    const detail = document.createElement("span"); detail.className = "detail jp";
    detail.textContent = `${spec.item.kanji} · ${spec.item.hira} — ${spec.item.meaning}`; feedback.append(detail);
  } else {
    const item = spec.item;
    const lines = [`${item.pattern} — ${item.meaning}`, `Cách nối: ${item.join}`, `Ví dụ: ${item.sentence.replace("＿＿", item.answer)}`];
    for (const line of lines) { const detail = document.createElement("span"); detail.className = "detail"; detail.textContent = line; feedback.append(detail); }
  }
  const hint = document.createElement("span"); hint.className = "next-hint"; hint.textContent = "Dùng nút hoặc phím ← / → để xem lại và chuyển câu."; feedback.append(hint);
  feedback.hidden = false;
}
function setSidebar(open) {
  $("sidebar").classList.toggle("open", open);
  $("sidebar").setAttribute("aria-hidden", String(!open));
  $("menuButton").setAttribute("aria-expanded", String(open));
  $("menuButton").setAttribute("aria-label", open ? "Đóng thanh bên" : "Mở thanh bên");
  $("backdrop").hidden = !open;
  $("sidebar").inert = !open;
  if (open) $("closeSidebar").focus();
  else if (document.activeElement === $("closeSidebar")) $("menuButton").focus();
}
$("menuButton").onclick = () => setSidebar(!$("sidebar").classList.contains("open"));
$("closeSidebar").onclick = () => setSidebar(false);
$("backdrop").onclick = () => setSidebar(false);
$("previousButton").onclick = previousQuestion;
$("nextButton").onclick = nextQuestion;
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { setSidebar(false); return; }
  if ($("sidebar").classList.contains("open")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "Enter" && [$("menuButton"), $("previousButton"), $("nextButton")].includes(event.target)) return;
  if (event.key === "ArrowLeft") { event.preventDefault(); previousQuestion(); return; }
  if (event.key === "ArrowRight" || event.key === "Enter") { event.preventDefault(); nextQuestion(); return; }
  if (/^[1-4]$/.test(event.key)) {
    event.preventDefault();
    const button = $("answers").children[Number(event.key) - 1];
    if (current.chosen !== null) nextQuestion(); else button?.click();
  }
}, true);
$("wordCount").textContent = `${WORDS.length} từ`;
$("grammarCount").textContent = `${GRAMMAR.length} cấu trúc`;
$("sidebar").inert = true;
nextQuestion();
