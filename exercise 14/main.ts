/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you did like to invite to dinner. Then use your list to print a message to each
person, inviting them to dinner. */ 


let guest : string [] = ["vishal", "akshay", "anshul"]
guest.map((items) => console.log (`dear ${items} you are invited to the dinner.`))