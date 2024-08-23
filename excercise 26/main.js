"use strict";
/* Alien colors #2: choose a color for an alien as you did in Exercise 25, and write an if-else chain

if the aliens color is green, print a statement that the player just earned 5 points for shooting the alien

if the aliens color is not green, print a statement that the player just earned 10 points,

write one version of this program that runs the if block and another that runs the else block. */
//First Version:
/*
let alien_color = "green"
if (alien_color === "green"){
    console.log("Alien color is green,player just earned 5 points for shooting the alien.");
    
} else{
    console.log("Alien_color is not green, player earned 10 points") ;
    
}
*/
//Second Version
let alien_color = "red";
if (alien_color === "green") {
    console.log("Alien color is green,player just earned 5 points for shooting the alien.");
}
else {
    console.log("Alien_color is not green, player earned 10 points");
}
