// -------------NAV------------------- //

// Creating variable for nav button
const navButton = document.querySelector("#button")
// create variable for container of navigation
const navContainer = document.querySelector(".nav-container")

// create event listener for button
navButton.addEventListener("click", () => {
// toggle visible class 
navContainer.classList.toggle("visible")
});