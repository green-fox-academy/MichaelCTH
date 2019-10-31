'use strict'

let boost = 1;
// - Gather 10.000 candies!
document.querySelector('.candies').textContent = 10;

// - Clicking the ‘Create candies’ button gives you 1 candy.
function addCandy() {
  const candyNum = parseInt(document.querySelector('.candies').textContent, 10);
  document.querySelector('.candies').textContent = candyNum + 1;
};
document.querySelector('.create-candies').addEventListener('click', addCandy);

// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
document.querySelector('.buy-lollypops').addEventListener('click', () => {
  const candyNum = parseInt(document.querySelector('.candies').textContent, 10);
  if (candyNum >= 100) {
    document.querySelector('.candies').textContent = (candyNum - 100);
    document.querySelector('.lollypops').textContent += String.fromCodePoint('0x1F36D');
  }
});

// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row

setInterval(() => {
  const lollyNum = document.querySelector('.lollypops').textContent.length / 2;
  let productRate = parseInt(lollyNum / 10, 10);
  productRate *= boost;

  for (let i = 0; i < productRate; i += 1) {
    addCandy();
  }
  document.querySelector('.speed').textContent = productRate;
}, 1000);

// - If you press the "make candy rain" button, the candy generation should speed up 10x
document.querySelector('.candy-machine').addEventListener('click', () => {
  boost *= 10;
});
