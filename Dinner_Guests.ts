let Guests : string[] = ["Aqib", "Fazeel", "Kashan"]; // declare a variable 

// New Message
console.log(`WoW! I have a big table for dinner, Lets intive more friends`);

Guests.unshift("Kashan Rana");
Guests.splice(Guests.length / 2, 0, "Saqib");
Guests.push("Minhaj");

Guests.forEach(Guest =>{
    console.log(`Dear ${Guest}, you are invited for dinner`);
}) // print the new list using array function

// New Message
console.log("Sorry for that, I can invite only Two friends for dinner");

while(Guests.length > 5) {
    let RemoveGuest = Guests.pop();
console.log(`Sorry ${RemoveGuest}, i can't invite you for dinner today`);
}
// using while loop givien condition if guests list more then 5 then remove excess friends
// and print the message to that friend i can't invite you for dinner

Guests.forEach(Guest => {
    console.log(`Dear ${Guest}, you are still invited for dinner`);
})

console.log(`I am inviting ${Guests.length} friends to dinner`);
// print  guests list using array function to find how many friends are invited
