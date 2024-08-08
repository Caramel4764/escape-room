function toggle(domElement, isOpened) {
  if (isOpened != undefined) {
    if (isOpened == true) {
      domElement.style.visibility = 'visible';
    } else {
      domElement.style.visibility = 'hidden';
    }
    return;
  }
  if (domElement.style.visibility == 'hidden') {
    domElement.style.visibility = 'visible';
    domElement.style.pointerEvents = 'auto';
  } else {
    domElement.style.visibility = 'hidden';
    domElement.style.pointerEvents = 'none';
  }
}
export {toggle}