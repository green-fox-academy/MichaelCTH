'use strict'

function all(pro1, pro2) {
  return new Promise((fulfill, reject) => {
    let counter = 0;
    let vals = [];
    pro1.then((val) => {
      vals[0] = val;
      counter += 1;
      if (counter === 2) fulfill(vals);
    });

    pro2.then((val) => {
      vals[1] = val;
      counter += 1;
      if (counter === 2) fulfill(vals);
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
