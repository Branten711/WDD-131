let nav = document.querySelector('nav');

let menuButton = document.querySelector('.menu-btn');

// menuButton.addEventListener("click", toggleMenu)

// function toggleMenu(){
let logic = false;
// }
//Anonymous function
// you can put your function in here if you only use it once.
menuButton.addEventListener("click", function(){
    nav.style.display = nav.style.display === '' ? 'flex' : '';
    nav.style.flexDirection = "column";
    menuButton.classList.toggle('change');
    // menuButton = "X";

    // if(nav.style.display = 'none' && logic == false) {
    //     console.log("I am in");
    //     nav.style.display = "flex";
    //     nav.style.flexDirection = "column";
    //     logic = true;
    //     menuButton.classList.toggle('change');
    // }
    // else {
    //     nav.style.display = "none"
    //     logic = false;
    // }

})



