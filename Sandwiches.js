function Make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with : ".concat(items.join(', '), "."));
}
Make_Sandwich("ham", "Cheese");
Make_Sandwich("Turkey", "Lettuce", "Tomato");
Make_Sandwich("Avocado", "Sprouts", "Mustard", "Mayo");
