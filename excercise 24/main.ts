/*More Conditional Test: you dont have to limit the number of tests you create to 10. if you want to try more 
comparisons, write more tests. Have at least one true and one false result for  each of the following

Tests for equality and inequality with string

Tests using the lower case function

Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than
or equal to

tests using "and"and"or" operators

test wheather an item is in a array

test wheather an item is not in a array */


//creating a variable
let apple = "apple";

//tests for equality
console.log("apple is equal to apple");
console.log(apple == "apple");

//tests for inequality
console.log("apple is not equal to apple");
console.log(apple != "apple");

//Tests using the lower case function

let uppercaseApple = "APPLE"

// Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() =="apple");

// Not Equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() !="apple");


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than
//or equal to

let ten = 10;
let twenty = 20;

//equal to
console.log("ten is equal to twenty");
console.log(ten == twenty);

 //not equal to
 console.log("ten is not equal to twenty");
console.log(ten != twenty);

//greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);

//less than
console.log("twenty is less than ten");
console.log(twenty < ten);

// greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);

//less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);

//tests using "and"and"or" operators

//using && (and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than twenty");
console.log(twenty != ten && ten > twenty);

//using || (or)
console.log("twenty is greater than ten or twenty is not equal to twenty");
console.log(twenty > ten || twenty != twenty);


console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(twenty < ten || twenty != twenty);

//test wheather an item is in a array

let fruits =["apple", "orange", "banana"]
console.log("orange is include in my fruits array");
console.log(fruits.includes("orange"));

//test wheather an item is not in a array 

console.log("orange is not include in my fruits array");
console.log(!fruits.includes("orange"));






