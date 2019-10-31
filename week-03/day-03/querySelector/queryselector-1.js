'use strict'
// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.

const king = document.getElementById('b325');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
const businessLamp = document.querySelectorAll(".asteroid.big");
businessLamp.forEach((item) => console.log(item));

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
const conceitedKing = document.querySelectorAll("section > .asteroid");
conceitedKing.forEach((item) => alert(item));

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
const noBusiness = document.querySelectorAll("div");
noBusiness.forEach((item) => console.log(item));

