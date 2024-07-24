
function createDesktopIcon(desktop, type, x, y) {
  let desktopIconDiv = document.createElement('div');
  desktopIconDiv.style.display='flex';
  desktopIconDiv.style.position='absolute';
  desktopIconDiv.style.flexDirection = 'column';
  desktopIconDiv.style.justifyContent = 'center';
  desktopIconDiv.style.alignItems = 'center';
  desktopIconDiv.style.left = x * 70 + 'px';
  desktopIconDiv.style.top = y * 70 + 'px';
  desktopIconDiv.classList.add('desktop-icon');


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
  
  desktopIconDiv.appendChild(desktopIcon);
  let desktopIconText = document.createElement('p');
  desktopIconText.textContent = 'test.txt';
  //desktopIconText.style.margin = '2px';
  desktopIconText.style.fontSize = '12px';
  desktopIconText.style.pointerEvents = 'none';
  desktopIconDiv.appendChild(desktopIconText);

  desktop.appendChild(desktopIconDiv);
}
export {createDesktopIcon}