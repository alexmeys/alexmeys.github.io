// Create languageHandler (empty)
const LanguageHandler = {
  currentLanguage: 'en',
  flagHandlers: {},
  changeFunction: null,

  initialize(changeFunction) {
    this.changeFunction = changeFunction;
  },

  attachFlagHandlers({ flagHandlers, changeFunction }) {
    this.flagHandlers = flagHandlers;
    this.changeFunction = changeFunction;

    for (const [flagId, language] of Object.entries(flagHandlers)) {
      const flagElement = document.getElementById(flagId);
      flagElement.addEventListener('mouseover', () => this.changeLanguage(language));
    }
  },

  changeLanguage(language) {
    this.currentLanguage = language;
    this.changeFunction(language);
  },
  
  changeLanguageByText(text) {
    let language;
    switch (text) {
      case 'Systemen | Netwerken | Analyseren | Ontwerpen':
        language = 'nl';
        break;
      case 'Systèmes | Réseaux | Analyse | Conception':
        language = 'fr';
        break;
      case 'Systems | Networks | Analysis | Design':
        language = 'en';
        break;
      case 'Systemy | Sieci | Analiza | Projekt':
        language = 'pl';
        break;
      default:
        language = 'en';
        break;
    }
    this.changeLanguage(language);
  },
};

// loading Quotes based on language
function loadQuotes(language) {
}

// loading CareerData based on language
function loadCareerData(language) {
}

// Change text labels, buttons etc based of flags from FlagChange
function changeTextOnHover(language) {
  console.log('Language received in LanguageHandler.js:', language);
  const languageText = document.getElementById('languageText');
  const lowerButton = document.querySelector('.lower-btn');
  console.log('Lower Button:', lowerButton);
  const careerButton = document.getElementById('career-btn');
  const skillsButton = document.getElementById('skills-btn');
  const contactButton = document.getElementById('contact-btn');

  let text;
  switch (language) {
    case 'nl':
      text = 'Systemen | Netwerken | Analyseren | Ontwerpen';
      lowerButton.textContent = 'Verder';
      careerButton.textContent = 'Carrière';
      skillsButton.textContent = 'Vaardigheden';
      contactButton.textContent = 'Contact';
      break;
    case 'fr':
      text = 'Systèmes | Réseaux | Analyse | Conception';
      lowerButton.textContent = 'Continuer';
      careerButton.textContent = 'Carrière';
      skillsButton.textContent = 'Compétences';
      contactButton.textContent = 'Contact';
      break;
    case 'en':
      text = 'Systems | Networks | Analysis | Design';
      lowerButton.textContent = 'Continue';
      careerButton.textContent = 'Career';
      skillsButton.textContent = 'Skills';
      contactButton.textContent = 'Contact';
      break;
    case 'pl':
      text = 'Systemy | Sieci | Analiza | Projekt';
      lowerButton.textContent = 'Idź dalej';
      careerButton.textContent = 'Kariera';
      skillsButton.textContent = 'Umiejętności';
      contactButton.textContent = 'Kontakt';
      break;
    default:
      text = 'Systems | Networks | Analysis | Design';
      break;
  }
  console.log('Text changed successfully.');
  languageText.textContent = text;
}
