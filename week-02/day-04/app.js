const { bubbleSort, mergeSort } = require('./Sort');
// Generate a random array
function arrayGenerator(len) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * len));
}

// Test Application
const randomSize = 10000;

let input = arrayGenerator(randomSize);
console.time('bubbleSort');
bubbleSort(input);
console.timeEnd('bubbleSort');
input = arrayGenerator(randomSize);
console.time('mergeSort');
mergeSort(input);
console.timeEnd('mergeSort');