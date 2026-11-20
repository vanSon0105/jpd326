// Trang luyện nghe: phát từng track, bật/tắt script, furigana (hira) và bản dịch; bấm câu để nghe lại.
const $ = id => document.getElementById(id);
const SETTINGS_KEY = "jpd326-listen-settings";
const settings = { track: LISTENING[0]?.track, script: false, hira: false, vi: false, speed: 1, seek: 5 };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}); } catch { /* Dùng mặc định. */ }
const save = () => { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch { /* Bỏ qua. */ } };
let current = LISTENING.find(item => item.track === settings.track) || LISTENING[0];
let activeLine = -1;

// Dựng chữ có furigana từ dạng ｜漢字《かんじ》.
function appendRuby(root, marked) {
  for (const part of marked.split(/(｜[^《]+《[^》]+》)/)) {
    const m = part.match(/^｜([^《]+)《([^》]+)》$/);
    if (!m) { if (part) root.append(document.createTextNode(part)); continue; }
    const ruby = document.createElement("ruby");
    const rt = document.createElement("rt"); rt.textContent = m[2];
    ruby.append(document.createTextNode(m[1]), rt);
    root.append(ruby);
  }
}
const plain = marked => marked.replace(/｜([^《]+)《[^》]+》/g, "$1");

function renderTrackList() {
  const root = $("trackList"); root.replaceChildren();
  for (const lesson of [...new Set(LISTENING.map(item => item.lesson))]) {
    const group = document.createElement("div"); group.className = "track-group";
    const label = document.createElement("span"); label.className = "track-lesson"; label.textContent = `Bài ${lesson}`;
    group.append(label);
    for (const item of LISTENING.filter(entry => entry.lesson === lesson)) {
      const button = document.createElement("button"); button.type = "button";
      const word = document.createElement("span"); word.className = "track-word"; word.textContent = "Track ";
      button.append(word, String(item.track));
      button.title = item.title;
      if (item === current) button.setAttribute("aria-current", "true");
      button.onclick = () => selectTrack(item, true);
      group.append(button);
    }
    root.append(group);
  }
}
function renderScript() {
  const root = $("script"); root.replaceChildren();
  current.lines.forEach((line, index) => {
    const li = document.createElement("li"); li.dataset.index = index;
    const ja = document.createElement("span"); ja.className = "line-ja"; ja.lang = "ja";
    if (line.speaker) { const who = document.createElement("b"); who.textContent = `${line.speaker}：`; ja.append(who); }
    if (settings.hira) appendRuby(ja, line.ruby || line.ja); else ja.append(document.createTextNode(plain(line.ruby || line.ja)));
    li.append(ja);
    if (settings.vi && line.vi) { const vi = document.createElement("span"); vi.className = "line-vi"; vi.textContent = line.vi; li.append(vi); }
    li.onclick = () => { $("audio").currentTime = line.start; $("audio").play(); };
    root.append(li);
  });
  activeLine = -1;
  highlight();
}
function renderToggles() {
  $("script").hidden = !settings.script;
  $("listenHint").hidden = settings.script;
  for (const [id, key, on, off] of [["scriptButton", "script", "Ẩn script", "Hiện script"], ["hiraButton", "hira", "Ẩn hira", "Hiện hira"], ["viButton", "vi", "Ẩn dịch", "Hiện dịch"]]) {
    $(id).textContent = settings[key] ? on : off;
    $(id).setAttribute("aria-pressed", String(settings[key]));
  }
}
function selectTrack(item, autoplay) {
  current = item; settings.track = item.track; save();
  $("trackMeta").textContent = `Bài ${item.lesson} · Track ${item.track}`;
  $("trackTitle").textContent = item.title;
  const audio = $("audio");
  audio.src = item.file.split("/").map(encodeURIComponent).join("/");
  audio.defaultPlaybackRate = audio.playbackRate = settings.speed;
  if (autoplay) audio.play().catch(() => {});
  const index = LISTENING.indexOf(item);
  $("prevTrack").disabled = index === 0;
  $("nextTrack").disabled = index === LISTENING.length - 1;
  renderTrackList();
  renderScript();
}
function highlight() {
  const time = $("audio").currentTime;
  const index = current.lines.findLastIndex(line => line.start <= time + 0.05);
  if (index === activeLine) return;
  activeLine = index;
  for (const li of $("script").children) li.classList.toggle("playing", Number(li.dataset.index) === index);
  const playing = $("script").children[index];
  if (playing && settings.script && !$("audio").paused) playing.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
function toggle(key) {
  settings[key] = !settings[key];
  if (key !== "script" && settings[key]) settings.script = true;
  save(); renderToggles(); renderScript();
}
$("scriptButton").onclick = () => toggle("script");
$("hiraButton").onclick = () => toggle("hira");
$("viButton").onclick = () => toggle("vi");
$("speed").value = String(settings.speed);
$("speed").onchange = event => {
  settings.speed = Number(event.target.value);
  $("audio").defaultPlaybackRate = $("audio").playbackRate = settings.speed;
  save();
};
// Bấm chuột vào thanh âm thanh thì trình duyệt giữ focus trong đó và nuốt hết phím (trang không nhận được
// Enter / ← →). Thả chuột xong thì trả focus về trang để phím tắt luôn dùng được.
const releaseAudioFocus = () => setTimeout(() => { if (document.activeElement === $("audio")) $("audio").blur(); }, 0);
for (const type of ["pointerup", "play", "pause", "seeked", "volumechange", "ratechange"]) $("audio").addEventListener(type, releaseAudioFocus);
$("audio").addEventListener("timeupdate", highlight);
$("audio").addEventListener("seeked", highlight);
// Tua lùi / tới theo số giây đã chỉnh (1–60).
const clampSeek = value => Math.min(60, Math.max(1, Math.round(Number(value)) || 5));
settings.seek = clampSeek(settings.seek);
function renderSeek() {
  $("seekStep").value = String(settings.seek);
  $("seekBack").textContent = `−${settings.seek}s`;
  $("seekForward").textContent = `+${settings.seek}s`;
  $("seekBack").setAttribute("aria-label", `Tua lùi ${settings.seek} giây`);
  $("seekForward").setAttribute("aria-label", `Tua tới ${settings.seek} giây`);
}
function seekBy(seconds) {
  const audio = $("audio");
  const end = Number.isFinite(audio.duration) ? audio.duration : current.duration || Infinity;
  audio.currentTime = Math.min(end, Math.max(0, audio.currentTime + seconds));
}
const togglePlay = () => { if ($("audio").paused) $("audio").play().catch(() => {}); else $("audio").pause(); };
$("seekBack").onclick = () => seekBy(-settings.seek);
$("seekForward").onclick = () => seekBy(settings.seek);
$("seekStep").onchange = event => { settings.seek = clampSeek(event.target.value); save(); renderSeek(); };
renderSeek();

// Phím tắt: Enter / Space phát–dừng, ← → tua. Bỏ qua khi đang gõ trong ô nhập hay ô chọn.
// Bắt ở pha capture trên window: khi đã bấm chuột vào thanh âm thanh, focus nằm trong nút điều khiển
// của trình duyệt và nó tự xử lý Enter / ← → trước khi sự kiện nổi lên document.
window.addEventListener("keydown", event => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  const tag = event.target.tagName;
  if (["INPUT", "SELECT", "TEXTAREA"].includes(tag)) {
    if (event.key === "Enter" && event.target === $("seekStep")) event.target.blur(); // Enter trong ô số giây: lưu luôn.
    return;
  }
  let action;
  if (event.key === "Enter" && tag !== "A") action = togglePlay;
  else if (event.key === " " && !["BUTTON", "A"].includes(tag)) action = togglePlay;
  else if (event.key === "ArrowLeft") action = () => seekBy(-settings.seek);
  else if (event.key === "ArrowRight") action = () => seekBy(settings.seek);
  if (!action) return;
  event.preventDefault(); event.stopPropagation();
  if (!event.repeat || event.key.startsWith("Arrow")) action();
}, true);
$("prevTrack").onclick = () => selectTrack(LISTENING[LISTENING.indexOf(current) - 1], true);
$("nextTrack").onclick = () => selectTrack(LISTENING[LISTENING.indexOf(current) + 1], true);
renderToggles();
selectTrack(current, false);
