import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
import {createMapIcons} from './javascript/functions/displayRoom.js';
import {addItem} from './javascript/functions/item/addItem.js';
import { mountFlashlight } from './javascript/functions/mountFlashlight.js';

mapIcon.addEventListener('click', function() {
  toggleMap();
})
for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  displayRoom(player.currRoom);
}
goRoom('attic');
createMapIcons();
mountFlashlight();