// functions
function collectFood() {}

function distributeFood() {
    const food = prompt('Enter food name');
    const placeDistributed =prompt('Enter the place the food to be distributed')
    distributeFood.push({food, placeDistributed });
    displayStatus("Added food name: " + food + " (place Distributed:" + placeDistributed + ")");

}

function addVolunteer() {
const name = prompt("Enter volunteer's name:");
const role = prompt("Enter volunteer's role:");
volunteers.push({ name, role });
displayStatus("Added volunteer: " + name + " (Role: " + role + ")");
}