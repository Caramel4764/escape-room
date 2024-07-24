
function createDesktopIcon(desktop, type, x, y) {
  let desktopIcon = document.createElement('img');
  if (type == 'file') {
    desktopIcon.src='./assets/misc/computer/file.png';
  } else if (type == 'folder') {
    desktopIcon.src='./assets/misc/computer/folder.png';
  }
  desktopIcon.classList.add('desktop-icon');
  desktopIcon.style.left = x * 70 + 'px';
  desktopIcon.style.top = y * 70 + 'px';
  desktopIcon.addEventListener('mouseenter', function() {
    desktopIcon.style.backgroundColor = 'green'
  })
  desktopIcon.addEventListener('mouseout', function() {
    desktopIcon.style.backgroundColor = 'black'
  })
  desktop.appendChild(desktopIcon);
}
export {createDesktopIcon}