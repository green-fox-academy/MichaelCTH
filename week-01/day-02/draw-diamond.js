"use strict";

const lineCount = 7;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let singleSideSpace = 0;
let numStar = lineCount;
let arr = [];
for (let i = lineCount / 2; i > 0; i--) {
	var tmp = ' '.repeat(singleSideSpace);
	tmp += '*'.repeat(numStar);
	tmp += ' '.repeat(singleSideSpace);

	numStar -= 2;
	singleSideSpace++;
	arr.push(tmp);
	if (arr.length !== 1) {
		arr.unshift(tmp);
	}
}

arr.forEach(item => {
	console.log(item);
});