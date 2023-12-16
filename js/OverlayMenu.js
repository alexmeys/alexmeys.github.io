/* Menu toggle acties */
function toggleMenu() {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}

var menuToggle = document.querySelector('.menu-toggle');
var closeBtn = document.querySelector('.close-btn');
var overlayMenu = document.querySelector('.overlay-menu');

function toggleOverlayMenu() {
  overlayMenu.style.display === 'block' ? hideOverlayMenu() : showOverlayMenu();
}

function showOverlayMenu() {
  overlayMenu.style.display = 'block';
  menuToggle.classList.add('active');
  closeBtn.classList.add('active');
  document.body.style.overflow = 'hidden'; // Disable body scroll
}

function hideOverlayMenu() {
  overlayMenu.style.display = 'none';
  menuToggle.classList.remove('active');
  closeBtn.classList.remove('active');
  document.body.style.overflow = ''; // Enable body scroll
}

menuToggle.addEventListener('click', toggleOverlayMenu);
closeBtn.addEventListener('click', hideOverlayMenu);

overlayMenu.addEventListener('click', function (event) {
  if (event.target === overlayMenu) {
    hideOverlayMenu();
  }
});
// Smooth scrolling
var overlayLinks = document.querySelectorAll('.overlay-menu a[href^="#"]');

overlayLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var targetId = this.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      var offset = targetSection.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    hideOverlayMenu();
  });
});

