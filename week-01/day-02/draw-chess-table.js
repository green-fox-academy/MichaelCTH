// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

const sideLen = 8;

for (let i = 0; i < sideLen; i++) {
  let sp = i % 2 === 0;
  let fill = "% ";

  if (!sp) {
    fill = " %";
  }
  let temp = "";
  for (let j = 0; j < sideLen / 2; j++) {
    temp += fill;
  }
  console.log(temp);
}