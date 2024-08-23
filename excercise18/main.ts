/* Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let palceToVisit: string[] = ["paris", "italy", "london", "china", "australia"];
//print in original order
console.log("original order:", palceToVisit);

//print array in alphabetical order
console.log("Alphabetical order:", palceToVisit.slice().sort());


//array is stillin its original order
console.log("original order after sorting:", palceToVisit);

// print  array in reverse alphabetical order without changing the order of the original list;
console.log(" Revrse alphabetical order:", palceToVisit.slice().sort().reverse());


//array is still in its original order
console.log("original order after revrse sorting:", palceToVisit);

//revrse the order of the list
palceToVisit.reverse();
console.log("reverse order:", palceToVisit);

//reverse the order of your list again
palceToVisit.reverse();
console.log("back to original order:", palceToVisit);


//sort your array so its stored in alphabetical order.
console.log("sorted in alphabetical order:", palceToVisit.slice().sort());

//sort to change your array so its stored in reverse alphabetical order
console.log(" stored in revrse alphabetical order:", palceToVisit.slice().sort().reverse());