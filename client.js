"use strict";
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
const darkButton = document.querySelector("#darkmode");
// create variable for elements being triggered
const body = document.querySelector("body");
// Add event listener to toggle
darkButton.addEventListener("click", () => {
  // make elements being triggered have darkmode class
body.classList.toggle("darkmode");

/* Create ability to keep darkmode on refresh by using local storage */

// create variable for localStorage to pull data from
let theme;
// giving theme a name within storage 
if(body.classList.contains("darkmode")){
  theme = "dark";
} else {
  theme = "light";
}
// set local storage
localStorage.setItem("PageTheme", JSON.stringify(theme));
}
)
// create local storage for theme
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
// toggle mode depending on where user left off
if(getTheme === "dark"){
  body.classList.toggle("darkmode");
}

// ------------BUTTON-NO-REFRESH-ON-CLICK---------------- //

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  alert("there is no merch on this site, we now know everything about you ahahahaha");

})

// ------------GALLERY---------------- //

let galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let content = "";

for (const image of galleryImages) {
  content += `<img src="images/img${image}.jpg ">`;
}
const gallery = document.querySelector("#gallery-photos");

gallery.innerHTML = content;