// nav buttons 
var homeBtn = document.getElementById("home");
var aboutBtn = document.getElementById("about");
var contactbtn = document.getElementById("contact");
var orderBtn = document.getElementById("order");

// on-mobile nav button and menu
var openMenuBtn = document.getElementById("openMenuBtn");
var closeMenuBtn = document.getElementById("closeMenuBtn")
var menu = document.getElementById("menu");



// Container containers 
var homeContainer = document.getElementById("home");
var aboutContainer = document.getElementById("about");
var contactContainer = document.getElementById("contact");
var orderContainer = document.getElementById("order");

// events 

let navButtons = document.querySelectorAll(".navButton");
let contentContainers = document.querySelectorAll(".container");

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // this line will return the data attribute which contains a name describing what is this button related to and thus what it should show;
        let target = e.explicitOriginalTarget.firstChild.data.toLowerCase();
        contentContainers.forEach(container => {
            if (container.id === target) {
                if (!container.classList.contains("visible-container")) {
                    container.classList.add("visible-container");
                }
            } else {
                container.classList.remove("visible-container");
            }
        })
    })
})

// on-mobile events 

openMenuBtn.addEventListener("click", function() {
    menu.style.display = "flex";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", function() {
    menu.style.display = "";
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
})