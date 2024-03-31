let Places : string[] = ["Turkey", "Makkah", "Japan", "Medina", "America"];
// Declare a varibale to store some places name

console.log("Original Order:", Places); // Print variable wirh message Orignal Order

console.log("Alphabetical Order:", [...Places].sort()); // Print againg in alphabetical order

console.log("Original Order:", Places); // Print variable wirh message Orignal Order

console.log("Reverse Alphabetical Order:", [...Places].sort().reverse());
// Print agaont in reverse alphabetical order using sort reverse

console.log("Original Order:", Places); // Print variable wirh message Orignal Order

Places.reverse(); // order change in reverse
console.log("Reverse Order", Places); // print variable showing its order has been changed

Places.reverse(); // order changed againg in its reverse/original order 
console.log("Original Order", Places); // print variable showing its order has been changed

Places.sort(); // order change againg in sort/alphabetical order
console.log("Alphabetical Order", Places); // print variable showing its order has been changed

Places.reverse(); // order change again in reverse alphabetical order
console.log("Reverse Aplhabetical Order", Places); // print variable showing its order has been changed
