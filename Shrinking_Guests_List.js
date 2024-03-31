var Guests = ["Aqib", "Fazeel", "Kashan"]; // declare a variable 
// New Message
console.log("WoW! I have a big table for dinner, Lets intive more friends");
Guests.unshift("Kashan Rana");
Guests.splice(Guests.length / 2, 0, "Saqib");
Guests.push("Minhaj");
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", you are invited for dinner"));
}); // print the new list using array function
// New Message
console.log("Sorry for that, I can invite only Two friends for dinner");
while (Guests.length > 5) {
    var RemoveGuest = Guests.pop();
    console.log("Sorry ".concat(RemoveGuest, ", i can't invite you for dinner today"));
}
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", you are still invited for dinner"));
});
Guests.splice(0, Guests.length);
console.log(Guests);
