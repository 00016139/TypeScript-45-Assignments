var Current_Users = ["user1", "user2", "admin", "user3", "user4"];
var New_Users = ["user1", "user5", "User6", "user7", "admin"];
New_Users.forEach(function (New_User) {
    if (Current_Users.some(function (Current_User) { return Current_User.toLowerCase() === New_User.toLowerCase(); })) {
        console.log("".concat(New_User, " will need to enter a new username."));
    }
    else {
        console.log("".concat(New_User, " is Available."));
    }
});
