import { rooms } from "./javascript/data/rooms.js";
import { createRoomElement } from "./javascript/functions/room/createRoomElement.js";
import { player } from "./javascript/data/player.js";
import { goRoom } from "./javascript/functions/room/goRoom.js";
import { toggleMap } from "./javascript/functions/map/toggleMap.js";
import { createMapIcons } from "./javascript/functions/map/createMapIcons.js";
import { mountFlashlight } from "./javascript/functions/mountFlashlight.js";
import { mountComputer } from "./javascript/functions/computer/mountComputer.js";
import {createPopup} from './javascript/functions/createPopup.js';
import { mountClock } from "./javascript/functions/mountClock.js";
mapIcon.addEventListener("click", function () {
  toggleMap();
});
for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  createRoomElement(player.currRoom);
}
goRoom("bedroom");
createMapIcons();
mountFlashlight();
mountComputer();
mountClock();