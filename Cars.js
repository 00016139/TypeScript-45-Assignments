function Make_Car(Manufacturer, Model) {
    var Operations = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Operations[_i - 2] = arguments[_i];
    }
    var Car = { Manufacturer: Manufacturer, Model: Model };
    Operations.forEach(function (_a) {
        var Key = _a[0], Value = _a[1];
        return Car[Key] = Value;
    });
    return Car;
}
console.log(Make_Car("Toyota", "Corolla", ["Color", "Red"], ["Year", 2020]));
console.log(Make_Car("Ford", "Fiesta", ["Color", "Blue"], ["Sunroof", true]));
