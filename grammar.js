const $ = id => document.getElementById(id);
const STORAGE_KEY = "so-bunpo-progress-v1";
const TYPES = ["sentence", "connection", "pattern-meaning", "meaning-pattern"];
const TYPE_LABELS = {
  sentence: "Chọn phần điền vào câu",
  connection: "Chọn dạng nối đúng trước cấu trúc",
  "pattern-meaning": "Chọn nghĩa của cấu trúc",
  "meaning-pattern": "Chọn cấu trúc đúng với nghĩa"
};
const PDFS = {
  6: ["Dekiru 3 - Chukyu Bai 6.pdf", 74], 7: ["Dekiru 3 - Chukyu Bai 7.pdf", 86],
  8: ["Dekiru 3 - Chukyu Bai 8.pdf", 100], 9: ["Dekiru 3 - Chukyu Bai 9.pdf", 114],
  10: ["Dekiru 3 - Chukyu Bai 10.pdf", 128]
};
let progress = loadProgress();
let lesson = 0;
let mode = "mixed";
let reviewOnly = false;
let view = "practice";
let queue = [];
let current = null;
let answered = false;
let sessionCount = 0;

function loadProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
function saveProgress() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {} }
function shuffle(items) { const a = [...items]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function keyFor(item, type, variant = 0) { return `${item.id}:${type}${variant ? `:${variant}` : ""}`; }
function scopeEntries() { return GRAMMAR.filter(g => !lesson || g.lesson === lesson); }
function scopePairs() {
  const types = mode === "mixed" ? TYPES : [mode];
  return scopeEntries().flatMap(item => types.flatMap(type => {
    const variants = type === "connection" && EXTRA_CONNECTIONS[item.id] ? [0, 1] : [0];
    return variants.map(variant => ({ item, type, variant }));
  }).filter(pair => !reviewOnly || progress[keyFor(item, pair.type, pair.variant)]?.wrong > 0));
}
function plain(value) { return value === "∅" ? "Không thêm gì" : value; }
function example(item) { return item.sentence.replace("＿＿", item.answer); }

function renderLessons() {
  const nav = $("lessonNav"); nav.replaceChildren();
  for (const n of [0, 6, 7, 8, 9, 10]) {
    const button = document.createElement("button"); button.type = "button";
    button.className = "lesson-item" + (lesson === n ? " active" : "");
    const label = document.createElement("span"); label.className = "lesson-name"; label.textContent = n ? `Bài ${n}` : "Tất cả bài";
    const count = document.createElement("span"); count.textContent = GRAMMAR.filter(g => !n || g.lesson === n).length;
    button.append(label, count);
    button.onclick = () => { lesson = n; queue = []; renderLessons(); renderStats(); if (view === "practice") nextQuestion(); else renderLibrary(); closeMenu(); };
    nav.append(button);
  }
}
function renderStats() {
  const entries = scopeEntries();
  const records = g => Object.entries(progress).filter(([key]) => key.startsWith(`${g.id}:`)).map(([, value]) => value);
  const touched = g => records(g).some(record => record.seen > 0);
  const pending = g => records(g).some(record => record.wrong > 0);
  const seen = entries.filter(touched).length;
  const wrong = entries.filter(pending).length;
  const mastered = entries.filter(g => touched(g) && !pending(g) && records(g).some(record => record.correct > 0)).length;
  $("totalStat").textContent = entries.length; $("seenStat").textContent = seen;
  $("correctStat").textContent = mastered; $("wrongStat").textContent = wrong;
  $("coverageText").textContent = `${seen} / ${entries.length}`;
  $("progressFill").style.width = entries.length ? `${seen / entries.length * 100}%` : "0%";
  $("scopeText").textContent = `${lesson ? `Bài ${lesson}` : "Bài 6–10"} · ${entries.length} cấu trúc từ sách`;
  $("navPracticeCount").textContent = entries.length; $("navLibraryCount").textContent = GRAMMAR.length;
  $("reviewDescription").textContent = reviewOnly ? `${scopePairs().length} dạng câu sai cần ôn trong phạm vi này.` : "Luyện mọi cấu trúc của bài đã chọn.";
}
function setView(next) {
  view = next; $("practiceView").hidden = next !== "practice"; $("libraryView").hidden = next !== "library";
  $("navPractice").classList.toggle("active", next === "practice"); $("navLibrary").classList.toggle("active", next === "library");
  if (next === "library") renderLibrary(); else if (!current) nextQuestion();
  closeMenu();
}
function connectionFor(item, variant) {
  return variant ? EXTRA_CONNECTIONS[item.id] : { connection: item.connection, answer: item.connectionAnswer, distractors: item.connectionDistractors };
}
function optionsFor(item, type, variant = 0) {
  if (type === "sentence") return shuffle([item.answer, ...item.distractors]);
  if (type === "connection") { const q = connectionFor(item, variant); return shuffle([q.answer, ...q.distractors]); }
  const field = type === "pattern-meaning" ? "meaning" : "pattern";
  const answer = item[field]; const choices = [answer];
  for (const other of shuffle(GRAMMAR.filter(g => g.id !== item.id && g.lesson === item.lesson))) {
    if (!choices.includes(other[field])) choices.push(other[field]);
    if (choices.length === 4) break;
  }
  return shuffle(choices);
}
function renderQuestionText(item, type, variant = 0) {
  const root = $("questionText"); root.replaceChildren(); root.classList.toggle("meaning-question", type === "meaning-pattern");
  root.lang = type === "meaning-pattern" ? "vi" : "ja";
  const value = type === "sentence" ? item.sentence : type === "connection" ? connectionFor(item, variant).connection : type === "pattern-meaning" ? item.pattern : item.meaning;
  const marker = type === "sentence" ? "＿＿" : type === "connection" ? "［　］" : null;
  if (!marker) { root.textContent = value; return; }
  const [before, after] = value.split(marker);
  const blank = document.createElement("span"); blank.className = "blank"; blank.textContent = marker;
  root.append(document.createTextNode(before), blank, document.createTextNode(after));
}
function nextQuestion() {
  answered = false; $("feedback").hidden = true; $("nextButton").hidden = true;
  const pairs = scopePairs();
  if (!pairs.length) {
    current = null; $("questionText").textContent = "—";
    $("questionPrompt").textContent = reviewOnly ? "Không còn câu sai trong phạm vi này." : "Không có cấu trúc để luyện.";
    $("questionLesson").textContent = lesson ? `Bài ${lesson}` : "Bài 6–10";
    $("questionNumber").textContent = ""; $("answerArea").replaceChildren(); return;
  }
  const valid = new Set(pairs.map(({ item, type, variant }) => keyFor(item, type, variant)));
  queue = queue.filter(key => valid.has(key));
  if (!queue.length) queue = shuffle([...valid]);
  if (queue.length > 1 && queue[0].split(":")[0] === current?.item.id) {
    const alternate = queue.findIndex(key => key.split(":")[0] !== current.item.id);
    if (alternate > 0) [queue[0], queue[alternate]] = [queue[alternate], queue[0]];
  }
  const nextKey = queue.shift();
  const pair = pairs.find(({ item, type, variant }) => keyFor(item, type, variant) === nextKey);
  current = { ...pair, key: nextKey }; sessionCount++;
  $("questionLesson").textContent = `Bài ${pair.item.lesson} · tr. ${pair.item.page}`;
  $("questionNumber").textContent = `Câu ${sessionCount}`;
  $("questionPrompt").textContent = TYPE_LABELS[pair.type];
  renderQuestionText(pair.item, pair.type, pair.variant);
  const grid = document.createElement("div"); grid.className = "answer-grid";
  const correct = correctAnswer(pair.item, pair.type, pair.variant);
  for (const [index, option] of optionsFor(pair.item, pair.type, pair.variant).entries()) {
    const button = document.createElement("button"); button.type = "button";
    button.className = "answer-option" + (pair.type === "pattern-meaning" ? " meaning-option" : "");
    button.textContent = `${index + 1}.  ${plain(option)}`; button.dataset.answer = option;
    button.onclick = () => grade(option === correct, option);
    grid.append(button);
  }
  $("answerArea").replaceChildren(grid);
}
function correctAnswer(item, type, variant = 0) { return type === "sentence" ? item.answer : type === "connection" ? connectionFor(item, variant).answer : type === "pattern-meaning" ? item.meaning : item.pattern; }
function grade(isCorrect, chosen) {
  if (!current || answered) return; answered = true;
  const { item, type, variant, key } = current;
  const record = progress[key] || { seen: 0, correct: 0, wrong: 0 };
  record.seen++; if (isCorrect) { record.correct++; record.wrong = 0; } else record.wrong++;
  progress[key] = record; saveProgress(); renderStats();
  for (const button of $("answerArea").querySelectorAll(".answer-option")) {
    button.disabled = true;
    if (button.dataset.answer === correctAnswer(item, type, variant)) button.classList.add("correct");
    else if (button.dataset.answer === chosen) button.classList.add("incorrect");
  }
  const box = $("feedback"); box.className = "feedback " + (isCorrect ? "good" : "bad"); box.replaceChildren();
  const title = document.createElement("strong"); title.textContent = isCorrect ? "Chính xác" : "Chưa đúng";
  const answer = document.createElement("span"); answer.textContent = `${item.pattern} — ${item.meaning}`;
  const joined = document.createElement("span"); joined.className = "explain"; joined.textContent = `Cách nối: ${item.join}`;
  const complete = document.createElement("span"); complete.className = "explain"; complete.lang = "ja"; complete.textContent = `Ví dụ: ${example(item)}`;
  const source = document.createElement("span"); source.className = "source"; source.textContent = `Nguồn: Dekiru 3, bài ${item.lesson}, trang ${item.page}`;
  box.append(title, answer, joined, complete, source); box.hidden = false;
  $("nextButton").hidden = false; $("nextButton").focus();
}
function renderLibrary() {
  const query = $("searchInput").value.trim().toLocaleLowerCase("vi");
  const entries = scopeEntries().filter(g => !query || `${g.pattern} ${g.meaning} ${g.join} ${g.sentence}`.toLocaleLowerCase("vi").includes(query));
  $("resultCount").textContent = `${entries.length} cấu trúc`;
  const root = $("grammarList"); root.replaceChildren();
  if (!entries.length) { const empty = document.createElement("p"); empty.className = "grammar-empty"; empty.textContent = "Không tìm thấy cấu trúc phù hợp."; root.append(empty); return; }
  for (const item of entries) {
    const details = document.createElement("details"); details.className = "grammar-entry";
    const summary = document.createElement("summary");
    for (const [cls, value] of [["pattern", item.pattern], ["meaning", item.meaning], ["page", `Bài ${item.lesson} · tr. ${item.page}`]]) {
      const span = document.createElement("span"); span.className = cls; span.textContent = value; summary.append(span);
    }
    const body = document.createElement("div"); body.className = "grammar-entry-body";
    const join = document.createElement("div"); const joinTitle = document.createElement("p"); joinTitle.className = "entry-label"; joinTitle.textContent = "Cách nối"; const joinText = document.createElement("p"); joinText.className = "entry-value"; joinText.textContent = item.join; join.append(joinTitle, joinText);
    const ex = document.createElement("div"); const exTitle = document.createElement("p"); exTitle.className = "entry-label"; exTitle.textContent = "Ví dụ"; const exText = document.createElement("p"); exText.className = "entry-value example"; exText.lang = "ja"; exText.textContent = example(item); ex.append(exTitle, exText);
    const [file, offset] = PDFS[item.lesson]; const link = document.createElement("a"); link.href = `bunpo/${encodeURIComponent(file)}#page=${item.page - offset}`; link.textContent = "Mở trang trong PDF"; link.target = "_blank"; link.rel = "noopener"; join.append(document.createElement("br"), link);
    body.append(join, ex); details.append(summary, body); root.append(details);
  }
}
function closeMenu() { $("sidebar").classList.remove("open"); $("menuButton").setAttribute("aria-expanded", "false"); }
$("navPractice").onclick = () => setView("practice"); $("navLibrary").onclick = () => setView("library");
$("mobileLibrary").onclick = () => setView(view === "library" ? "practice" : "library");
$("menuButton").onclick = () => { const open = $("sidebar").classList.toggle("open"); $("menuButton").setAttribute("aria-expanded", String(open)); };
$("modeSelect").onchange = e => { mode = e.target.value; queue = []; renderStats(); nextQuestion(); };
$("reviewToggle").onclick = () => { reviewOnly = !reviewOnly; $("reviewToggle").setAttribute("aria-pressed", String(reviewOnly)); queue = []; renderStats(); nextQuestion(); };
$("shuffleButton").onclick = nextQuestion; $("nextButton").onclick = nextQuestion; $("searchInput").oninput = renderLibrary;
$("resetProgress").onclick = () => { if (confirm("Xóa tiến độ và danh sách câu sai ngữ pháp trên trình duyệt này?")) { progress = {}; saveProgress(); reviewOnly = false; $("reviewToggle").setAttribute("aria-pressed", "false"); queue = []; renderStats(); nextQuestion(); closeMenu(); } };
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenu();
  if (view !== "practice" || !current || e.target.matches("input, select, textarea")) return;
  if (answered && e.key === "Enter") { e.preventDefault(); nextQuestion(); return; }
  if (!answered && /^[1-4]$/.test(e.key)) $("answerArea").querySelectorAll(".answer-option")[Number(e.key) - 1]?.click();
});
renderLessons(); renderStats(); nextQuestion();
