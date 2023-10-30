// -------------NAV-TOGGLE------------------ //

// Creating variable for nav button
const navButton = document.querySelector("#button");
// create variable for container of navigation
const navContainer = document.querySelector(".nav-container");

// create event listener for button
navButton.addEventListener("click", () => {
// toggle visible class 
navContainer.classList.toggle("visible");
});

// -------------DARK-MODE-TOGGLE----------------- //

// Create variable for toggle
const darkButton = document.querySelector("#darkmode")
// create variable for elements being triggered
const body = document.querySelector("body")
// Add event listener to toggle
darkButton.addEventListener("click", () => {
  // make elements being triggered have darkmode class
body.classList.toggle("darkmode")
})