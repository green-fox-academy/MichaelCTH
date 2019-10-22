function foo(row, col, ...rest) {
  if (row < 1 || col < 1 || row != rest.length) {
    return null;
  }

  let rst = [];
  for (let rowVal of rest) {
    let curRow = [];
    for (let i = 0; i < col; i++) {
      curRow.push(rowVal);
    }
    rst.push(curRow);
  }

  return rst;
}