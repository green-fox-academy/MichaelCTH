function foo(arr) {
  const len = arr.length;
  let total = arr.reduce((pre, now) => pre + now);
  return total / len;
}

console.log(foo([1, 2, 3, 4, 5, 6]));