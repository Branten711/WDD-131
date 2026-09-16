
// Declare a Variable in Javascript//

let age = 23;

//How ot print ot the console//
console.log(age);

age = 22;
// A constant variable
const name = "Brother Warner";
console.log(name)

// This should not work
//name = "Dr Java";

// Scope is where you can reference a variable 

let username = "Billybob";

if(age == 22) 
    {
        // a new scope
        console.log(username);
        let favoritColor = "blue";
        console.log(favoritColor);
        let name = "Dr Java";
        console.log(name);

    }

const favoriteColor = "Blue";
console.log(favoriteColor);

document.querySelector("h1").style.color = "blue";
