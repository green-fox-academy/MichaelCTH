function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function frameFunction() {

  multiPurposeFunction(function (s1, s2) {
    return s1 ? [s1, s2].join(' ') : s2;
  });

  multiPurposeFunction((s1, s2) => s1 ? [s1, s2].join(' ') : s2);
}

frameFunction();