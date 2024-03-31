var Guests = ["Aqib", "Fazeel", "Subhan"];
Guests.forEach(function (Guest) {
    console.log("Hello ".concat(Guest, ", you are invited for dinner"));
});
var unableToAttend = "Subhan";
console.log("".concat(unableToAttend, " can't come for dinner"));
var Newguest = "Kashan";
Guests[Guests.indexOf(unableToAttend)] = Newguest;
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", you are invited for dinner"));
});
