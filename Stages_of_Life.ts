let Age : number = 23;

if(Age < 3) {
    console.log(`The person is a "Baby"`);
} else if (Age < 7) {
    console.log(`The person is a "School going Child"`);
} else if (Age < 13) {
    console.log(`The person is a "Kid"`);
} else if (Age < 19) {
    console.log(`The person is a "Teenager"`);
} else if (Age < 24) {
    console.log(`The person is an "Adult"`);
} else {
    console.log(`The person is an "Elder"`);
}
// Checking each condition 1st fail then check 2nd then 3rd,
// when condition pass print the messege and left remaining code
// if all conditions fails then print the last messege