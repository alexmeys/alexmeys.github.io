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
function changeTextOnHover(text, language) {
  languageText.textContent = text;
  lastHoveredText = text;

  // Trigger the language change based on the text of the flag
  let langCode;
  switch (text) {
    case 'Systemen | Netwerken | Analyseren | Ontwerpen':
      langCode = 'nl'; // Assuming this is Dutch
      break;
    case 'Systèmes | Réseaux | Analyse | Conception':
      langCode = 'fr'; // French
      break;
    case 'Systems | Networks | Analysis | Design':
      langCode = 'en'; // English
      break;
    case 'Systemy | Sieci | Analiza | Projekt':
      langCode = 'pl'; // Polish
      break;
    default:
      langCode = 'en'; // Set default language if not matched
      break;
  }

  // Call the function to load data for the selected language
  changeLanguage(langCode);
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