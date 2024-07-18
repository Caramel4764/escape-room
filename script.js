import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
import {createMapIcons} from './javascript/functions/displayRoom.js';

mapIcon.addEventListener('click', function() {
  toggleMap();
})
player.currRoom = rooms.lounge;
displayRoom(player.currRoom);
player.currRoom = rooms.entrance;
displayRoom(player.currRoom);
player.currRoom = rooms.fireplace;
displayRoom(player.currRoom);
player.currRoom = rooms.courtyard;
displayRoom(player.currRoom);
goRoom('entrance');

createMapIcons();