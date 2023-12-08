// Get references to the flags, language text, and the button element
const flagBE = document.getElementById('flagBE');
const flagFR = document.getElementById('flagFR');
const flagEN = document.getElementById('flagEN');
const flagPL = document.getElementById('flagPL');
const languageText = document.getElementById('languageText');
const lowerButton = document.querySelector('.lower-btn');

//  Configure default stuff on hover
let lastHoveredText = "Hi there, Welcome!";

// Function to on flag hover, change text (and lower-btn)
function changeTextOnHover(text) {
    languageText.textContent = text;
    lastHoveredText = text;

    if (text === 'Hallo daar, Welkom!') {
        lowerButton.textContent = 'Verder';
    } else if (text === 'Salut, Bienvenue!') {
        lowerButton.textContent = 'Continuer';
    } else if (text === 'Hi there, Welcome!') {
        lowerButton.textContent = 'Continue';
    } else if (text === 'Cześć, Witaj!') {
        lowerButton.textContent = 'Idź dalej';
    }
}

// Actions set on change
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

// Default sets & lower-btn
languageText.textContent = lastHoveredText;
lowerButton.textContent = 'Continue'; 

// Retain hovered text
const allFlags = [flagBE, flagFR, flagEN, flagPL];
allFlags.forEach(flag => {
    flag.addEventListener('mouseout', () => {
        languageText.textContent = lastHoveredText;
    });
});