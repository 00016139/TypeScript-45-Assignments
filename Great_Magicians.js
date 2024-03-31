var Magicians = ["Aqib", "Fazeel", "Subhan"];
function Show_Magicians(Magicians) {
    Magicians.forEach(function (Magicians) {
        console.log(Magicians);
    });
}
Show_Magicians(Magicians);
function Make_Great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " The Great";
    }
}
Make_Great(Magicians);
Show_Magicians(Magicians);
