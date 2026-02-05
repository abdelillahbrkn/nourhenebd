const envelope = document.getElementById('envelope');
const music = document.getElementById('music');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    music.play();
  } else {
    music.pause();
    music.currentTime = 0;
  }
});