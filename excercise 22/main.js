"use strict";
// Intentional Error: If you have not received an array index error in one of your programs yet, try to make one happen.
//change an index in one of your programs to produce an index error. Make sure you correct the error before closing the
// program
Object.defineProperty(exports, "__esModule", { value: true });
let errorArray = ["A", "B", "C", "D"];
//Producing error! by accessing invalid index of array
console.log(errorArray[5]);
//Error Removed
console.log(errorArray[3]);
