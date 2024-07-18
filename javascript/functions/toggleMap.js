let map = document.querySelector('#map-div');

function toggleMap () {
  if (map.style.visibility == 'visible') {
    map.style.visibility = 'hidden';
  } else {
    map.style.visibility = 'visible';
  }
}
export {toggleMap};