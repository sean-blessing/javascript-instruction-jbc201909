let readline = require('readline-sync');

console.log("Welcome to the Favorite Things App, v1");
// initialize an empty array to store favorites
let favorites = [];

let choice = "y";
while (choice=="y") {
    console.log("=== Add a favorite thing ===");
    let id_in = readline.questionInt("Favorite id? ");
    let thing_in = readline.question("Favorite Thing? ");
    let why_in = readline.question("Why is it a Favorite? ");

    let favorite = {
        id: id_in,
        thing: thing_in,
        why: why_in
    };

    favorites.push(favorite);

    choice = readline.question('Add another favorite?');
}

console.log("My list of favorites: ");
for (let f of favorites) {
    displayFavorite(f);
}

console.log("Retrieve a favorite by id...");
// 1) prompt user for id to retrieve
let idRetrieved = readline.questionInt("Which favorite (by id) do you want to retrieve?");
// 2) get that favorite (that matches the id entered) 
//    from the list and display
for (let f of favorites) {
    if (f.id==idRetrieved) {
        // this is the favorite we want!
        displayFavorite(f);
    }
}
// 3) create a function for the display - reduce redundancy
function displayFavorite(f) {
    console.log(`I like ${f.id} - ${f.thing} because ${f.why}.`);
}

console.log("Bye");