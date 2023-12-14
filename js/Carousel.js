// Updated populateCarousel function to fetch external JSON data
function populateCarousel(containerId) {
  const carousel = document.querySelector(`#${containerId} .carousel`);

  fetch('./tl/careerD_US.json')
    .then(response => response.json())
    .then(data => {
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

      function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
      }

      function showPrevious() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
      }
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON file', error);
    });
}

// Call the populateCarousel to fill in the data
populateCarousel('career-content');
