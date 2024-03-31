function Make_Sandwich(...items: string[]) {
    console.log(`Making a Sandwich with : ${items.join(', ')}.`);
}

Make_Sandwich("ham", "Cheese");
Make_Sandwich("Turkey", "Lettuce", "Tomato");
Make_Sandwich("Avocado", "Sprouts", "Mustard", "Mayo");
