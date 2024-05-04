// Get references to the flags, language text, and the button element
const flagBE = document.getElementById('flagBE');
const flagFR = document.getElementById('flagFR');
const flagEN = document.getElementById('flagEN');
const flagPL = document.getElementById('flagPL');


// Function to on flag hover, change text (and lower-btn)
function changeTextOnHover(text) {
    languageText.textContent = text;

	// Trigger the language change based on the text of the flag
    let langCode;
    switch (text) {
	  case 'Systemen | Netwerken | Scripts':
	    langCode = 'nl';
	    break;
	  case 'Systèmes | Réseaux | Scripts':
	    langCode = 'fr';
	    break;
	  case 'Systems | Networks | Scripts':
	    langCode = 'en';
	    break;
	  case 'Systemy | Sieci | Skrypty':
	    langCode = 'pl';
	    break;
	  default:
	    langCode = 'en'; // Set default language if not matched
	    break;
	}

	// Call the function to load data for the selected language
	changeCareersLanguage(langCode);
	changeQuotesLanguage(langCode);
	changeMenusLanguage(langCode);
	changeSkillsLanguage(langCode);
}

// Actions set on change
flagBE.addEventListener('mouseover', () => {
    changeTextOnHover('Systemen | Netwerken | Scripts');
});

flagFR.addEventListener('mouseover', () => {
    changeTextOnHover('Systèmes | Réseaux | Scripts');
});

flagEN.addEventListener('mouseover', () => {
    changeTextOnHover('Systems | Networks | Scripts');
});

flagPL.addEventListener('mouseover', () => {
    changeTextOnHover('Systemy | Sieci | Skrypty');
});
