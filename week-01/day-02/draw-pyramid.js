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

  numStar += 2;
  singleSideSpace--;
  console.log(tmp);
}
