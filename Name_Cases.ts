let name1 : string = "Muhammad Adeel Khan"; // declare a varible 
let uppercase = name1.toUpperCase(); // refrence the variable to uppercase
console.log(uppercase); // print the variable in uppercase

let lowercase = name1.toLowerCase(); // refrence the variable to lowercase
console.log(lowercase); // print the variable in lowercase

let name2 : string = "adeel"; // declare another variable using all small letters to show titlecase
console.log(name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase());
// print the name using code to capital first letter and break the name into slice except first letter, and the break part show in lower case