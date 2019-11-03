'use strict';

let boost = 1;
const candyDisplay = document.querySelector('.candies');
const lollypopsDisplay = document.querySelector('.lollypops');
const speedDisplay = document.querySelector('.speed');
let lollyNum = 3;
let candyNum = 10;

function addCandy(num = 100) {
  candyNum += num;
  candyDisplay.textContent = candyNum;
}

candyDisplay.textContent = 10;

document.querySelector('.create-candies').addEventListener('click', () => addCandy());

document.querySelector('.candy-machine').addEventListener('click', () => {
  boost *= 10;
});

document.querySelector('.buy-lollypops').addEventListener('click', () => {
  if (candyNum >= 100) {
    candyNum -= 100;
    candyDisplay.textContent = (candyNum);
    lollypopsDisplay.textContent += '🍭';
    lollyNum += 1;
  }
});

setInterval(() => {
  let productRate = Math.floor(lollyNum / 10);
  productRate *= boost;
  addCandy(productRate);
  speedDisplay.textContent = productRate;
}, 1000);
