$(document).ready(function(){
    $(".bg-image").ripples({
    resolution: 300,
    perturbance: .004,
});
});

const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function add() {
    if (inputBox.value === '') {
        alert("Please Add The Task");
    } else {
        // Create new list item
        let li = document.createElement("li");

        // Set inner HTML for the new list item
        li.innerHTML = `
            <span class="tick-icon"></span> ${inputBox.value}
            <span class="trash-icon" onclick="deleteTask(this)">✖</span>
        `;

        li.classList.add("tick"); // Add the tick class for new tasks
        li.onclick = function() {
            this.classList.toggle("checked"); // Toggle checked state
        };

        list.appendChild(li); // Add the new item to the list
        inputBox.value = ''; // Clear the input box after adding the task
    }
}

function deleteTask(element) {
    const li = element.parentElement; // Get the parent <li>
    list.removeChild(li); // Remove the task from the list
}
