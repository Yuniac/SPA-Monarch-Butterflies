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