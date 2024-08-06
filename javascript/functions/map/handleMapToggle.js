import {toggle} from '../toggle.js';
import { player } from '../../data/player.js';

let map = document.querySelector('#map-div');
let dreamMap = document.querySelector("#dream-map");
let dreamMapIcon = document.querySelector("#dream-map-icon-div");
map.style.visibility = 'hidden';
dreamMap.style.visibility = 'hidden';
dreamMapIcon.style.visibility = 'hidden';

function handleMapToggle () {
  if (player.isDreamWorld) {
    toggle(dreamMap);
    toggle(dreamMapIcon);
    toggle(map, false);
  } else {
    toggle(map);
    toggle(dreamMap, false);
    toggle(dreamMapIcon, false);
  }
}

export {handleMapToggle}