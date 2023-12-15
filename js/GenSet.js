function imgError(image) {
    image.style.display = 'none'; // Hide the image when it fails to load
}

function detectBrowserLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage;

  // mapping languages
  const languageMap = {
    'en': 'careerD_US.json',
    'nl': 'careerD_NL.json',
    'fr': 'careerD_FR.json',
	'pl': 'careerD_PL.json',
  };

  // Get the language from browser, split, set in var or default Eng
  const languageCode = userLanguage.split('-')[0];
  const fileName = languageMap[languageCode] || 'careerD_US.json';

  // Load data based on the detected language
  loadCareerData(languageCode);
}

// Call the function to detect browser language and load data
detectBrowserLanguage();