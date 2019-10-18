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
for (let i = 0; i < lineCount; i++) {
  let tmp = "%";
  let sp = " ";

  if (i === 0 || i === lineCount - 1) {
    sp = "%";
  }
  for (let j = 0; j < lineCount - 2; j++) {
    if (i === j + 1) {
      tmp += "%";
    } else {
      tmp += sp;
    }
  }

  tmp += "%";
  console.log(tmp);
}