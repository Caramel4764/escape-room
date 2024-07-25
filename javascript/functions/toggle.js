function toggle(domElement) {
  if (domElement.style.visibility == 'hidden') {
    domElement.style.visibility = 'visible';
  } else {
    domElement.style.visibility = 'hidden';
  }
}
export {toggle}