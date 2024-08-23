/*City Names: Write a function called city_Country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-Country pairs, and print the value thats returned.
*/
function city_Country(city:string, country:string):string{
   return `${city}, ${country}`
}
console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Tokyo", "Japan"));
console.log(city_Country("Berlin", "Germany"));

