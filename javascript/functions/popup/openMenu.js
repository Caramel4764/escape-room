import { gameMenus } from "../../data/gameMenus.js";

function openMenu(menuName) {
  for (let i = 0; i < gameMenus.length; i++) {
    if (gameMenus[i].name === menuName) {
      gameMenus[i].open();
    }
  }
}

export { openMenu };
