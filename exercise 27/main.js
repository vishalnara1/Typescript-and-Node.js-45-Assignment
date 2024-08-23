"use strict";
/* Alien color #3: Turn your if-else chain from exercise 5-4 into an if-else chain.

If the alien is green, print a message that the player earned 5 points.


If the alien is yellow, print a message that the player earned 10 points.


If the alien is red, print a message that the player earned 15 points.

Write three versions of this programs, making sure each message is printed for the appropriate color alien */
//First Version
/*
let alien_color = "green"

if (alien_color === "green"){
    console.log("(Version 01) Alien color is green, player earned 5 points.");
    
}else if (alien_color === "yellow"){
    console.log("(Version 01) Alien color is yellow, player earned 10 points.");
    
}else if (alien_color === "red"){
    console.log("(Version 01) Alien color is red, player earned 15 points.");
    
}
*/
//Second version
/*
let alien_color = "yellow"

if (alien_color === "green"){
    console.log("(Version 02) Alien color is green, player earned 5 points.");
    
}else if (alien_color === "yellow"){
    console.log("(Version 02) Alien color is yellow, player earned 10 points.");
    
}else if (alien_color === "red"){
    console.log("(Version 02) Alien color is red, player earned 15 points.");
    
}
*/
//Third version
let alien_color = "red";
if (alien_color === "green") {
    console.log("(Version 03) Alien color is green, player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("(Version 03) Alien color is yellow, player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("(Version 03) Alien color is red, player earned 15 points.");
}
