// array of data -> user filling
const careerData = [
  {
    Function: 'random role2',
    datestart: 'January 2022',
    dateend: 'present',
    CompanyName: 'ABC Company',
	Story: 'the story is loonnngggg soo looong, i did a lot of blablabl the story is loonnngggg soo looong,  blablabl the story is loonnngggg soo looong,stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl the story is loonnngggg soo looong, i did a lot of stuff balblablablabl'
  },
  {
    Function: 'random role',
    datestart: 'January 2020',
    dateend: 'December 2022',
    CompanyName: 'ABC Company',
	Story: 'the story is loonnngggg soo looong, i did a lot of stuff balblablablabl'
  },
  {
    Function: 'PC Repair & Servicedesk',
    datestart: 'January 2018',
    dateend: 'December 2020',
    CompanyName: 'ABC Company',
	Story: 'the story is loonnngggg soo looong, i did a lot of stuff balblablablabl'
  },
  // file?
];

// populate carousel -> machine filling
function populateCarousel(containerId, data) {
  const carousel = document.querySelector(`#${containerId} .carousel`);
  

  data.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    if (index === 0) {
      carouselItem.classList.add('active');
    }
	
	// For careerData
    contentHTML = `
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
		  <span class="carousel-mark">${index + 1}/${data.length}</span>
	    </div>
	  </div>
    `;

	carouselItem.innerHTML = contentHTML;
    carousel.appendChild(carouselItem);
	
	const infoDate = carouselItem.querySelector('.carousel-info p:nth-child(1)');
	const infoText = carouselItem.querySelector('.carousel-info p:nth-child(2)');
	const infoStory = carouselItem.querySelector('.carousel-story p:nth-child(1)');
	if (item.dateend.toLowerCase() === 'current' || item.dateend.toLowerCase() === 'present') {
	  infoText.style.color = '#fff';
	  infoDate.style.color = '#fff';
	  infoStory.style.color = '#fff';
	} else {
	  infoText.style.color = '#ccc';
	  infoDate.style.color = '#ccc';
	  infoStory.style.color = '#ccc';
	}
	
  });

  const items = carousel.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  
  // Show the items (increment/decrement)
  function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  //show next
  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }
  // show previous
  function showPrevious() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }
}
// fill out the visual data
populateCarousel('career-content', careerData);

