"use strict";

// PART 1 - DECLARING VARIABLES
var x = 10;  // global variable
let y = 20; // lexically scope
const pi = 3.1417;  // constant; the variable cannot be reassigned

// PART 2 - DYNAMIC DATA TYPES
let apples = 42;
apples = "fourty two";  // variables is not fixed to a data type

console.log(2 + "2"); // --> 44
console.log(2 * "2"); // --> 4

// Conversion to data types
console.log(parseInt("2")); // convert from string to int
console.log(parseFloat("3.14")); // convert from string to float
console.log("" + 2); // convert numbers to string

console.log("4 + 4 = " + 4 + 4);   // error
console.log("4 + 4 = " + (4 + 4)); // 4 + 4 = 8

// undefined (eqv. None in Python)
let foobar;
console.log(foobar);

// null
let empty=null;
console.log(empty);

// NaN
let b1 = "three";
console.log(parseInt(b1)+2);

// Infinity
console.log(4/0);

console.log(typeof(Infinity));
console.log(typeof(null));
console.log(typeof(undefined))