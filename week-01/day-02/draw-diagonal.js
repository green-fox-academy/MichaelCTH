"use strict";

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
console.log('%'.repeat(lineCount));
for (let i = 1; i < lineCount - 1; i++) {
	let tmp = "%" + ' '.repeat(lineCount - 2) + '%';
	tmp = tmp.substr(0, i) + '%' + tmp.substr(i + 1);
	console.log(tmp);
}
console.log('%'.repeat(lineCount));