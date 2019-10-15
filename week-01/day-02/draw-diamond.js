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
  var tmp = "";
  for (let j = 0; j < singleSideSpace; j++) {
    tmp += " ";
  }

  for (let j = 0; j < numStar; j++) {
    tmp += "*";
  }

  for (let j = 0; j < singleSideSpace; j++) {
    tmp += " ";
  }

  numStar -= 2;
  singleSideSpace++;
  arr.push(tmp);
  if (arr.length != 1) {
    arr.unshift(tmp);
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
