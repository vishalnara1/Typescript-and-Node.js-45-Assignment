/* Stage of life: write an if-else chain that determines a persons stage of life. Set a value for the variable age,
and then:

If the person is less than 2 year old, print a message that the person is a baby

If the person is at least 2 year old but less than 4, print a message that the person is a toddler

If the person is at least 4 year old but less than 13, print a message that the person is a kid

If the person is at least 13 year old but less than 20, print a message that the person is a teenager

If the person is at least 20 year old but less than 65, print a message that the person is a adult

If the person is age 65 or older, print a message that the person is a elders  */


//creating a variable

let age = 13
//If the person is less than 2 year old, print a message that the person is a baby
if (age < 2){
    console.log("you are a baby");
    
} 

//If the person is at least 2 year old but less than 4, print a message that the person is a toddler
else if (age >= 2 && age < 4){
    console.log("you are a toddler");
    
}

//If the person is at least 4 year old but less than 13, print a message that the person is a kid
else if (age >= 4 && age < 13){
    console.log("you are a kid");
}

//If the person is at least 13 year old but less than 20, print a message that the person is a teenager
else if (age >= 13 && age < 20){
    console.log("you are a teenager");
}

//If the person is at least 20 year old but less than 65, print a message that the person is a adult
else if (age >= 20 && age < 65){
    console.log("you are a adult");
}

//If the person is age 65 or older, print a message that the person is a elders 
else if (age >= 65){
    console.log("you are an elder");
    
}