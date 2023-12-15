// Get 'em flags
const flagBE = document.getElementById('flagBE');
const flagFR = document.getElementById('flagFR');
const flagEN = document.getElementById('flagEN');
const flagPL = document.getElementById('flagPL');
const languageText = document.getElementById('languageText');

// set the languages
const flagHandlers = {
  flagBE: 'nl',
  flagFR: 'fr',
  flagEN: 'en',
  flagPL: 'pl',
};


// change on hoverflag
function changeTextOnHover(text) {
  console.log('Text received in FlagChange.js:', text);
  languageText.textContent = text;

  // Trigger the language change based on the text of the flag
  LanguageHandler.changeLanguageByText(text);
  console.log('send fromFlagChnage.js end: ', text);
}


// Actions set on change
flagBE.addEventListener('mouseover', () => {
    changeTextOnHover('Systemen | Netwerken | Analyseren | Ontwerpen');
	console.log('Flag BE Hovered');
});

flagFR.addEventListener('mouseover', () => {
    changeTextOnHover('Systèmes | Réseaux | Analyse | Conception');
	console.log('Flag FR Hovered');
});

flagEN.addEventListener('mouseover', () => {
    changeTextOnHover('Systems | Networks | Analysis | Design');
	console.log('Flag EN Hovered');
});

flagPL.addEventListener('mouseover', () => {
    changeTextOnHover('Systemy | Sieci | Analiza | Projekt');
	console.log('Flag PL Hovered');
});
