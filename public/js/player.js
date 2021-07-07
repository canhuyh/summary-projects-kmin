var track = document.getElementById("track");

var controlBtn = document.getElementById("play-pause");

track.play();

if (track.paused) {
  controlBtn.className = "play";
} else {
  controlBtn.className = "pause";
}

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.className = "pause";
  } else {
    track.pause();
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);

track.addEventListener("ended", function () {
  controlBtn.className = "play";
});
