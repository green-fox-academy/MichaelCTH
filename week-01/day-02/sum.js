"use strict";

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sum());
console.log(sum(1, 2, 3));
console.log(sum(2, 3, 4, 5));
console.log(sum(1, 1, 1, 1));
console.log(sum(2, 2, 2, 2));
console.log(sum(5, 5, 5, 5, 5, 5, 5, 5));