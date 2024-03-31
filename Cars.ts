function Make_Car(Manufacturer : String, Model : string, ...Operations : [String, any][]): Object{
    let Car = { Manufacturer, Model};
    Operations.forEach(([Key, Value]) => Car[Key] = Value);
    return Car;
}

console.log(Make_Car("Toyota", "Corolla", ["Color", "Red"], ["Year", 2020]));
console.log(Make_Car("Ford", "Fiesta", ["Color", "Blue"], ["Sunroof", true]));
