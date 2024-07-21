let openItemImage = document.querySelector('#open-item-image');
let openItemDiv = document.querySelector('#open-item-div');

//displays enlarged item if enlarge img exists. Must pass item info.
function enlargeItem (newInventoryInfo) {
  if (newInventoryInfo.openSrc) {
    openItemImage.src = newInventoryInfo.openSrc;
    if (openItemDiv.style.visibility == 'visible') {
      openItemDiv.style.visibility = 'hidden';
    } else {
      openItemDiv.style.visibility = 'visible';
    }
  }
}

export {enlargeItem}