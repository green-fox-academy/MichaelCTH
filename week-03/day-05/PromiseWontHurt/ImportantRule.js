'use strict'


function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(val) {
  console.log(val);
  return val + 1;
}

const promise = Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch((e) => console.log(e.message));
