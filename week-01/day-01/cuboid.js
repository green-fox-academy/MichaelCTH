"use strict";

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l = 100;
let w = 2;
let h = 5;

console.log(`Surface Area: ${l * w * 2 + w * h * 2 + h * l * 2}`);
console.log(`Volume: ${l * w * h}`);
