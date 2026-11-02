// Javascript objects

// let can be changed later const can not be changed later

let aCourse = {
    name : "Dynamic Web Fundementals",
    code : "WDD131",
    credits : 2,
    // no name for an array the index is how you access it.

    // object inside of object
    sections : [
        {
            sectionNum: 1,
            roomNum: "STC 363",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 363",
            enrolled: 9,
            days: "TTh",
            instructor: "Bro Warner"
        }
    ],
    enrolled : function(sectionNumber) {
// You can use "this" to reference the object you are in.
        console.log(this.name)
    
    }
        

    }


console.log(aCourse.name);
aCourse.enrolled(1);

//Event listener when the button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (event) => {

//When pressed, find the section num they entered
let sectionNumber = document.querySelector("#sectionNumber").value.trim();

// increment enrollment of just that secton by 1
aCourse.sections.forEach(section =>{
    if(section.sectionNum == sectionNumber){
        section.enrolled += 1;
    }
    console.log(section.enrolled)

})
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

})

