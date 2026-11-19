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
  "pattern-meaning": "Ngữ pháp dùng trong câu này có nghĩa gì?",
  "meaning-pattern": "Bản dịch này ứng với cấu trúc nào?"
};
const QUESTIONS = {
  kanji: WORDS.flatMap(item => KANJI_TYPES.map(type => ({ category: "kanji", type, item, id: `k-${item.id}-${type}` }))),
  grammar: GRAMMAR.flatMap(item => GRAMMAR_TYPES.flatMap(type => {
    const variants = type === "connection" && EXTRA_CONNECTIONS[item.id] ? [0, 1] : [0];
    return variants.map(variant => ({ category: "grammar", type, item, variant, id: `g-${item.id}-${type}-${variant}` }));
  }))
};
// Chế độ đề lấy từ ?mode= trên URL; mỗi chế độ lưu tiến trình riêng.
const MODES = {
  all: {
    categories: ["kanji", "grammar"], title: "Luyện đề tổng hợp · Kanji & Ngữ pháp", heading: ["Luyện đề", "tổng hợp."],
    intro: "Kanji và ngữ pháp bài 6–10 được trộn trong từng lượt. Trả lời đủ mọi mục rồi lượt mới được xáo lại.",
    storageKey: "jpd326-quiz-coverage-v1"
  },
  kanji: {
    categories: ["kanji"], title: "Luyện Kanji · Bài 6–10", heading: ["Luyện", "Kanji."],
    intro: `${WORDS.length} từ Kanji bài 6–10: cách đọc, nghĩa và ngược lại. Trả lời đủ mọi từ rồi lượt mới được xáo lại.`,
    storageKey: "jpd326-quiz-coverage-v1-kanji"
  },
  grammar: {
    categories: ["grammar"], title: "Luyện ngữ pháp · Bài 6–10", heading: ["Luyện", "ngữ pháp."],
    intro: `${GRAMMAR.length} cấu trúc ngữ pháp bài 6–10: điền câu, cách nối và ý nghĩa. Trả lời đủ mọi cấu trúc rồi lượt mới được xáo lại.`,
    storageKey: "jpd326-quiz-coverage-v1-grammar"
  }
};
const MODE_NAME = Object.hasOwn(MODES, new URLSearchParams(location.search).get("mode"))
  ? new URLSearchParams(location.search).get("mode") : "all";
