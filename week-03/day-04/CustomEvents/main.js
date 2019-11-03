'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  const tmp = ev;
  tmp.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  const tmp = ev;
  tmp.target.style.backgroundColor = 'blue';
});

myDiv.addEventListener('click', (ev) => {
  let event = null;
  if (ev.clientX <= 200) {
    event = new CustomEvent('left-side-click');
  } else {
    event = new CustomEvent('right-side-click');
  }
  myDiv.dispatchEvent(event);
});
