"use strict";
/* Checking Usernames: Do the following to creates a program that simulates how websites ensure that every one has
a unique username.

make a list of five or more username called current_users.

make another list of five usernames called new_user. Make sure one or two of the new username are also in the
current_users list.

loop through the new_users list to see if each new username has already been used. if it has, print a message
that the person will need to enter a new username. if a username has not been used, print a message saying
that the username is available.

make sure your comparison is case insensitive. if 'john' has been used,'JOHN' should not be accepted */
let current_user = ["Ali", "osama", "Billal", "sana", "Rehma"];
let new_users = ["Ayesha", "Asim", "Osama", "Salman", "Sana"];
new_users.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
