import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

myPlayer.on('play', function () {
  console.log('played the video!');
});

myPlayer.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

myPlayer.on('timeupdate', function () {
  myPlayer.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
});

myPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
