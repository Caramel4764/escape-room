import {toggle} from '../toggle.js';


function createDesktopIcon(desktopInfo) {
  let {parent, type, x, y, text, windowName, fileContent, fileContentDiv, fileMenu} = desktopInfo;
  let desktopIconDiv = document.createElement('div');
  desktopIconDiv.style.left = x * 90 + 'px';
  desktopIconDiv.style.top = y * 85 + 'px';
  desktopIconDiv.classList.add('desktop-icon');
  let imageContainer = document.createElement('div');
  imageContainer.style.position = 'relative';
  imageContainer.classList.add('image-container');
  imageContainer.style.pointerEvents = 'none';
  desktopIconDiv.appendChild(imageContainer);

  let desktopIcon = document.createElement('img');
  if (type == 'file') {
    desktopIcon.src='./assets/misc/computer/file.png';
  } else if (type == 'folder') {
    desktopIcon.src='./assets/misc/computer/folder.png';
  }
  desktopIcon.classList.add('desktop-icon-img');
  desktopIcon.style.position = 'relative';
  desktopIcon.style.pointerEvents = 'none';
  desktopIconDiv.addEventListener('mouseenter', function() {
    desktopIconDiv.style.backgroundColor = 'green'
  })
  desktopIconDiv.addEventListener('mouseout', function() {
    desktopIconDiv.style.backgroundColor = 'black'
  })
  desktopIconDiv.addEventListener('click', function() {
    fileContentDiv.innerHTML=fileContent;
    windowName.textContent = text;
    toggle(fileMenu)
  })
  imageContainer.appendChild(desktopIcon);
  let desktopIconText = document.createElement('p');
  desktopIconText.textContent = text;
  desktopIconText.classList.add('desktop-icon-text');
  desktopIconText.style.overflowWrap = 'anywhere';
  desktopIconText.style.margin = '3px';
  desktopIconText.style.textAlign = 'center';
  desktopIconText.style.fontSize = '12px';
  desktopIconText.style.pointerEvents = 'none'
  desktopIconDiv.appendChild(desktopIconText);
  parent.appendChild(desktopIconDiv);
}

export {createDesktopIcon}