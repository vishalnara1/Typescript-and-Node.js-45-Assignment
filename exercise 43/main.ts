 /* Unchanged Magician: start with your work from exercise 42. call the function make_great()with a copy of the 
array of magicians names. Because the original array will be unchanged. return the new array and store it in a
separate array. Call show_magicians() with each array to show that you have one array of the original names 
and one array with the great added to each magicians name */

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    );
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}

let magicians_names = ["Ali", "Osama", "Asif"]

let copy_magicians_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

console.log("\nOriginal Array\n");
show_magicians(magicians_names)

console.log("\nCopied Array\n");
show_magicians(copy_great_magicians)



