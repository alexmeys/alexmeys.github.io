// Get references to the flags, language text, and the button element
const flagBE = document.getElementById('flagBE');
const flagFR = document.getElementById('flagFR');
const flagEN = document.getElementById('flagEN');
const flagPL = document.getElementById('flagPL');
const languageText = document.getElementById('languageText');
const lowerButton = document.querySelector('.lower-btn');

//  Configure default stuff on hover
let lastHoveredText = "Systems | Networks | Analysis | Design";

// Function to on flag hover, change text (and lower-btn)
function changeTextOnHover(text) {
    languageText.textContent = text;
    lastHoveredText = text;

    if (text === 'Systemen | Netwerken | Analyseren | Ontwerpen') {
        lowerButton.textContent = 'Verder';
    } else if (text === 'Systèmes | Réseaux | Analyse | Conception') {
        lowerButton.textContent = 'Continuer';
    } else if (text === 'Systems | Networks | Analysis | Design') {
        lowerButton.textContent = 'Continue';
    } else if (text === 'Systemy | Sieci | Analiza | Projekt') {
        lowerButton.textContent = 'Idź dalej';
    }
}

// Actions set on change
flagBE.addEventListener('mouseover', () => {
    changeTextOnHover('Systemen | Netwerken | Analyseren | Ontwerpen');
});

flagFR.addEventListener('mouseover', () => {
    changeTextOnHover('Systèmes | Réseaux | Analyse | Conception');
});

flagEN.addEventListener('mouseover', () => {
    changeTextOnHover('Systems | Networks | Analysis | Design');
});

flagPL.addEventListener('mouseover', () => {
    changeTextOnHover('Systemy | Sieci | Analiza | Projekt');
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