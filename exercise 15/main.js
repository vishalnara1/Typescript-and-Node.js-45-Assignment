"use strict";
/*Changing Guest List: You just heard that one of your guest cant make the dinner,
so you need to send out a new set of invitations.
you will have to think of someone else to invite.

Start with your program from Exercise 14. Add a print statement at the end of your program stating the names
of the guest who cant make it.

Modify your list, replacing the name of the guest who cant make it with the name of the new person
you are inviting.

Print a second set of invitation messages, one for each person who is still in your list.
*/
let guestlist = ["akshay", "vishal", "avi"];
// print the name who is not invited for dinner
let unableAttend = guestlist.splice(0, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
//push
guestlist.push("anshul");
// print a message
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are invited`);
});
