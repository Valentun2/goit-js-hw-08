import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});
 player.on('timeupdate',throttle(playVideo,1000));
 function playVideo(timeupdate) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate.seconds))
    }
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0)