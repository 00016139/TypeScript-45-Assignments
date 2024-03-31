let Guests : string[] = ["Aqib", "Fazeel", "Subhan"]; // declare a variable having some names
Guests.forEach(Guest => {
    console.log(`Hello ${Guest}, you are invited for dinner`);
}) // use array function to sent invitation for each sepratly

let unableToAttend = "Subhan"; // declare another variable
console.log(`${unableToAttend} can't come for dinner`);
// using this variable to print message


let Newguest : string = "Kashan"; // declare another variable 
Guests[Guests.indexOf(unableToAttend)] = Newguest;
// replace subhan with kashan in guest list 


Guests.forEach(Guest =>{
    console.log(`Dear ${Guest}, you are invited for dinner`);
}) // print the new list using array function