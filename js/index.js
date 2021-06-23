// nav buttons 
var homeBtn = document.getElementById("home");
var aboutBtn = document.getElementById("about");
var Sanctuariesbtn = document.getElementById("Sanctuaries");
var galleryBtn = document.getElementById("gallery");

// on-mobile nav button and menu
var openMenuBtn = document.getElementById("openMenuBtn");
var closeMenuBtn = document.getElementById("closeMenuBtn")
var menu = document.getElementById("menu");



// Container containers 
var homeContainer = document.getElementById("home");
var aboutContainer = document.getElementById("about");
var SanctuariesContainer = document.getElementById("Sanctuaries");
var galleryContainer = document.getElementById("gallery");

// events 

let navButtons = document.querySelectorAll(".navButton");
let contextMenuOptions = document.querySelectorAll(".context-menu-options");
let contentContainers = document.querySelectorAll(".container");

navButtons.forEach(button => {
    button.addEventListener("click", showContent)
})
contextMenuOptions.forEach(option => {
    option.addEventListener("click", showContent)
})

function showContent(e) {
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
}


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

    // get where the mouse is clicking;
    let cX = Math.round(e.clientX);
    let cY = Math.round(e.clientY);


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

// our menu has a purpose now (other than just existing), upon clicking on an option in it, the content will be changed and the menu will hide itself;
cm.addEventListener("click", e => {
    cm.style.display = "none";
});

// Stop the right click event too;
cm.addEventListener("contextmenu", e => {
    e.preventDefault()
    e.stopPropagation()
});

// 

const allLinksInThePage = document.querySelectorAll("a");
allLinksInThePage.forEach(a => {
    a.addEventListener("dragstart", (e) => {
        e.preventDefault();
        return false;
    })
})

const allImagesInThePage = document.querySelectorAll("img");
allImagesInThePage.forEach(img => {
    img.addEventListener("dragstart", (e) => {
        e.preventDefault();
        return false;
    })
})