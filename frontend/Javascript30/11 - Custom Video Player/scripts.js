const video = document.querySelector("video");
const progressHolder = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const volume = document.querySelector("input[name='volume']");
const playback = document.querySelector("input[name='playbackrate']");
const playButton = document.querySelector(".toggle");

function playPause() {
  const action = video.paused ? "play" : "pause";
  video[action]();
}
function isPlaying(e) {
  playButton.innerHTML = e.type === "pause" ? "►" : "||";
}
function playing() {
  const progress = (video.currentTime * 100) / video.duration;
  progressBar.style.flexBasis = `${progress}%`;
  const { currentTime, duration } = video;
  console.log({ progress, currentTime, duration });
}
function setProgress(e) {
  const progress = e.offsetX / progressHolder.offsetWidth;
  video.currentTime = progress * video.duration;
}
let scrubbing = false;
video.addEventListener("click", playPause);
playButton.addEventListener("click", playPause);
video.addEventListener("play", isPlaying);
video.addEventListener("pause", isPlaying);
video.addEventListener("timeupdate", playing);
progressHolder.addEventListener("click", setProgress);
progressHolder.addEventListener("mousedown", () => (scrubbing = true));
progressHolder.addEventListener("mouseup", () => (scrubbing = false));
progressHolder.addEventListener(
  "mousemove",
  (e) => scrubbing && setProgress(e)
);

playing();
