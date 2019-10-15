"use strict";

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
function printer() {
  console.log(arguments);
}

printer(1);
printer(1, "a", [1, 2, 3]);
printer("b", "qw", 1);
printer([3, 2, 1], "a");
printer("a", 1, 2, [1, 2, 3], "test");
