/*Greeting: Start with the array you used in exercise 11,
but instead of just printing each persons name,
print a message to them. The text of each message should be the same
but each message should be personalized with the persons name.
*/

let names: string[] = ["Akshay", "Vishal", "Avi"]
names.forEach(friend =>{
    console.log(`Hello, ${friend}! how are you today?`);
    
});
