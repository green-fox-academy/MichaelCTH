'use strict'

function parsePromised(json) {
  return new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[2])
  .then(null, (e) => console.log(e.message));
