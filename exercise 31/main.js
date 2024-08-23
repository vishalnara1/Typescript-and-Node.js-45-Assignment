"use strict";
/* No Users : Add an if test to exercise 30 to make sure the list of user is not empty

if the list is empty, print the message we need to find some users!

Remove all of the username from your array, and make sure the correct message is printed */
let userName = ["Ali", "Ayesha", "Admin", "Syeda", "Asim"];
userName = [];
if (userName.length === 0) {
    console.log("we need to find some users!");
}
else {
    userName.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser},would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser},thank you for logging in again.`);
        }
    });
}
