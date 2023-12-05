function toggleMenu() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

// Variable -> instellen
var menuToggle = document.querySelector('.menu-toggle');
var closeBtn = document.querySelector('.close-btn');
var overlayMenu = document.querySelector('.overlay-menu');

// Overlay Menu weergeven
function showOverlayMenu() {
  overlayMenu.style.display = 'block';
  menuToggle.classList.add('active');
  closeBtn.classList.add('active');
}

// Overlay Menu verbergen
function hideOverlayMenu() {
  overlayMenu.style.display = 'none';
  menuToggle.classList.remove('active');
  closeBtn.classList.remove('active');
}

// Event acties
menuToggle.addEventListener('click', showOverlayMenu);
closeBtn.addEventListener('click', hideOverlayMenu);

// Sluiten hamburger menu buiten x
overlayMenu.addEventListener('click', function (event) {
  if (event.target === overlayMenu) {
    hideOverlayMenu();
  }
});

// Smooth scrolling for anchor links
var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    var offset = target.offsetTop;
    var delay = 1000; /*1 second delay op scrollen (smooth)*/
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
    setTimeout(function () {
      target.focus();
    }, delay);
  });
});