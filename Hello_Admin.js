var Greetings = ["Admin", "Student1", "Student2", "Student3"];
Greetings.forEach(function (Greeting) {
    if (Greeting === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(Greeting, ", thank you for logging in again."));
    }
});
