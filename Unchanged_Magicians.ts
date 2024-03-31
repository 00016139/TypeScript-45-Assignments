let Magicians : string[] = ["Aqib", "Fazeel", "Subhan"]; // declare a variable

function Show_Magicians(Magicians : String[]) {
    Magicians.forEach(Magicians => {
        console.log(Magicians);
    });
}
Show_Magicians(Magicians); // print the array in function

function Make_Great(Magicians : string[]) {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " The Great";
    }
}
Make_Great(Magicians); // cahnges in orignal array
Show_Magicians(Magicians); // Print New messege / Moified the great


function Make_great(Magicians : String[]) : string[] {
    let Great_Mgicians = [];
    Magicians.forEach(Magicians => {
        Great_Mgicians.push(`${Magicians} The Great`);
    });
    return Great_Mgicians;
}

let great_magacians = Make_great(Magicians.slice());
console.log("Original Magicians");
Show_Magicians(Magicians);
console.log("Great Magicians");
Show_Magicians(great_magacians);
