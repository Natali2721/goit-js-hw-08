import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

myPlayer.on('play', function () {
  console.log('played the video!');
});

myPlayer.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

myPlayer.on(
  'timeupdate',
  throttle(function () {
    myPlayer.getCurrentTime().then(function (seconds) {
      localStorage.setItem(PLAYER_STORAGE_KEY, seconds);
    });
  }, 1000)
);

myPlayer.setCurrentTime(localStorage.getItem(PLAYER_STORAGE_KEY) || 0);

/*


player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
*/
