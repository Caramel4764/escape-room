function toggle(domElement) {
  if (domElement.style.visibility == 'hidden') {
    domElement.style.visibility = 'visible';
    domElement.style.pointerEvents = 'auto';
  } else {
    domElement.style.visibility = 'hidden';
    domElement.style.pointerEvents = 'none';
  }
}
export {toggle}