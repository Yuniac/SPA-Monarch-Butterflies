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
var homeContainer = document.getElementById("homeContainer");
var aboutContainer = document.getElementById("aboutContainer");
var contactContainer = document.getElementById("contactContainer");
var orderContainer = document.getElementById("orderContainer");

// events 

homeBtn.addEventListener("click", function() {
    homeContainer.classList.add("visible-container");
    aboutContainer.classList.remove("visible-container");
    contactContainer.classList.remove("visible-container");
    orderContainer.classList.remove("visible-container");
});

aboutBtn.addEventListener("click", function() {
    aboutContainer.classList.add("visible-container");
    homeContainer.classList.remove("visible-container");
    contactContainer.classList.remove("visible-container");
    orderContainer.classList.remove("visible-container");
});

contactbtn.addEventListener("click", function() {
    contactContainer.classList.add("visible-container");
    homeContainer.classList.remove("visible-container");
    aboutContainer.classList.remove("visible-container");
    orderContainer.classList.remove("visible-container");
});

orderBtn.addEventListener("click", function() {
    orderContainer.classList.add("visible-container");
    homeContainer.classList.remove("visible-container");
    aboutContainer.classList.remove("visible-container");
    contactContainer.classList.remove("visible-container");
});

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

// custom right click (context-menu) credits go to PW-learning (https://github.com/PW-learning);
let cm = document.querySelector("#context-menu")
let = cmWidth = 180;
let = cmHeight = 240;

document.addEventListener("contextmenu", e => {
    e.preventDefault();
    // get the browser's window width;
    let windowXLimit = window.innerWidth;
    let windowYLimit = window.innerHeight;

    // console.log(windowXLimit)
    // console.log(windowYLimit);

    // get where the mouse is clicking;
    let cX = Math.round(e.clientX);
    let cY = Math.round(e.clientY);

    console.log(e.clientX)
    console.log(e.clientY);

    // Safe area for default menu behaviour;
    let sX = windowXLimit - cmWidth;
    let sY = windowYLimit - cmHeight;

    // // logic to prevent the menu from overflowing;
    if (cX > sX) {
        cX = cX - cmWidth // we are clicking out of safe area X
    }
    if (cY > sY) {
        cY = cY - cmHeight // we are clicking out of safe area Y
    }

    // Show our menu
    cm.style.left = cX + "px"
    cm.style.top = cY + "px"
    cm.style.display = "block"
});

// Hide the menu when clicking outside of it;
document.addEventListener("click", () => {
    cm.style.display = "none";
});

// Stop the clicking event on our menu;
cm.addEventListener("click", e => {
    e.stopPropagation()
});

// Stop the right click event too;
cm.addEventListener("contextmenu", e => {
    e.preventDefault()
    e.stopPropagation()
});