"use strict";

// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

console.log("The total coding hour in the semester is " + 6 * 5 * 17);
console.log(
  `The percentage of the coding hours in the semester is ${((6 * 5) / 52) *
    100}%`
);
