let gallery = document.querySelector('.gallery');
let dialog = document.querySelector('dialog');
let dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector('.close-viewer');
let menuButton = document.querySelector('#menu-btn');
let nav = document.querySelector('nav');
let logic = false;

console.log(menuButton);
console.log(nav);

menuButton.addEventListener("click", function(event){
    console.log(event);
    // nav.style.display = nav.style.display === '' ? 'flex' : '';
    // nav.style.flexDirection = "column";
    if(logic == false) {
       
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        logic = true;
        menuButton.classList.toggle('change');
    }
    else {
        nav.style.display = "none";
        logic = false;
    }
    
})

gallery.addEventListener('click', function(event){
    let source = event.target.src;
    console.log(source);
    if(source != undefined)
    {
        dialogImage.src = "images/norris-full.jpg";
        dialog.showModal();
    }
})
closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});