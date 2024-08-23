/* Name Cases: Store a persons name in a variable,
and then print that persons name in lowercase, uppercase, and tittlecase.
*/




let personName: string = "vishal Nara"
//Lower Case
console.log("Lowercase:", personName.toLowerCase())
// Upper Case
console.log("Uppercase:", personName.toUpperCase())
//Title Case
console.log("Tittlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
