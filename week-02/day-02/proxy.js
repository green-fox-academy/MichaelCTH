/* eslint-disable no-param-reassign */
const target = {
  a: 1,
  b: 1,
  c: 1,
};

const handler = {
  set: () => undefined,
  get: (targetObject, field) => {
    if (field !== 'nextId') {
      return undefined;
    }
    if (!targetObject.nextId) {
      targetObject.nextId = 0;
    }
    targetObject.nextId += 1;
    return targetObject.nextId;
  },
};

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
