let courses = ["WDD131", "ACCT211", "CSE222", "ITM270"];

// Arrays start at index 0.
console.log(courses[0]);
// console.log(course[4]);

let coursesAndGpa = ["WDD131", 3.7, "ITM270", 4];

// javascript object
let courseAndGPA = {
    courseName: "WDD131",
    gpa: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);
// How to acccess variable inside of object.
console.log(courseAndGPA.courseName);

// Array of objects
let coursesGpa = [{
    courseName: "WDD131",
    gpa: 3.7,
    professor: "Brother Warner",
    assignments: [
        {
            assignmentName: "W01 Prove",
            assignmentGrade: 89
        }
    ]
},
{
    courseName: "ITM270",
    gpa: 4,
    professor: "Brother Warner"
}
]

// Challenge retrieve the course name for second object

console.log(coursesGpa[1].courseName);
console.log(coursesGpa[0].assignments[0].assignmentName);

for(let i = 0; i < coursesGpa.length; i++){
    console.log(coursesGpa[i].courseName);
    console.log(coursesGpa[i].gpa);
}

coursesGpa.forEach(item => {
let dynamicHTML = `
    <div>
        <h1>${coursesGpa.courseName}</h1>
        <h2>${coursesGpa.gpa}</h2>
    </div>
`;
body.innerHTML += dynamicHTML;
});

let body = document.querySelector('body');

//build out html dynamically based on array contents

let dynamicHTML = `
<div>
    <h1>${coursesGpa.courseName}</h1>
    <h2>${coursesGpa.gpa}</h2>
</div>
`;
body.innerHTML += dynamicHTML;