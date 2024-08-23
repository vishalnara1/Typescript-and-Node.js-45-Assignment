"use strict";
/*More Guest: You just found a bigger dinner table, so now more space is available. Think of three more guest
to invite to dinner.
start with your program from exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.

Add one new guest to the beginning of your array.
Add one new guest  to the middle of your array.
Use append() to add one new guest to the end of your list.
Print a new set of invitation message, one for each person in your list.
*/
let guestList = ["Akshay", "Vishal", "Avi"];
console.log("Great news! we found a bigger table");
//unshift()
guestList.unshift("Anshul");
//splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Vansh");
//push
guestList.push("krish");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner.`);
});
