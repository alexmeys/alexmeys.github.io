function toggleMenu() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

var menuToggle = document.querySelector('.menu-toggle');
var overlayMenu = document.querySelector('.overlay-menu');

menuToggle.addEventListener('click', function() {
  overlayMenu.style.display = 'block';
});

overlayMenu.addEventListener('click', function() {
  overlayMenu.style.display = 'none';
});

var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    var offset = target.offsetTop;
    var delay = 1000; /* Set the delay time in milliseconds */
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
    setTimeout(function() {
      target.focus();
    }, delay);
  });
});

var menuToggle = document.querySelector('.menu-toggle');
var closeBtn = document.querySelector('.close-btn');
var overlayMenu = document.querySelector('.overlay-menu');

menuToggle.addEventListener('click', function() {
  overlayMenu.style.display = 'block';
  menuToggle.classList.add('active');
  closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', function() {
  overlayMenu.style.display = 'none';
  menuToggle.classList.remove('active');
  closeBtn.classList.remove('active');
});

// Add event listener to close the overlay when clicking outside the menu
overlayMenu.addEventListener('click', function(event) {
  if (event.target === overlayMenu) {
    overlayMenu.style.display = 'none';
    menuToggle.classList.remove('active');
    closeBtn.classList.remove('active');
  }
});