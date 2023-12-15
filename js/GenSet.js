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

// Detect language on first visit
defLang = detectUserLanguage();

// Set info on first visit in lang detected
changeCareerLanguage(defLang);
changeQuotesLanguage(defLang);
changeMenusLanguage(defLang);

// Open Career section by default
document.addEventListener('DOMContentLoaded', function() {
  const openCareer = document.getElementById('career-btn');
  const transparentBtn = document.querySelector('.transparent-btn');
  
  openCareer.addEventListener('click', function() {
    transparentBtn.classList.add('active');
  });
  openCareer.click();
});

// hide & show the scroll down 
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const buttonContainer = document.querySelector('.button-container');
  const scrollThreshold = window.innerHeight * 0.74; // 74% viewport

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold) {
    if (scrollPosition > lastScrollPosition) {
      buttonContainer.style.display = 'none';
    } else {
      buttonContainer.style.display = 'block';
    }
  } else {
    buttonContainer.style.display = 'block';
  }

  lastScrollPosition = scrollPosition;
});