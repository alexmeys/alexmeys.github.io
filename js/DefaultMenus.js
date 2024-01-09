// Fetch data field
const lowerButton = document.querySelector('.lower-btn');
const careerMenu = document.getElementById('career-btn');
const skillsMenu = document.getElementById('skills-btn');
const contactMenu = document.getElementById('contact-btn');
const languageText = document.getElementById('languageText');

// array of data -> user filling menus
const menusDataNL = [
  { LBannerT: 'Systemen | Netwerken | Analyseren'},
  { lowerBT: 'Verder' },
  { careerBT: 'Loopbaan' },
  { skillsBT: 'Vaardigheden' },
  { contactBT: 'Contact' }
];
const menusDataEN = [
  { LBannerT: 'Systems | Networks | Analysis'},
  { lowerBT: 'Continue' },
  { careerBT: 'Career' },
  { skillsBT: 'Skills' },
  { contactBT: 'Contact' }
];
const menusDataFR = [
  { LBannerT: 'Systèmes | Réseaux | Analyse'},
  { lowerBT: 'Continuer' },
  { careerBT: 'Carrière' },
  { skillsBT: 'Compétences' },
  { contactBT: 'Contact' }
];
const menusDataPL = [
  { LBannerT: 'Systemy | Sieci | Analiza'},
  { lowerBT: 'Idź dalej' },
  { careerBT: 'Kariera' },
  { skillsBT: 'Umiejętności' },
  { contactBT: 'Kontakt' }
];

function updateMenus(language) {
  let selectedData;

  switch (language) {
    case 'nl':
      selectedData = menusDataNL;
      break;
    case 'fr':
      selectedData = menusDataFR;
      break;
    case 'pl':
      selectedData = menusDataPL;
      break;
    default:
      selectedData = menusDataEN; // Default to English if language isn't recognized
      break;
  }

  // Update menu elements based on selected data
  selectedData.forEach(menuItem => {
    const key = Object.keys(menuItem)[0]; // Get the key of the menu item
    const value = menuItem[key]; // Get the corresponding value

    // Update the respective menu button text based on the key
    switch (key) {
	  case 'LBannerT':
	    languageText.textContent = value;
      case 'lowerBT':
        lowerButton.textContent = value;
        break;
      case 'careerBT':
        careerMenu.textContent = value;
        break;
      case 'skillsBT':
        skillsMenu.textContent = value;
        break;
      case 'contactBT':
        contactMenu.textContent = value;
        break;
      default:
        break;
    }
  });
}

// Change Language for Menus
function changeMenusLanguage(language) {
  updateMenus(language);
}
