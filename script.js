import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';

player.currRoom = rooms.entrance;
displayRoom(player.currRoom);