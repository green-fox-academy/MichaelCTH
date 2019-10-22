function getArrMax(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let val of arr) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}

const data = [5, 1, 2, 9, 7, 3, 8];
console.log(getArrMax(data));