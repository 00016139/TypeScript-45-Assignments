let Animals : string[] = ["Cow", "Cat", "Goat"];
Animals.forEach(Animal => {
    console.log(Animal);
})
Animals.forEach(Animal => {
    console.log(`${Animal} is Good Animal`);  
})
console.log(`Cuteness is common in ${Animals}`);
