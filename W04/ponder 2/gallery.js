//1. Retriev elements needed from the DOM
let dialog = document.querySelector("dialog");
let gallery = document.querySelector(".gallery");
let dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector('.close-viewer');


//2. Add an Event listener to tell when the user clicks

gallery.addEventListener("click", function(event){
    // console.log(event.target.src);
    //Swap out the source of the dialogue image
    let source = event.target.src.replace("-sm","-full");
    if(source != undefined){
    console.log(source)
    dialogImage.src = source;
    //Show dialogue box
    dialog.showModal();
    }  
})
// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
