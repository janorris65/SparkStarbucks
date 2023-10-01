const playBtn = document.getElementById("musicAF");
playBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var audio = new Audio("/audio/Beeazy.mp3");
  audio.play();
});
