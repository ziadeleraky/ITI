let video = document.getElementById("video");

// Waiting for video to load its metadata
setTimeout(function () {
  // document.getElementById("duration").innerText = video.duration.toFixed(1);
  document.getElementById("video-range").max = video.duration.toFixed(1);
}, 500);

document.getElementById("video-range").addEventListener("input", function (e) {
  video.currentTime = e.target.value;
});

setInterval(function () {
  // document.getElementById("current").innerText = (video.currentTime / 60).toFixed(2);
  document.getElementById("video-range").value = video.currentTime;
  document.getElementById("timer").innerText = `${parseInt(video.currentTime / 60)}:${Math.floor(video.currentTime) % 60}/ ${parseInt(
    video.duration / 60
  )}:${Math.floor(video.duration) % 60}`;
}, 1000);

document.getElementById("play").addEventListener("click", function () {
  video.play();
});

document.getElementById("pause").addEventListener("click", function () {
  video.pause();
});

document.getElementById("stop").addEventListener("click", function () {
  video.currentTime = 0;
  video.pause();
  document.getElementById("video-range").value = 0;
});

document.getElementById("start").addEventListener("click", function () {
  // CurrentTime will set the player to the specific time
  video.currentTime = 0;
});

document.getElementById("end").addEventListener("click", function () {
  // Duration will return the length of the video
  video.currentTime = video.duration;
});

document.getElementById("back5sec").addEventListener("click", function () {
  if (video.currentTime) {
    video.currentTime = video.currentTime - 5;
    console.log("back");
  }
});

document.getElementById("skip5sec").addEventListener("click", function () {
  if (video.currentTime !== video.duration) {
    video.currentTime = video.currentTime + 5;
    console.log("skip");
  }
});

document.getElementById("volume-range").addEventListener("input", function (e) {
  video.volume = e.target.value / 100;
});

document.getElementById("mute").addEventListener("click", function () {
  if (document.getElementById("mute").innerText == "Mute") {
    video.muted = true;
    document.getElementById("mute").innerText = "Unmute";
  } else {
    video.muted = false;
    document.getElementById("mute").innerText = "Mute";
  }
});

document.getElementById("speed-range").addEventListener("input", function (e) {
  video.playbackRate = e.target.value;
});
