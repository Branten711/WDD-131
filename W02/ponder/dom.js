// How to manipulate the DOM with Javascript

//grab our h1 from the page
let heading = document.querySelector("h1");

//only selects the first one that it comes too

console.log(heading);

heading.textContent = "Change the heading to something else";

// change the text color
heading.style.color = "blue";

// pick your own style and chnge it
heading.style.border = "3px solid black";
heading.style.fontStyle = "italic"

//Retrieve an Id element from th epage
document.getElementById("topics").style.color = "red";
//these are the same.
document.querySelector("#topics").style.color = "red";

let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Gold-crystals.jpg/3840px-Gold-crystals.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail");


let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                