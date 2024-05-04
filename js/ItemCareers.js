// var's for storing and index
let careersData; 
let currentCategoryIndexCareer = 0; 

// Loading Careers
function loadCareers(language) {
  const careersFileNames = {
    en: 'careerD_EN.json',
	nl: 'careerD_NL.json',
	fr: 'careerD_FR.json',
	pl: 'careerD_PL.json',
  };

  const fileName = careersFileNames[language] || 'careersD_EN.json'; 

  fetch(`./tl/career/${fileName}`)
    .then(response => response.json())
    .then(data => {
      careersData = data;
      updateCareers(currentCategoryIndexCareer);
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON file for careers', error);
    });
}

// Update Careers based on current category index
function updateCareers(categoryIndex) {
  const careersCont = document.querySelector('.careers-cont');
  careersCont.innerHTML = '';

  const careerItems = careersData;
  const career = careerItems[categoryIndex];

  const functionElement = document.createElement('div');
  functionElement.classList.add('function-item');
  const functionP = document.createElement('h2');
  functionP.textContent = career.Function;
  functionElement.appendChild(functionP);
  careersCont.appendChild(functionElement);

  const dateElement = document.createElement('div');
  dateElement.classList.add('date-item');
  const dateP = document.createElement('p');
  dateP.textContent = `${career.datestart} - ${career.dateend}`;
  dateElement.appendChild(dateP);
  careersCont.appendChild(dateElement);

  const companyElement = document.createElement('div');
  companyElement.classList.add('company-item');
  const companyP = document.createElement('p');
  companyP.textContent = career.CompanyName;
  companyElement.appendChild(companyP);
  careersCont.appendChild(companyElement);

  const storyElement = document.createElement('div');
  storyElement.classList.add('story-item');
  const sentences = career.Story.split('. ');
  const ul = document.createElement('ul');
  sentences.forEach(sentence => {
    const li = document.createElement('li');
    li.textContent = sentence;
    ul.appendChild(li);
  });
  storyElement.appendChild(ul);
  careersCont.appendChild(storyElement);
}



// basic navigation careers
function navigateCareers(direction) {
  currentCategoryIndexCareer = (currentCategoryIndexCareer + Object.keys(careersData).length) % Object.keys(careersData).length;
  updateCareers(currentCategoryIndexCareer);
}

// Next and Previous buttons for category navigation
document.querySelector('.careers-next').addEventListener('click', () => {
  currentCategoryIndexCareer = (currentCategoryIndexCareer + 1) % Object.keys(careersData).length;
  updateCareers(currentCategoryIndexCareer);
});

document.querySelector('.careers-prev').addEventListener('click', () => {
  currentCategoryIndexCareer = (currentCategoryIndexCareer - 1 + Object.keys(careersData).length) % Object.keys(careersData).length;
  updateCareers(currentCategoryIndexCareer);
});

// handle swipe movement <> not up/down.
function handleSwipe(container, callback) {
  let xDown = null;
  let yDown = null;

  container.addEventListener('touchstart', e => {
    const firstTouch = e.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  });

  container.addEventListener('touchmove', e => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        callback('left'); // Swipe left
      } else {
        callback('right'); // Swipe right
      }
    }

    xDown = null;
    yDown = null;
  });
}

// Call handleSwipe function for elements
// Function to handle swipe detection for both elements
function handleSwipeForCareers(direction) {
  if (direction === 'left') {
    currentCategoryIndexCareer = (currentCategoryIndexCareer + 1) % Object.keys(careersData).length;
  } else {
    currentCategoryIndexCareer = (currentCategoryIndexCareer - 1 + Object.keys(careersData).length) % Object.keys(careersData).length;
  }

  updateCareers(currentCategoryIndexCareer);
}

// Call handleSwipe function
const careersTogElement = document.querySelector('.careers-tog');
handleSwipe(careersTogElement, handleSwipeForCareers);

const careersContElement = document.querySelector('.careers-cont');
handleSwipe(careersContElement, handleSwipeForCareers);


// Call loadCareers function to initialize
function changeCareersLanguage(language) {
  loadCareers(language);
}

