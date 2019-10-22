const target = {
  a: 1,
  b: 1,
  c: 1
};

const handler = {
  set: function (targetObject, field) {
    return undefined;
  },
  get: function (targetObject, field) {
    if (field === 'nextId') {
      if (targetObject.nextId) {
        targetObject.nextId++;
        return targetObject.nextId;
      } else {
        targetObject.nextId = 1;
        return 1;
      }
    }
  }
}

const proxyObject = new Proxy(target, handler);
proxyObject.a = 3;
proxyObject.b = 4;
proxyObject.c = 5;
proxyObject.nextId = 6;

console.log(proxyObject.a);
console.log(proxyObject.b);
console.log(proxyObject.c);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);