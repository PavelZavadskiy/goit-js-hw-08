import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? '0' : JSON.parse(serializedState);
  } catch (error) {
    return '0';
  }
};

player
  .setCurrentTime(parseFloat(load(VIDEOPLAYER_CURRENT_TIME)))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

const throttledFunction = throttle(data => {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds.toString());
}, 1000);

player.on('timeupdate', throttledFunction);
