class TestSet {
  constructor() {
    this.store = [];
  }

  add(num) {
    if (this.store.indexOf(num) === -1) {
      this.store.push(num);
    }
    return this;
  }
}

function foo(arr1, arr2) {
  const allItem = new Set();
  const rst = new Set();
  arr1.forEach((item) => allItem.add(item));
  arr2.forEach((item) => allItem.add(item));

  arr1.forEach((item) => {
    if (Array.prototype.indexOf.call(allItem) === -1) {
      rst.push(item);
    }
  });

  arr2.forEach((item) => {
    if (Array.prototype.indexOf.call(allItem) === -1) {
      rst.push(item);
    }
  });
}

console.log(foo([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
