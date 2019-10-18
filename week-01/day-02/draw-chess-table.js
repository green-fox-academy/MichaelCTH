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
	let fill = "% ";
	if (i % 2 !== 0) {
		fill = " %";
	}

	fill = fill.repeat(sideLen / 2);
	console.log(fill);
}