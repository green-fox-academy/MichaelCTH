"use strict";

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

let aj = [3, 4, 5, 6, 7];
aj.reverse();
console.log(aj);

aj = [3, 4, 5, 6, 7];
let ja = [];
for (let i = aj.length - 1; i >= 0; i--) {
	ja.push(aj[i]);
}
console.log(ja);