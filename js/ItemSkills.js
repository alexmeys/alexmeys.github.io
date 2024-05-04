// var's for storing and index
let skillsData; 
let currentCategoryIndex = 0; 

// Loading Skills
function loadSkills(language) {
  const skillsFileNames = {
    en: 'skillsD_EN.json',
	nl: 'skillsD_NL.json',
	fr: 'skillsD_FR.json',
	pl: 'skillsD_PL.json',
  };

  const fileName = skillsFileNames[language] || 'skillsD_EN.json'; 

  fetch(`./tl/skills/${fileName}`)
    .then(response => response.json())
    .then(data => {
      skillsData = data;
      updateSkills(currentCategoryIndex);
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON file for skills', error);
    });
}

// Update Skills based on current category index
function updateSkills(categoryIndex) {
  const skillsTitle = document.querySelector('.skills-title');
  const skillsColumns = document.querySelector('.skills-cont');

  skillsTitle.innerHTML = '';
  skillsColumns.innerHTML = '';

  const categoryNames = Object.keys(skillsData);
  const categoryName = categoryNames[categoryIndex];
  const skills = skillsData[categoryName];
  const values = Object.values(skills);

  const titleElement = document.createElement('h2');
  titleElement.textContent = categoryName;
  skillsTitle.appendChild(titleElement);

  const column1 = document.createElement('div');
  column1.classList.add('column');

  const column2 = document.createElement('div');
  column2.classList.add('column');

  const midpoint = Math.ceil(values.length / 2);

  for (let i = 0; i < values.length; i++) {
    const valueElement = document.createElement('p');
    valueElement.textContent = values[i];

    if (i < midpoint) {
      valueElement.classList.add('fade-in-stuff');
      column1.appendChild(valueElement);
    } else {
      valueElement.classList.add('fade-in-stuff');
      column2.appendChild(valueElement);
    }
  }

  skillsColumns.appendChild(column1);
  skillsColumns.appendChild(column2);
}



// basic navigation skills
function navigateSkills(direction) {
  currentCategoryIndex = (currentCategoryIndex + Object.keys(skillsData).length) % Object.keys(skillsData).length;
  updateSkills(currentCategoryIndex);
}

// Next and Previous buttons for category navigation
document.querySelector('.skills-next').addEventListener('click', () => {
  currentCategoryIndex = (currentCategoryIndex + 1) % Object.keys(skillsData).length;
  updateSkills(currentCategoryIndex);
});

document.querySelector('.skills-prev').addEventListener('click', () => {
  currentCategoryIndex = (currentCategoryIndex - 1 + Object.keys(skillsData).length) % Object.keys(skillsData).length;
  updateSkills(currentCategoryIndex);
});

// handle swipe movement < > not up/down
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
function handleSwipeForSkills(direction) {
  if (direction === 'left') {
    currentCategoryIndex = (currentCategoryIndex + 1) % Object.keys(skillsData).length;
  } else {
    currentCategoryIndex = (currentCategoryIndex - 1 + Object.keys(skillsData).length) % Object.keys(skillsData).length;
  }

  updateSkills(currentCategoryIndex);
}

// Call handleSwipe function
const skillsTogElement = document.querySelector('.skills-tog');
handleSwipe(skillsTogElement, handleSwipeForSkills);

const skillsContElement = document.querySelector('.skills-cont');
handleSwipe(skillsContElement, handleSwipeForSkills);


// Call loadSkills function to initialize
function changeSkillsLanguage(language) {
  loadSkills(language);
}

