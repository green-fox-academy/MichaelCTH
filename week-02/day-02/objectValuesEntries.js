function getMostWordCount(obj) {
  let max = Number.MIN_SAFE_INTEGER;
  let gEntry = null;
  for (let entry of Object.entries(obj)) {
    if (entry[1] > max) {
      max = entry[1];
      gEntry = entry;
    }
  }
  return gEntry[0];
}

const obj = {
  x: 1,
  y: 2,
  z: 3
};
console.log(getMostWordCount(obj));