// Function to load career data based on language
function loadCareerData(language) {
  const languageToFileName = {
    en: 'careerD_EN.json',
    nl: 'careerD_NL.json',
    fr: 'careerD_FR.json',
	pl: 'careerD_PL.json',
  };

  const fileName = languageToFileName[language];

  if (!fileName) {
    console.error('Language not supported');
    return;
  }

  fetch(`./tl/career/${fileName}`)
    .then(response => response.json())
    .then(data => {
      populateCarousel('career-content', data);
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON file', error);
    });
}

// Function to handle language change based on flag click or hover
function changeCareerLanguage(language) {
  loadCareerData(language);
}

// Updated populateCarousel function
function populateCarousel(containerId, data) {
  const carousel = document.querySelector(`#${containerId} .carousel`);
  
  carousel.innerHTML = '';

  data.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const contentHTML = `
      <div class="carousel-content">
        <div class="carousel-text">
          <div class="carousel-titleT">
            <h3>${item.Function}</h3>
          </div>
          <div class="carousel-info">
            <p>${item.datestart} - ${item.dateend}</p>
            <p>${item.CompanyName}</p>
          </div>
          <div class="carousel-story">
            <p>${item.Story}</p>
          </div>
        </div>
      </div>
    `;

    carouselItem.innerHTML = contentHTML;
    carousel.appendChild(carouselItem);

    const infoDate = carouselItem.querySelector('.carousel-info p:nth-child(1)');
    const infoText = carouselItem.querySelector('.carousel-info p:nth-child(2)');
    const infoStory = carouselItem.querySelector('.carousel-story p:nth-child(1)');
    if (item.dateend.toLowerCase() === 'current' || item.dateend.toLowerCase() === 'present') {
      infoText.style.color = '#F0F0F0';
      infoDate.style.color = '#F0F0F0';
      infoStory.style.color = '#F0F0F0';
    } else {
      infoText.style.color = '#C4C4C4';
      infoDate.style.color = '#C4C4C4';
      infoStory.style.color = '#C4C4C4';
    }
  });

  const items = carousel.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}

function showNext() {
  const carousel = document.querySelector('.carousel');
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  });
}

function showPrevious() {
  const carousel = document.querySelector('.carousel');
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  });
}

// Call the loadCareerData function with the desired language
loadCareerData('en'); // Default language, -> from browser invoegen
