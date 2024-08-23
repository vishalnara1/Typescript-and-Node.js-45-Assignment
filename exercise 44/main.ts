/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collect as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times, using a different number of argument
each time. */

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem =>
        console.log(singleItem)
        
    )
    console.log("\nNow Enjoy Sandwich");
    
}

makeSandwich("Bread", "Butter")
makeSandwich("Chicken", "Cheese", "Egg")
makeSandwich("Bread", "Butter", "Chicken","Tomato", "Cheese", "Egg","Mayo")
