"use strict";

const video = document.querySelector("#video");
const qualitySelector = document.querySelector("#quality-selector");
const playPauseBtn = document.querySelector("#play-pause");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");
const volumeBtn = document.querySelector("#volume");
const progressIndicator = document.querySelector("#progress-indicator");
const progressBar = document.querySelector("#progress-bar");

// video file names
const videoFiles = {
  "Low Quality (480p)": "video_480p.mp4",
  "Medium Quality (720p)": "video_720p.mp4",
  "High Quality (1080p)": "video_1080p.mp4",
  "Very High Quality (1440p)": "video_1440p.mp4",
  "Ultra High Quality (4K)": "video_4k.mp4",
};

// update video source based on selected quality
qualitySelector.addEventListener("change", () => {
  const selectedQuality = qualitySelector.value;
  const videoFile = videoFiles[selectedQuality];
  console.log(`Selected quality: ${selectedQuality}`);
  console.log(`Video file: ${videoFile}`);
  video.src = `videos/${videoFile}`;
  video.load();
  console.log(`Video src: ${video.src}`);
  console.log(`Video currentSrc: ${video.currentSrc}`);
});

// rest of the code remains the same...

function playPauseFn() {
  video.paused ? video.play() : video.pause();
}

function updatePlayPauseIcon() {
  const icon = playPauseBtn.querySelector("i");
  icon.textContent = video.paused ? "play_arrow" : "pause";
}

// ...