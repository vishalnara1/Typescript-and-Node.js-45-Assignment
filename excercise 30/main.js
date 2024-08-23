"use strict";
/* Hello Admin: Make a array of five or more username, including the name 'admin'. imagine you are writing code
that will print a greeting to each user after they log in to a website. loop through the array, and print a greeting
to each user:

If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again */
let userName = ["Ali", "Ayesha", "Admin", "Syeda", "Asim"];
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser},would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser},thank you for logging in again.`);
    }
});
