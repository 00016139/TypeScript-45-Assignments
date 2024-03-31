function Make_Album(Artist : String, Title : String, Track? : Number) {
    let Album = {Artist, Title};
    if(Track) {
        Album[`Track`] = Track;
    }
    return Album;
}

console.log(Make_Album("Artist One", "The First Album"));
console.log(Make_Album("Artist Two", "The Second Album"));
console.log(Make_Album("Artist Three", "The Third Album", 5));