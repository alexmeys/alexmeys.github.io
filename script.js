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