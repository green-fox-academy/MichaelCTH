'use strict'

function attachTitle(str) {
  return 'DR. '.concat(str);
}

const promise = Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);
