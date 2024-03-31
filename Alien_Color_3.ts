let Alient_Color :string = "Red";

if (Alient_Color == "Red") {
    console.log(`You Get 50 Points`);   
} else if (Alient_Color == "Yellow") {
    console.log("You Get 75 Points");
} else if (Alient_Color == "Green") {
    console.log("You Get 100 Points");
}
// First Condition pass only print first messege



let Alient_Color1 :string = "Yellow";

if (Alient_Color1 == "Red") {
    console.log(`You Get 50 Points`);   
} else if (Alient_Color1 == "Yellow") {
    console.log("You Get 75 Points");
} else if (Alient_Color1 == "Green") {
    console.log("You Get 100 Points");
}
// First condition fail, check 2nd condition, 2nd condition pass
// print the 2nd messege


let Alient_Color2 :string = "Green";

if (Alient_Color2 == "Red") {
    console.log(`You Get 50 Points`);   
} else if (Alient_Color2 == "Yellow") {
    console.log("You Get 75 Points");
} else if (Alient_Color2 == "Green") {
    console.log("You Get 100 Points");
}
// First condition fail, check 2nd condition, 2nd condition Fail
// check 3rd condition, 3rd condition pass, print the 3rd messege