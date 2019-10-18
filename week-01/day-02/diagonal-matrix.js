"use strict";

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size = 4;

let matrix = [];
for (let i = 0; i < size; i++) {
	let temp = Array(size).fill(0)
	temp[size - 1 - i] = 1;
	matrix.push(temp);
}

matrix.forEach((row) => {
	console.log(row);
});