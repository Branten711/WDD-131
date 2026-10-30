const form = document.querySelector("#eventform");
const types = document.querySelector("#affiliation");
const output = document.querySelector("#output");
const typeContainer = document.querySelector(".type");

function updateTypeField() {
const selectedType = types.value;

if (selectedType === "student") {
    typeContainer.innerHTML = `
    <div class="field full">
        <label for="studentId">Student I#</label>
        <input id="studentId" name="studentId" type="text" required>
    </div>
    `;
} 
else if (selectedType === "guest") {
    typeContainer.innerHTML = `
    <div class="field full">
        <label for="accessCode">Access Code</label>
        <input id="accessCode" name="accessCode" type="text" required>
    </div>
    `;
} 
else {
    typeContainer.innerHTML = "";
}
}

types.addEventListener("change", updateTypeField);
updateTypeField();


function isPastDate(value) {
      const today = new Date();
       const chosen = new Date(value);
       return chosen < today;
    }


form.addEventListener("submit", function (event) {
event.preventDefault();
output.textContent = "";

const selectedType = types.value;
let code = "";

if (selectedType === "student") {
    code = form.studentId.value.trim();
    if(code.length < 9 ){
        output.textContent = "Student ID must be 9 characters";
        return;
    }
} 
else if (selectedType === "guest") {
    code = form.accessCode.value.trim();
    if(code != "Event131"){
        output.textContent = "Incorrect access Code";
        return;
    }

}

const firstName = form.firstName.value.trim();
const lastName = form.lastName.value.trim();
const email = form.email.value.trim();
const type = types.options[types.selectedIndex].text;
const availableDate = form.availableDate.value;


if (isPastDate(availableDate)) {
    output.textContent = "Please choose today or a later date.";
    return;
}

output.innerHTML = `
<h2>Ticket Created</h2>
<p>${firstName} ${lastName}</p>
<p>${type}</p>
<p>${code}</p>
`;

form.reset();
updateTypeField();
});