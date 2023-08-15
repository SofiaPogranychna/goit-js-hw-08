import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}

vimeoPlayer.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    updateLocalStorage(currentTime);
});
function updateLocalStorage(currentTime) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
const throttledUpdateLocalStorage = throttle(updateLocalStorage, 1000);