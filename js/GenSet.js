function imgError(image) {
    image.style.display = 'none'; // Hide the image when it fails to load
}


function detectUserLanguage() {
  const userLanguage = navigator.language.substring(0, 2); // ISO Lang code

  // Langs I support
  const supportedLanguages = ['en', 'nl', 'fr', 'pl'];

  // Check if the user's language is supported, default to 'en' otherwise
  const defaultLanguage = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';

  // Set detected default lang
  return defaultLanguage;
}
defLang = detectUserLanguage();

changeCareerLanguage(defLang);
changeQuotesLanguage(defLang);
changeMenusLanguage(defLang);