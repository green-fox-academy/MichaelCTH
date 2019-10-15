"use strict";

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(num) {
  if (num <= 1) return 1;

  return num * factorio(num - 1);
}

console.log(factorio(10));
console.log(factorio(5));
console.log(factorio(6));
console.log(factorio(4));
console.log(factorio(1));
console.log(factorio(0));
