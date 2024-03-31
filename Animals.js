var Animals = ["Cow", "Cat", "Goat"];
Animals.forEach(function (Animal) {
    console.log(Animal);
});
Animals.forEach(function (Animal) {
    console.log("".concat(Animal, " is Good Animal"));
});
console.log("Cuteness is common in ".concat(Animals));
