function foo(row, col, ...rest) {
  if (row < 1 || col < 1 || row !== rest.length) {
    return null;
  }

  const rst = [];
  rest.forEach((num) => {
    const curRow = [];
    for (let i = 0; i < col; i += 1) {
      curRow.push(num);
    }
    rst.push(curRow);
  });

  return rst;
}

// example
console.log(foo(4, 5, 4, 6, 7, 3));
