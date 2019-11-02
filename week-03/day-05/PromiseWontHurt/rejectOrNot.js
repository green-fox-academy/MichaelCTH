'use strict'

const promise = new Promise((fulfill, rejects) => {
  fulfill('I FIRED');
  rejects(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);
