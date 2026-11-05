let body = document.querySelector("body");

let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 2,
    health: 100,
    srcImage: "images/snortleblat.webp",
    
    attacked : function() {
        if(this.health != 0){
            this.health -= 20;
            if(this.health == 0 ){
                alert("Your character has died (*_*)");
            };
        }
        else if(this.health == 0 ){
            alert("Your character is still dead (*_*)");
        };
    },
    levelUp : function () {
        this.level += 1;
    }

};
body.innerHTML = `
    <div class="card">
        <img class="image" src=${character.srcImage} alt="swamp creature">
        <h1 class="name">${character.name}</h1>
        <section class="stats">
            <p>Class: ${character.class}</p>
            <p>Level:<span id="level">${character.level}</span></p>
            <p>Health: <span id="health">${character.health}</span></p>
        </section>
        <div class="buttons">
            <button id="attacked">Attacked</button>
            <button id="levelUp">Level Up</button>
        </div>
    </div>
    `;
const health = document.querySelector("#health");
const level = document.querySelector("#level");
document.querySelector("#attacked").addEventListener("click", (event) => {
    character.attacked();
    health.textContent = character.health;
});
document.querySelector("#levelUp").addEventListener("click", (event) => {
    character.levelUp();
    level.textContent = character.level;
});
// name, class, level, health, and image and methods: attacked and levelUp

