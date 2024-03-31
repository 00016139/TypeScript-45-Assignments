let Numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Numbers.forEach(Number => {
    let Suffix = "th";
    if(Number === 1) {
        Suffix = "st";
    } else if (Number === 2) {
        Suffix ="nd";
    } else if(Number === 3) {
        Suffix = "rd";
    } console.log(`${Number}${Suffix}`);
});