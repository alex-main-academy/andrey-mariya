document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio('assets/music.mp3');
  const playButton = document.querySelector('.js-play-music');

  playButton.addEventListener('click', function () {
    playButton.classList.toggle('active');

    if (playButton.classList.contains('active')) {
      document.querySelector('.music-play').setAttribute('src', 'img/icons/pause.svg');
      audio.play();
    } else {
      document.querySelector('.music-play').setAttribute('src', 'img/icons/play.svg');
      audio.pause();
    }
  });
});
