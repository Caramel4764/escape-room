import { rooms } from "./javascript/data/rooms.js";
import { createRoomElement } from "./javascript/functions/room/createRoomElement.js";
import { player } from "./javascript/data/player.js";
import { goRoom } from "./javascript/functions/room/goRoom.js";
import { toggleMap } from "./javascript/functions/map/toggleMap.js";
import { createMapIcons } from "./javascript/functions/map/createMapIcons.js";
import { mountFlashlight } from "./javascript/functions/popup/mount/mountFlashlight.js";
import { mountComputer } from "./javascript/functions/popup/mount/mountComputer.js";
import { mountClock } from "./javascript/functions/popup/mount/mountClock.js";
import { createDreamMapIcons } from "./javascript/functions/map/createDreamMapIcons.js";
import { toggle } from "./javascript/functions/toggle.js";
import { addItem } from "./javascript/functions/item/addItem.js";

let map = document.querySelector('#map-div');
let dreamMap = document.querySelector("#dream-map");
let dreamMapIcon = document.querySelector("#dream-map-icon-div");
map.style.visibility = 'hidden';
dreamMap.style.visibility = 'hidden';

mapIcon.addEventListener("click", function () {
  if (player.isDreamWorld) {
    toggle(dreamMap);
    toggle(dreamMapIcon)
    toggle(map, false);
  } else {
    toggle(map);
    toggle(dreamMap, false);
    toggle(dreamMapIcon, false);

  }
});

for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  createRoomElement(player.currRoom);
}

goRoom("attic");
createMapIcons();
mountFlashlight();
mountComputer();
mountClock();
addItem('blueLightBulb');
