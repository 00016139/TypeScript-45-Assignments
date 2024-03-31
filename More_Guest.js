var Guests = ["Aqib", "Fazeel", "Subhan"]; // declare a variable having some names
Guests.forEach(function (Guest) {
    console.log("Hello ".concat(Guest, ", you are invited for dinner"));
}); // use array function to sent invitation for each sepratly
var unableToAttend = "Subhan"; // declare another variable
console.log("".concat(unableToAttend, " can't come for dinner"));
// using this variable to print message
var Newguest = "Kashan"; // declare another variable 
Guests[Guests.indexOf(unableToAttend)] = Newguest;
// replace subhan with kashan in guest list 
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", you are invited for dinner"));
}); // print the new list using array function
// New Message
console.log("WoW! I have a big table for dinner, Lets intive more friends");
Guests.unshift("Kashan Rana");
Guests.splice(Guests.length / 2, 0, "Saqib");
Guests.push("Minhaj");
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", you are invited for dinner"));
}); // print the new list using array function
