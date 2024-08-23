"use strict";
/*Large Shirt: Modify the make_shirt() function so that shirt are large by default with a message that reads
I Love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size
with a different message. */
function make_shirt(size = "large", printMessage = "I Love TypeScript") {
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love JavaScript");
