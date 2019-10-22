function getMostWordCount(obj) {
  let max = Number.MIN_SAFE_INTEGER;
  let char = null;
  Object.entries(obj).forEach((item) => {
    if (item[1] > max) {
      [char, max] = item;
    }
  });

  return char;
}

const obj = {
  x: 1,
  y: 2,
  z: 3,
};
console.log(getMostWordCount(obj));
