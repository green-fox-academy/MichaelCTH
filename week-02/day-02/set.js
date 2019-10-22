var setEntity = function () {
  this.store = {}
};

setEntity.prototype.add = function (num) {
  this.store[num] = num;
};

setEntity.prototype.listData = function () {
  return Object.values(this.store);
};

var test = new setEntity();
test.add(1);
test.add(2);
test.add(3);
test.add(1);
test.add(2);
test.add(3);
test.add(4);
console.log(test.listData());