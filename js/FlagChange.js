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
	  case 'Architectuur | Integratie | Optimalisatie | Advies':
	    langCode = 'nl';
	    break;
	  case 'Architecture | Intégration | Optimisation | Conseil':
	    langCode = 'fr';
	    break;
	  case 'Architecture | Integration | Optimization | Advisory':
	    langCode = 'en';
	    break;
	  case 'Architektura | Integracja | Optymalizacja | Doradztwo':
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
    changeTextOnHover('Architectuur | Integratie | Optimalisatie | Advies');
});

flagFR.addEventListener('mouseover', () => {
    changeTextOnHover('Architecture | Intégration | Optimisation | Conseil');
});

flagEN.addEventListener('mouseover', () => {
    changeTextOnHover('Architecture | Integration | Optimization | Advisory');
});

flagPL.addEventListener('mouseover', () => {
    changeTextOnHover('Architektura | Integracja | Optymalizacja | Doradztwo');
});