const MODE = MODES[MODE_NAME];
const itemKey = spec => `${spec.category}:${spec.item.id}`;
const QUESTION_BY_ID = new Map();
const QUESTION_GROUPS = new Map();
for (const spec of MODE.categories.flatMap(category => QUESTIONS[category])) {
  QUESTION_BY_ID.set(spec.id, spec);
  const key = itemKey(spec);
  if (!QUESTION_GROUPS.has(key)) QUESTION_GROUPS.set(key, []);
  QUESTION_GROUPS.get(key).push(spec.id);
}
const ITEM_KEYS = [...QUESTION_GROUPS.keys()];
const ITEM_KEY_SET = new Set(ITEM_KEYS);
const STORAGE_KEY = MODE.storageKey;
const BANK_SIGNATURE = ITEM_KEYS.join("|");
let roundNumber = 1;
let completed = new Set();
let itemDeck = [];
let variantDecks = {};
let pendingKey = null;
let current = null;
const history = [];
let historyIndex = -1;

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
function grammarExample(spec) {
  const examples = GRAMMAR_EXAMPLES[spec.item.id];
  if (spec.type !== "connection") return examples.sentence;
  return spec.variant ? examples.extraConnection : examples.connection;
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
    return { text: grammarExample(spec).question, marker: "［　］", answer: rule.answer, options: grammarOptions(item, type, variant) };
  }
  if (type === "pattern-meaning") return { text: grammarExample(spec).full, answer: item.meaning, options: grammarOptions(item, type, variant), viOptions: true };
  return { text: grammarExample(spec).vi, answer: item.pattern, options: grammarOptions(item, type, variant), viQuestion: true };
}
function updateProgress() {
  let words = 0;
  let grammar = 0;
  for (const key of completed) {
    if (key.startsWith("kanji:")) words++;
    else grammar++;
  }
  $("roundCount").textContent = roundNumber;
  $("wordRow").hidden = !MODE.categories.includes("kanji");
  $("grammarRow").hidden = !MODE.categories.includes("grammar");
  $("wordCount").textContent = `${words}/${WORDS.length} từ`;
  $("grammarCount").textContent = `${grammar}/${GRAMMAR.length} cấu trúc`;
}
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      signature: BANK_SIGNATURE, roundNumber, completed: [...completed], itemDeck, variantDecks, pendingKey
    }));
  } catch { /* Trang vẫn dùng được khi trình duyệt chặn lưu trữ. */ }
}
function restoreProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.signature !== BANK_SIGNATURE || !Number.isSafeInteger(saved.roundNumber) || saved.roundNumber < 1) return;
    roundNumber = saved.roundNumber;
    completed = new Set((saved.completed || []).filter(key => ITEM_KEY_SET.has(key)));
    itemDeck = [...new Set((saved.itemDeck || []).filter(key => ITEM_KEY_SET.has(key) && !completed.has(key)))];
    if (ITEM_KEY_SET.has(saved.pendingKey) && !completed.has(saved.pendingKey)) {
      itemDeck = [saved.pendingKey, ...itemDeck.filter(key => key !== saved.pendingKey)];
    }
    itemDeck.push(...shuffle(ITEM_KEYS.filter(key => !completed.has(key) && !itemDeck.includes(key))));
    variantDecks = {};
    for (const [key, ids] of Object.entries(saved.variantDecks || {})) {
      if (ITEM_KEY_SET.has(key) && Array.isArray(ids)) {
        variantDecks[key] = [...new Set(ids.filter(id => QUESTION_GROUPS.get(key).includes(id)))];
      }
    }
  } catch { /* Bỏ qua dữ liệu lưu không hợp lệ. */ }
}
function drawSpec() {
  if (completed.size === ITEM_KEYS.length) {
    roundNumber++;
    completed.clear();
    itemDeck = shuffle(ITEM_KEYS);
    if (current && itemDeck[0] === itemKey(current.spec)) [itemDeck[0], itemDeck[1]] = [itemDeck[1], itemDeck[0]];
  }
  if (!itemDeck.length) itemDeck = shuffle(ITEM_KEYS.filter(key => !completed.has(key)));
  while (completed.has(itemDeck[0])) itemDeck.shift();
  if (!itemDeck.length) itemDeck = shuffle(ITEM_KEYS.filter(key => !completed.has(key)));
  const key = itemDeck.shift();
  if (!variantDecks[key]?.length) variantDecks[key] = shuffle(QUESTION_GROUPS.get(key));
  const spec = QUESTION_BY_ID.get(variantDecks[key].shift());
  pendingKey = key;
  updateProgress();
  saveProgress();
  return spec;
}
function renderQuestionText(text, marker, viQuestion, sentenceStyle) {
  const root = $("questionText"); root.replaceChildren();
  root.className = "question-text" + (viQuestion ? " vi" : "") + (sentenceStyle ? " sentence" : "");
  root.lang = viQuestion ? "vi" : "ja";
  if (!marker) { root.textContent = text; return; }
  const [before, after] = text.split(marker);
  const blank = document.createElement("span"); blank.className = "blank"; blank.textContent = marker;
  root.append(document.createTextNode(before), blank, document.createTextNode(after));
}
// Gợi ý không được chứa đáp án hoặc lặp lại câu hỏi; trả về null để ẩn nút đó.
function hintValues({ spec, parts }) {
  let values;
  if (spec.category === "kanji") values = { hira: spec.item.hira, meaning: spec.item.meaning };
  else {
    const example = grammarExample(spec);
    if (spec.type === "pattern-meaning") values = { hira: example.hira, meaning: null };
    else if (spec.type === "meaning-pattern") values = { hira: GRAMMAR_EXAMPLES[spec.item.id].sentence.questionHira, meaning: null };
    else values = { hira: example.questionHira, meaning: example.vi };
  }
  for (const kind of Object.keys(values)) {
    if (values[kind] === parts.answer || values[kind] === parts.text) values[kind] = null;
  }
  return values;
}
function renderHints(entry) {
  for (const [kind, value] of Object.entries(hintValues(entry))) {
    const button = $(kind === "hira" ? "hiraButton" : "meaningButton");
    const hint = $(kind === "hira" ? "hiraHint" : "meaningHint");
    button.parentElement.hidden = value === null;
    const shown = Boolean(entry[`${kind}Shown`]);
    button.textContent = `${shown ? "Ẩn" : "Hiện"} ${kind === "hira" ? "hira" : "dịch"}`;
    button.setAttribute("aria-expanded", String(shown));
    hint.textContent = value;
    hint.hidden = !shown;
  }
}
function toggleHint(kind) {
  if (!current) return;
  const key = `${kind}Shown`;
  current[key] = !current[key];
  renderHints(current);
}
function renderQuestion(entry) {
  current = entry;
  const { spec, parts } = entry;
  $("feedback").hidden = true;
  $("questionPrompt").textContent = PROMPTS[spec.type];
  renderQuestionText(parts.text, parts.marker, parts.viQuestion, spec.category === "grammar");
  renderHints(entry);
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
    if (current && current.chosen === null && current.round === roundNumber) {
      const key = itemKey(current.spec);
      if (!completed.has(key) && !itemDeck.includes(key)) itemDeck.push(key);
      if (pendingKey === key) pendingKey = null;
    }
    const spec = drawSpec();
    history.push({ spec, parts: questionParts(spec), round: roundNumber, chosen: null, hiraShown: false, meaningShown: false });
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
  if (current.round === roundNumber) {
    const key = itemKey(current.spec);
    completed.add(key);
    itemDeck = itemDeck.filter(item => item !== key);
    if (pendingKey === key) pendingKey = null;
    updateProgress();
    saveProgress();
  }
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
    const example = grammarExample(spec);
    const lines = [
      [`${item.pattern} — ${item.meaning}`], [`Cách nối: ${item.join}`], [`Ví dụ: ${example.full}`],
      [example.hira, "jp"], [`Dịch: ${example.vi}`]
    ];
    for (const [line, extra] of lines) {
      const detail = document.createElement("span"); detail.className = "detail" + (extra ? ` ${extra}` : "");
      if (extra === "jp") detail.lang = "ja";
      detail.textContent = line; feedback.append(detail);
    }
  }
  const hint = document.createElement("span"); hint.className = "next-hint"; hint.textContent = "← xem câu trước · → hoặc Enter sang câu tiếp."; feedback.append(hint);
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
$("hiraButton").onclick = () => toggleHint("hira");
$("meaningButton").onclick = () => toggleHint("meaning");
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { setSidebar(false); return; }
  if ($("sidebar").classList.contains("open")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "Enter" && [$("hiraButton"), $("meaningButton")].includes(event.target)) {
    event.preventDefault();
    toggleHint(event.target === $("hiraButton") ? "hira" : "meaning");
    return;
  }
  // Để Enter trên nút đang được chọn (kể cả đáp án) hoạt động như một cú bấm bình thường.
  if (event.key === "Enter" && ([$("menuButton"), $("previousButton"), $("nextButton")].includes(event.target) ||
    event.target.classList?.contains("answer") || event.target.tagName === "A")) return;
  if (event.key === "ArrowLeft") { event.preventDefault(); previousQuestion(); return; }
  if (event.key === "ArrowRight" || event.key === "Enter") { event.preventDefault(); nextQuestion(); return; }
  if (/^[1-4]$/.test(event.key)) {
    event.preventDefault();
    const button = $("answers").children[Number(event.key) - 1];
    if (current.chosen !== null) nextQuestion(); else button?.click();
  }
}, true);
function applyMode() {
  document.title = MODE.title;
  $("quiz").setAttribute("aria-label", MODE.title);
  $("sidebarTitle").replaceChildren(MODE.heading[0], document.createElement("br"), MODE.heading[1]);
  $("sidebarIntro").textContent = MODE.intro;
  for (const link of document.querySelectorAll(".mode-switch a")) {
    if (link.dataset.mode === MODE_NAME) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
}
applyMode();
restoreProgress();
updateProgress();
$("sidebar").inert = true;
nextQuestion();
