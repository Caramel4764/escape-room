import { rooms } from "./javascript/data/rooms.js";
import { createRoomElement } from "./javascript/functions/room/createRoomElement.js";
import { player } from "./javascript/data/player.js";
import { goRoom } from "./javascript/functions/room/goRoom.js";
import { createMapIcons } from "./javascript/functions/map/createMapIcons.js";
import { mountFlashlight } from "./javascript/functions/popup/mount/mountFlashlight.js";
import { mountComputer } from "./javascript/functions/popup/mount/mountComputer.js";
import { mountClock } from "./javascript/functions/popup/mount/mountClock.js";
import { addItem } from "./javascript/functions/item/addItem.js";
import { handleMapToggle } from "./javascript/functions/map/handleMapToggle.js";
import { mountShedLock } from "./javascript/functions/popup/mount/mountShedLock.js";

mapIcon.addEventListener("click", function () {
  handleMapToggle();
});

for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  createRoomElement(player.currRoom);
}

goRoom("heart");
createMapIcons();
mountFlashlight();
mountComputer();
mountClock();
mountShedLock();
addItem('goggle');
addItem('redGem');
addItem('blueGem');

