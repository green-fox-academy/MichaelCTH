"use strict";

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let singleSideSpace = lineCount - 1;
let numStar = 1;
for (let i = 0; i < lineCount; i++) {
	var tmp = ' '.repeat(singleSideSpace);
	tmp += '*'.repeat(numStar)
	tmp += ' '.repeat(singleSideSpace);

	numStar += 2;
	singleSideSpace--;
	console.log(tmp);
}