// Get references to the flags, language text, and the button element
const flagBE = document.getElementById('flagBE');
const flagFR = document.getElementById('flagFR');
const flagEN = document.getElementById('flagEN');
const flagPL = document.getElementById('flagPL');
const languageText = document.getElementById('languageText');
const lowerButton = document.querySelector('.lower-btn');

// Variables to store the last hovered text and last clicked flag text
let lastHoveredText = "Hi there, Welcome!";
let lastClickedFlagText = "Continue";

// Function to handle text change on flag hover
function changeTextOnHover(text) {
    languageText.textContent = text;
    lastHoveredText = text;
}

// Function to handle text change on flag click
function changeTextOnClick(text) {
    lowerButton.textContent = text;
    lastClickedFlagText = text;
}

// Set event listeners for hover on each flag to change the text
flagBE.addEventListener('mouseover', () => {
    changeTextOnHover('Hallo daar, Welkom!');
});

flagFR.addEventListener('mouseover', () => {
    changeTextOnHover('Salut, Bienvenue!');
});

flagEN.addEventListener('mouseover', () => {
    changeTextOnHover('Hi there, Welcome!');
});

flagPL.addEventListener('mouseover', () => {
    changeTextOnHover('Cześć, Witaj!');
});

// Set event listeners for click on each flag to change the button text
flagBE.addEventListener('click', () => {
    changeTextOnClick('Scroll naar beneden');
});

flagFR.addEventListener('click', () => {
    changeTextOnClick('Faites défiler vers le bas');
});

flagEN.addEventListener('click', () => {
    changeTextOnClick('Scroll down');
});

flagPL.addEventListener('click', () => {
    changeTextOnClick('Przewiń w dół');
});

// Set the default text for the language text and lower button
languageText.textContent = lastHoveredText;
lowerButton.textContent = lastClickedFlagText;

// Retain the last hovered text when not hovering over any flag
const allFlags = [flagBE, flagFR, flagEN, flagPL];
allFlags.forEach(flag => {
    flag.addEventListener('mouseout', () => {
        languageText.textContent = lastHoveredText;
    });
});