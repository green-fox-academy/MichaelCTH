'use strict'

const fisrtPromise = first();
const secondPromise = fisrtPromise.then((val) => second(val));

secondPromise.then(console.log);
