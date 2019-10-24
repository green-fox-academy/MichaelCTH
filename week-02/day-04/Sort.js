// Utility Swap Function
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Bubble Sort
function bubbleSort(input) {
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        flag = true;
      }
    }
  }
}

// Merge Sort
function mergeSort(input) {
  return mergeSortRange(input, 0, input.length - 1);
}

function mergeSortRange(input, start, end) {
  if (start === end) {
    return;
  }

  const mid = Math.floor((end - start) / 2) + start;
  mergeSortRange(input, start, mid);
  mergeSortRange(input, mid + 1, end);
  merge(input, start, mid, end);
}

function merge(input, start, mid, end) {
  const temp = [], k = 0;
  let i = start, j = mid + 1;
  while (i <= mid && j <= end) {
    if (input[i] < input[j]) {
      temp.push(input[i++]);
    } else {
      temp.push(input[j++]);
    }
  }
  while (i <= mid) {
    temp.push(input[i++]);
  }
  while (j <= end) {
    temp.push(input[j++]);
  }

  for (let i = start; i <= end; i++) {
    input[i] = temp[i - start];
  }
}

module.exports = { bubbleSort, mergeSort };
