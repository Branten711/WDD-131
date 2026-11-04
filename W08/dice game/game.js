// 1. Add event listener to the rollButton
let diceImages = [
        "assets/white_dice_1.gif", 
        "assets/white_dice_2.gif",
        "assets/white_dice_3.gif",
        "assets/white_dice_4.gif",
        "assets/white_dice_5.gif",
        "assets/white_dice_6.gif"]

document.querySelector("#rollButton").addEventListener("click", event => {
    //animate the dice
        //switch the src to the die rolling animation
    // if(isDieUnlocked){
    // let images = document.querySelectorAll("img");
    // images.forEach(image => {
    //     image.src = "assets/die_rolling.gif";

    // });
    // }
    
    setTimeout(() => {
        //run whats in here
    images.forEach(image => {
        if(isDieUnlocked(image)){
            let roll = Math.floor(Math.random()* 6) + 1;
            console.log(Math.random()* 6);
            image.src = diceImages[roll-1];
        }
    });
    }, 1000)
  
    //Change the value that each die lands on randomly
        //changing the src imag
});


function isDieUnlocked(dieImage) {
    //is the coresponding checkbox checked
    const checkboxes = document.querySelectorAll("#gameboard input");
    //return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}