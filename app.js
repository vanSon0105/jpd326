const $ = (id) => document.getElementById(id);
const STORAGE_KEY = "so-kanji-progress-v1";
let progress = readProgress();
let lesson = 0;
let mode = "kanji-hira";
let reviewOnly = false;
let view = "practice";
let queue = [];
let current = null;
let answered = false;
let sessionCount = 0;

function readProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {} }
function shuffle(items) { const a = [...items]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function scopeWords() { return WORDS.filter(w => (!lesson || w.lesson === lesson) && (!reviewOnly || progress[w.id]?.wrong > 0)); }
function normalizeHira(value) { return value.normalize("NFKC").trim().replace(/[\s・･]/g, "").replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 96)); }
function safeText(el, value) { el.textContent = value; }

function renderLessons() {
  const nav = $("lessonNav"); nav.replaceChildren();
  for (const n of [0, 6, 7, 8, 9, 10]) {
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "lesson-item" + (lesson === n ? " active" : "");
    btn.innerHTML = `<span class="lesson-name">${n ? `Bài ${n}` : "Tất cả bài"}</span><span>${WORDS.filter(w => !n || w.lesson === n).length}</span>`;
    btn.onclick = () => { lesson = n; queue = []; renderLessons(); renderStats(); if (view === "practice") nextQuestion(); else renderLibrary(); closeMenu(); };
    nav.append(btn);
  }
}
function renderStats() {
  const scoped = WORDS.filter(w => !lesson || w.lesson === lesson);
  const seen = scoped.filter(w => progress[w.id]?.seen > 0).length;
  const correct = scoped.filter(w => progress[w.id]?.correct > 0 && !(progress[w.id]?.wrong > 0)).length;
  const wrong = scoped.filter(w => progress[w.id]?.wrong > 0).length;
  safeText($("totalStat"), scoped.length); safeText($("seenStat"), seen);
  safeText($("correctStat"), correct); safeText($("wrongStat"), wrong);
  safeText($("coverageText"), `${seen} / ${scoped.length}`);
  $("progressFill").style.width = scoped.length ? `${seen / scoped.length * 100}%` : "0%";
  safeText($("scopeText"), `${lesson ? `Bài ${lesson}` : "Bài 6–10"} · ${scoped.length} từ lấy từ slide`);
  safeText($("navPracticeCount"), scoped.length); safeText($("navLibraryCount"), WORDS.length);
  safeText($("reviewDescription"), reviewOnly ? `${wrong} từ cần ôn trong phạm vi đã chọn.` : "Luyện toàn bộ từ của bài đã chọn.");
}
function setView(next) {
  view = next;
  $("practiceView").hidden = next !== "practice"; $("libraryView").hidden = next !== "library";
  $("navPractice").classList.toggle("active", next === "practice"); $("navLibrary").classList.toggle("active", next === "library");
  if (next === "library") renderLibrary(); else if (!current) nextQuestion();
  closeMenu();
}
function answerField(w) { return mode === "kanji-hira" ? w.hira : mode === "hira-kanji" || mode === "meaning-kanji" ? w.kanji : w.meaning; }
function promptField(w) { return mode === "hira-kanji" ? w.hira : mode === "meaning-kanji" ? w.meaning : w.kanji; }
function getOptions(w) {
  const answer = answerField(w);
  const pool = shuffle(WORDS.filter(other => other.id !== w.id && answerField(other) !== answer && (other.lesson === w.lesson || Math.random() < .2)));
  const options = [answer];
  for (const other of pool) { const value = answerField(other); if (!options.includes(value)) options.push(value); if (options.length === 4) break; }
  return shuffle(options);
}
function nextQuestion() {
  answered = false; $("feedback").hidden = true; $("nextButton").hidden = true;
  const pool = scopeWords();
  if (!pool.length) {
    current = null; safeText($("questionWord"), "—"); safeText($("questionPrompt"), reviewOnly ? "Chưa có từ sai trong phạm vi này." : "Không có từ để luyện.");
    safeText($("questionLesson"), lesson ? `Bài ${lesson}` : "Bài 6–10"); $("answerArea").replaceChildren(); safeText($("questionNumber"), ""); return;
  }
  const ids = new Set(pool.map(w => w.id)); queue = queue.filter(id => ids.has(id));
  if (!queue.length) queue = shuffle(pool.map(w => w.id));
  if (queue.length > 1 && queue[0] === current?.id) [queue[0], queue[1]] = [queue[1], queue[0]];
  const nextId = queue.shift();
  current = WORDS.find(w => w.id === nextId);
  sessionCount++;
  safeText($("questionLesson"), `Bài ${current.lesson}`); safeText($("questionNumber"), `Câu ${sessionCount}`);
  const labels = { "kanji-hira": "Chọn cách đọc đúng", "hira-kanji": "Chọn kanji tương ứng", "kanji-meaning": "Chọn nghĩa tiếng Việt", "meaning-kanji": "Chọn kanji tương ứng", typing: "Gõ cách đọc bằng hiragana" };
  safeText($("questionPrompt"), labels[mode]); safeText($("questionWord"), promptField(current));
  $("questionWord").classList.toggle("meaning", mode === "meaning-kanji");
  $("questionWord").lang = mode === "meaning-kanji" ? "vi" : "ja";
  renderAnswers();
}
function renderAnswers() {
  const area = $("answerArea"); area.replaceChildren();
  safeText($("shortcutHint"), mode === "typing" ? "Nhấn Enter để kiểm tra" : "Phím 1–4 để chọn đáp án");
  if (mode === "typing") {
    const form = document.createElement("form"); form.className = "typing-form";
    const input = document.createElement("input"); input.type = "text"; input.autocomplete = "off"; input.spellcheck = false; input.placeholder = "Nhập hiragana…"; input.setAttribute("aria-label", "Nhập cách đọc bằng hiragana");
    const btn = document.createElement("button"); btn.type = "submit"; btn.textContent = "Kiểm tra";
    form.append(input, btn); form.onsubmit = e => { e.preventDefault(); if (!answered && input.value.trim()) grade(normalizeHira(input.value) === current.hira, input.value); };
    area.append(form); input.focus();
  } else {
    const grid = document.createElement("div"); grid.className = "answer-grid";
    for (const [i, option] of getOptions(current).entries()) {
      const btn = document.createElement("button"); btn.type = "button"; btn.className = "answer-option" + (mode === "kanji-meaning" ? " meaning-option" : "");
      btn.textContent = `${i + 1}.  ${option}`; btn.dataset.answer = option; btn.onclick = () => grade(option === answerField(current), option);
      grid.append(btn);
    }
    area.append(grid);
  }
}
function grade(isCorrect, chosen) {
  if (answered || !current) return;
  answered = true;
  const item = progress[current.id] || { seen: 0, correct: 0, wrong: 0 };
  item.seen++; if (isCorrect) { item.correct++; item.wrong = 0; } else item.wrong++;
  progress[current.id] = item; saveProgress(); renderStats();
  const buttons = $("answerArea").querySelectorAll(".answer-option");
  buttons.forEach(btn => { btn.disabled = true; if (btn.dataset.answer === answerField(current)) btn.classList.add("correct"); else if (btn.dataset.answer === chosen) btn.classList.add("incorrect"); });
  const input = $("answerArea").querySelector("input"); if (input) { input.disabled = true; $("answerArea").querySelector("button").disabled = true; }
  const box = $("feedback"); box.className = "feedback " + (isCorrect ? "good" : "bad"); box.replaceChildren();
  const title = document.createElement("strong"); title.textContent = isCorrect ? "Chính xác" : "Chưa đúng";
  const detail = document.createElement("span"); detail.lang = "ja"; detail.textContent = `${current.kanji} · ${current.hira}`;
  const meaning = document.createElement("span"); meaning.textContent = ` — ${current.meaning}`;
  box.append(title, detail, meaning); box.hidden = false; $("nextButton").hidden = false; $("nextButton").focus();
}
function renderLibrary() {
  const query = $("searchInput").value.trim().toLocaleLowerCase("vi");
  const list = WORDS.filter(w => (!lesson || w.lesson === lesson) && (!query || `${w.kanji} ${w.hira} ${w.meaning}`.toLocaleLowerCase("vi").includes(query)));
  safeText($("resultCount"), `${list.length} từ`);
  const root = $("wordList"); root.replaceChildren();
  if (!list.length) { const empty = document.createElement("p"); empty.className = "empty-state"; empty.textContent = "Không tìm thấy từ phù hợp."; root.append(empty); return; }
  for (const w of list) {
    const row = document.createElement("div"); row.className = "word-row";
    for (const [cls, value, lang] of [["jp", w.kanji, "ja"], ["hira", w.hira, "ja"], ["meaning", w.meaning, "vi"], ["lesson-tag", `Bài ${w.lesson}`, "vi"]]) {
      const span = document.createElement("span"); span.className = cls; span.lang = lang; span.textContent = value; row.append(span);
    }
    root.append(row);
  }
}
function closeMenu() { $("sidebar").classList.remove("open"); $("menuButton").setAttribute("aria-expanded", "false"); }
$("navPractice").onclick = () => setView("practice"); $("navLibrary").onclick = () => setView("library");
$("mobileLibrary").onclick = () => setView(view === "library" ? "practice" : "library");
$("menuButton").onclick = () => { const open = $("sidebar").classList.toggle("open"); $("menuButton").setAttribute("aria-expanded", String(open)); };
$("modeSelect").onchange = e => { mode = e.target.value; queue = []; nextQuestion(); };
$("reviewToggle").onclick = () => { reviewOnly = !reviewOnly; $("reviewToggle").setAttribute("aria-pressed", String(reviewOnly)); queue = []; renderStats(); nextQuestion(); };
$("shuffleButton").onclick = nextQuestion; $("nextButton").onclick = nextQuestion; $("searchInput").oninput = renderLibrary;
$("resetProgress").onclick = () => { if (confirm("Xóa toàn bộ tiến độ và danh sách từ sai trên trình duyệt này?")) { progress = {}; saveProgress(); reviewOnly = false; $("reviewToggle").setAttribute("aria-pressed", "false"); queue = []; renderStats(); nextQuestion(); closeMenu(); } };
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenu();
  if (view !== "practice" || !current || e.target.matches("input, select, textarea")) return;
  if (answered && e.key === "Enter") { e.preventDefault(); nextQuestion(); return; }
  if (!answered && mode !== "typing" && /^[1-4]$/.test(e.key)) $("answerArea").querySelectorAll(".answer-option")[Number(e.key) - 1]?.click();
});
renderLessons(); renderStats(); nextQuestion();
