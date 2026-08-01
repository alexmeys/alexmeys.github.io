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
changeCareersLanguage(defLang);
changeQuotesLanguage(defLang);
changeMenusLanguage(defLang);
changeSkillsLanguage(defLang);


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
// ( firstContainer loading frames, temp disabled)
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const buttonContainer = document.querySelector('.button-container');
  const fillerContainer = document.querySelector('.filler-sections');
  //const firstContainer = document.querySelector('.home-wrapper');
  
  const scrollDownThreshold = window.innerHeight * 0.4; // 10% viewport for down scroll
  const scrollUpThreshold = window.innerHeight * 0.3; // 80% viewport for scroll up

  const scrollPosition = window.scrollY;

  if (scrollPosition < scrollDownThreshold) {
    buttonContainer.style.display = 'block';
	//firstContainer.style.display = 'flex';
    fillerContainer.style.display = 'none';
  } else {
    if (scrollPosition > lastScrollPosition && scrollPosition > scrollDownThreshold) {
      buttonContainer.style.display = 'none';
	  //firstContainer.style.display = 'none';
	  fillerContainer.style.display = 'block';
    } else if (scrollPosition < scrollUpThreshold) {
      buttonContainer.style.display = 'block';
	  //firstContainer.style.display = 'flex';
	  fillerContainer.style.display = 'block';
    }
  }

  lastScrollPosition = scrollPosition;
});
