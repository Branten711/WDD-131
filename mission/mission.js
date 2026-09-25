
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let byui = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
        document.body.style.backgroundColor = "#3b3b3b";
        byui.style.color = "#006EB6"
        document.body.style.color = "white";
    } else {
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        // code for changes to colors and logo
    }
}          

changeTheme();