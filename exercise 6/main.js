"use strict";
/* Stripping Names: Store a persons names, and include some whitespace characters at the begining
and end of the name. make sure you use each character combination, "\t" and "\n", at least once.
print the name once, so the whitespace around the name is displayed.
then print the name after striping the white spaces */
Object.defineProperty(exports, "__esModule", { value: true });
let whiteSpace = "\n\t vishal Nara \t\n";
console.log(whiteSpace);
let withoutwhiteSpace = whiteSpace.trim();
console.log(withoutwhiteSpace);
