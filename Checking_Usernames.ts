let Current_Users :string[] = ["user1", "user2", "admin", "user3", "user4"];
let New_Users : string[] = ["user1", "user5", "User6", "user7", "admin"];

New_Users.forEach(New_User => {
    if(Current_Users.some(Current_User => Current_User.toLowerCase() === New_User.toLowerCase())) {
        console.log(`${New_User} will need to enter a new username.`);
    } else {
        console.log(`${New_User} is Available.`);
    }
})