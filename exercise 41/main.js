"use strict";
/* Magicians: Make a array of magicians names. Pass the array to a function called show_magicians(), which prints
the name of each magician in the array. */
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magicians_names = ["Ali", "Osama", "Asif"];
show_magicians(magicians_names);
