const $ = id => document.getElementById(id);
const KANJI_TYPES = ["kanji-hira", "hira-kanji", "kanji-meaning", "meaning-kanji"];
const GRAMMAR_TYPES = ["sentence", "connection", "pattern-meaning", "meaning-pattern"];
const VOCAB_TYPES = ["vocab-meaning", "meaning-vocab", "vocab-reading"];
const EXAM_PROMPTS = {
  fill: "Chọn đáp án đúng điền vào chỗ trống.",
  read: "Chọn cách đọc đúng của từ được đánh dấu.",
  write: "Chọn chữ Hán đúng của từ được đánh dấu.",
  star: "Chọn từ đặt vào vị trí ★.",
  mean: "Chọn từ gần nghĩa nhất.",
  usage: "Chọn câu dùng từ này đúng nhất.",
  feel: "Chọn từ tả đúng cảm xúc trong tình huống này.",
  reading: "Đọc đoạn văn rồi trả lời câu hỏi."
};
const PROMPTS = {
  "vocab-meaning": "Từ này có nghĩa gì?",
  "meaning-vocab": "Nghĩa này ứng với từ nào?",
  "vocab-reading": "Từ này đọc thế nào?",
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
  })),
  // Chỉ hỏi cách đọc khi từ có chữ Hán (cách đọc khác mặt chữ).
  vocab: VOCAB.flatMap(item => VOCAB_TYPES.filter(type => type !== "vocab-reading" || item.reading !== item.word)
    .map(type => ({ category: "vocab", type, item, id: `v-${item.id}-${type}` }))),
  exam: EXAM.map(item => ({ category: "exam", type: "exam", item, id: `e-${item.id}` }))
};
const CATEGORY_INFO = {
  kanji: { label: "Kanji đã trả lời", total: WORDS.length, unit: "từ" },
  grammar: { label: "Ngữ pháp đã trả lời", total: GRAMMAR.length, unit: "cấu trúc" },
  vocab: { label: "Từ vựng đã trả lời", total: VOCAB.length, unit: "từ" },
  exam: { label: "Câu đề thi đã làm", total: EXAM.length, unit: "câu" }
};
// Chế độ đề lấy từ ?mode= trên URL; mỗi chế độ lưu tiến trình riêng.
const MODES = {
  all: {
    categories: ["kanji", "grammar", "vocab", "exam"], title: "Luyện đề tổng hợp · Bài 6–10", heading: ["Luyện đề", "tổng hợp."],
    intro: "Kanji, ngữ pháp, từ vựng bài 6–10 và câu hỏi đề thi các kỳ trước được trộn trong từng lượt. Trả lời đủ mọi mục rồi lượt mới được xáo lại.",
    storageKey: "jpd326-quiz-coverage-v1"
  },
  vocab: {
    categories: ["vocab"], title: "Luyện từ vựng · Bài 6–10", heading: ["Luyện", "từ vựng."],
    intro: `${VOCAB.length} từ vựng bài 6–10 (できる日本語 中級): nghĩa, cách đọc và ngược lại. Trả lời đủ mọi từ rồi lượt mới được xáo lại.`,
    storageKey: "jpd326-quiz-coverage-v1-vocab"
  },
  exam: {
    categories: ["exam"], title: "Luyện đề thi các kỳ trước", heading: ["Đề thi", "các kỳ trước."],
    intro: `${EXAM.length} câu từ đề giữa kỳ và cuối kỳ JPD326 (SP2024, SU2024, SU2025), kể cả bài đọc hiểu. Đáp án và giải thích do người soạn tự làm, có thể có sai sót.`,
    storageKey: "jpd326-quiz-coverage-v1-exam"
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
const CHUNK_SIZES = [6, 10, 20];
const CHUNK_SIZE_KEY = "jpd326-chunk-size";
let chunkSize = 6;
// Học theo phần: mỗi phần hỏi lượt chính (main), câu sai được hỏi lại ở cuối phần (retry);
// sai tiếp thì chuyển sang đầu phần sau (carry). Hết câu mới thì câu nợ được hỏi lại tới khi đúng.
let state = freshRound(1);
let variantDecks = {};
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
// Chọn 3 đáp án nhiễu, ưu tiên cùng bài; field lấy giá trị cần so của từng mục.
function pickOptions(pool, item, field, extraEligible = () => true) {
  const answer = field(item);
  const eligible = other => other.id !== item.id && field(other) !== answer && extraEligible(other);
  const nearby = shuffle(pool.filter(other => other.lesson === item.lesson && eligible(other)));
  const rest = shuffle(pool.filter(other => other.lesson !== item.lesson && eligible(other)));
  const values = [answer];
  for (const other of [...nearby, ...rest]) {
    const value = field(other);
    if (!values.includes(value)) values.push(value);
    if (values.length === 4) break;
  }
  return shuffle(values);
}
function vocabField(item, type) {
  if (type === "vocab-meaning") return item.meaning;
  if (type === "vocab-reading") return item.reading;
  return item.word;
}
function vocabOptions(item, type) {
  const suru = value => value.endsWith("（する）");
  return pickOptions(VOCAB, item, other => vocabField(other, type), other =>
    suru(other.word) === suru(item.word) && (type === "vocab-reading" || !meaningOverlap(other.meaning, item.meaning)));
}
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
  return pickOptions(WORDS, item, other => wordField(other, type), other =>
    (type !== "hira-kanji" || other.hira !== item.hira) &&
    (!["kanji-meaning", "meaning-kanji"].includes(type) || !meaningOverlap(other.meaning, item.meaning)));
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
  if (category === "vocab") {
    const text = type === "meaning-vocab" ? item.meaning : item.word;
    return { text, answer: vocabField(item, type), options: vocabOptions(item, type), viQuestion: type === "meaning-vocab", viOptions: type === "vocab-meaning" };
  }
  if (category === "exam") {
    const marker = item.question.split("（　）").length === 2 ? "（　）" : undefined;
    return { text: item.question, marker, answer: item.answer, options: shuffle(item.options) };
  }
  if (type === "sentence") return { text: item.sentence, marker: "＿＿", answer: item.answer, options: grammarOptions(item, type, variant) };
  if (type === "connection") {
    const rule = grammarConnection(item, variant);
    return { text: grammarExample(spec).question, marker: "［　］", answer: rule.answer, options: grammarOptions(item, type, variant) };
  }
  if (type === "pattern-meaning") return { text: grammarExample(spec).full, answer: item.meaning, options: grammarOptions(item, type, variant), viOptions: true };
  return { text: grammarExample(spec).vi, answer: item.pattern, options: grammarOptions(item, type, variant), viQuestion: true };
}
function freshRound(round) {
  return { round, pool: shuffle(ITEM_KEYS), main: [], wrongs: [], retry: [], carry: [], mastered: new Set(), part: 0, extra: false };
}
// Chuẩn bị hàng đợi: hết lượt chính thì sang lượt sửa, hết phần thì mở phần mới, hết lượt thì xáo lại.
function ensureQueue(lastKey) {
  for (let guard = 0; guard < 5; guard++) {
    if (state.main.length || state.retry.length) return;
    if (state.wrongs.length) { state.retry = state.wrongs; state.wrongs = []; continue; }
    if (state.pool.length || state.carry.length) {
      const fresh = state.pool.splice(0, chunkSize);
      state.main = [...state.carry, ...fresh];
      state.carry = [];
      state.extra = fresh.length === 0;
      if (fresh.length) state.part++;
      continue;
    }
    state = freshRound(state.round + 1);
    if (lastKey && state.pool[0] === lastKey && state.pool.length > 1) [state.pool[0], state.pool[1]] = [state.pool[1], state.pool[0]];
  }
}
function activePhase() { return state.main.length ? "main" : "retry"; }
function updateProgress() {
  const total = ITEM_KEYS.length;
  const done = state.mastered.size;
  $("progressDone").textContent = done;
  $("progressTotal").textContent = total;
  $("progressBar").setAttribute("aria-valuenow", String(done));
  $("progressBar").setAttribute("aria-valuemax", String(total));
  const segments = $("progressTrack").children;
  for (let i = 0; i < segments.length; i++) {
    const fill = Math.min(1, Math.max(0, done / total * segments.length - i));
    segments[i].firstElementChild.style.width = `${fill * 100}%`;
  }
  const where = state.extra ? "Ôn lại câu sai còn nợ"
    : `Phần ${state.part}/${state.part + Math.ceil(state.pool.length / chunkSize)}`;
  const status = state.main.length ? `còn ${state.main.length} câu`
    : state.retry.length || state.wrongs.length ? `hỏi lại ${state.retry.length + state.wrongs.length} câu sai`
      : "xong phần này";
  const carried = state.carry.length ? ` · ${state.carry.length} câu chuyển sang phần sau` : "";
  $("progressNote").textContent = `${where} · ${status}${carried}`;
  const counts = Object.fromEntries(MODE.categories.map(category => [category, 0]));
  for (const key of state.mastered) counts[key.split(":")[0]]++;
  $("roundCount").textContent = state.round;
  for (const category of MODE.categories) {
    const info = CATEGORY_INFO[category];
    $(`count-${category}`).textContent = `${counts[category]}/${info.total} ${info.unit}`;
  }
}
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, ...state, mastered: [...state.mastered], variantDecks }));
  } catch { /* Trang vẫn dùng được khi trình duyệt chặn lưu trữ. */ }
}
// Khôi phục tiến trình; mục mới thêm vào ngân hàng câu hỏi được nối vào cuối lượt đang làm.
function restoreProgress() {
  try {
    const stored = Number(localStorage.getItem(CHUNK_SIZE_KEY));
    if (CHUNK_SIZES.includes(stored)) chunkSize = stored;
  } catch { /* Dùng kích thước mặc định. */ }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Number.isSafeInteger(saved.roundNumber ?? saved.round) || (saved.roundNumber ?? saved.round) < 1) return;
    const seen = new Set();
    const keep = list => (Array.isArray(list) ? list : []).filter(key => ITEM_KEY_SET.has(key) && !seen.has(key) && seen.add(key));
    if (saved.version === 2) {
      const mastered = new Set(keep(saved.mastered));
      state = { round: saved.round, mastered, main: keep(saved.main), retry: keep(saved.retry), wrongs: keep(saved.wrongs),
        carry: keep(saved.carry), pool: keep(saved.pool), part: Number(saved.part) || 0, extra: Boolean(saved.extra) };
    } else {
      // Bản lưu cũ: mục đã trả lời được tính là đã thuộc, phần còn lại học theo phần.
      state = freshRound(saved.roundNumber);
      state.mastered = new Set(keep(saved.completed));
      state.pool = [];
    }
    state.pool.push(...shuffle(ITEM_KEYS.filter(key => !seen.has(key))));
    variantDecks = {};
    for (const [key, ids] of Object.entries(saved.variantDecks || {})) {
      if (ITEM_KEY_SET.has(key) && Array.isArray(ids)) {
        variantDecks[key] = [...new Set(ids.filter(id => QUESTION_GROUPS.get(key).includes(id)))];
      }
    }
  } catch { state = freshRound(1); }
}
function drawSpec(lastKey) {
  ensureQueue(lastKey);
  const phase = activePhase();
  const key = (phase === "main" ? state.main : state.retry)[0];
  if (!variantDecks[key]?.length) variantDecks[key] = shuffle(QUESTION_GROUPS.get(key));
  const spec = QUESTION_BY_ID.get(variantDecks[key].shift());
  updateProgress();
  saveProgress();
  return { spec, key, phase };
}
// Xử lý câu trả lời (hoặc bỏ qua) của câu đang hỏi trong hàng đợi.
function settle(entry, correct) {
  const queue = entry.phase === "main" ? state.main : state.retry;
  const index = queue.indexOf(entry.key);
  if (index < 0) return;
  queue.splice(index, 1);
  if (correct === null) queue.push(entry.key);
  else if (correct) state.mastered.add(entry.key);
  else if (entry.phase === "main") state.wrongs.push(entry.key);
  else state.carry.push(entry.key);
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
  else if (spec.category === "vocab") values = { hira: spec.item.reading === spec.item.word ? null : spec.item.reading, meaning: spec.item.meaning };
  else if (spec.category === "exam") values = { hira: null, meaning: null };
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
  const exam = spec.category === "exam" ? spec.item : null;
  $("questionPrompt").textContent = exam
    ? `Đề ${exam.sources[0].split(" câu")[0]} · ${EXAM_PROMPTS[exam.kind]}` : PROMPTS[spec.type];
  const passage = exam?.passage ? EXAM_PASSAGES[exam.passage] : null;
  $("passage").hidden = !passage;
  if (passage) { $("passageTitle").textContent = passage.title; $("passageText").textContent = passage.text; }
  renderQuestionText(parts.text, parts.marker, parts.viQuestion, ["grammar", "exam"].includes(spec.category));
  $("questionText").classList.toggle("exam", Boolean(exam));
  renderHints(entry);
  const root = $("answers"); root.replaceChildren(); root.classList.remove("answered");
  for (const [index, option] of parts.options.entries()) {
    const button = document.createElement("button"); button.type = "button";
    button.className = "answer" + (parts.viOptions ? " vi" : "") + (option.length > 16 ? " long" : "");
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
    const last = history[history.length - 1];
    // Bỏ qua câu đang hỏi: đẩy xuống cuối hàng đợi hiện tại.
    if (last?.live && last.chosen === null) settle(last, null);
    if (last) last.live = false;
    const { spec, key, phase } = drawSpec(last?.key);
    history.push({ spec, key, phase, live: true, parts: questionParts(spec), chosen: null, hiraShown: false, meaningShown: false });
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
  // Chỉ câu mới nhất được tính vào tiến độ; trả lời câu cũ trong lịch sử chỉ để ôn.
  if (current.live) {
    settle(current, chosen === current.parts.answer);
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
  const item = spec.item;
  let lines;
  if (spec.category === "kanji") lines = [[`${item.kanji} · ${item.hira} — ${item.meaning}`, "jp"]];
  else if (spec.category === "vocab") lines = [[`${item.word} · ${item.reading} — ${item.meaning}`, "jp"], [`Từ vựng bài ${item.lesson}`]];
  else if (spec.category === "exam") lines = [[`Giải thích: ${item.explain}`], [`Nguồn: ${item.sources.join(", ")}`]];
  else {
    const example = grammarExample(spec);
    lines = [
      [`${item.pattern} — ${item.meaning}`], [`Cách nối: ${item.join}`], [`Ví dụ: ${example.full}`],
      [example.hira, "jp"], [`Dịch: ${example.vi}`]
    ];
  }
  for (const [line, extra] of lines) {
    const detail = document.createElement("span"); detail.className = "detail" + (extra ? ` ${extra}` : "");
    if (extra === "jp") detail.lang = "ja";
    detail.textContent = line; feedback.append(detail);
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
  for (let i = 0; i < 6; i++) {
    const segment = document.createElement("span"); segment.className = "progress-segment";
    segment.append(document.createElement("span"));
    $("progressTrack").append(segment);
  }
  $("chunkSize").value = String(chunkSize);
  $("chunkSize").onchange = event => {
    const size = Number(event.target.value);
    if (!CHUNK_SIZES.includes(size)) return;
    chunkSize = size;
    try { localStorage.setItem(CHUNK_SIZE_KEY, String(size)); } catch { /* Chỉ áp dụng trong phiên này. */ }
    updateProgress();
  };
  for (const category of MODE.categories) {
    const row = document.createElement("div");
    const label = document.createElement("span"); label.textContent = CATEGORY_INFO[category].label;
    const value = document.createElement("strong"); value.id = `count-${category}`;
    row.append(label, value);
    $("sidebarFacts").append(row);
  }
  for (const link of document.querySelectorAll(".mode-switch a")) {
    if (link.dataset.mode === MODE_NAME) {
      link.setAttribute("aria-current", "page");
      link.scrollIntoView?.({ block: "nearest", inline: "center" });
    } else link.removeAttribute("aria-current");
  }
}
restoreProgress();
applyMode();
$("sidebar").inert = true;
nextQuestion();
