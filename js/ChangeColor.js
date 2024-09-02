//ChangeTheLights
function setLightTheme() {
  document.body.classList.remove('dark-theme', 'fun-theme', 'blue-theme');
  document.body.classList.add('light-theme');
  hideOverlayMenu();
}

function setDarkTheme() {
  document.body.classList.remove('light-theme', 'fun-theme', 'blue-theme');
  document.body.classList.add('dark-theme');
  hideOverlayMenu();
}

function setFunTheme() {
  document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
  document.body.classList.add('fun-theme');
  hideOverlayMenu();
}

function setBlueTheme() {
  document.body.classList.remove('light-theme', 'dark-theme', 'fun-theme');
  document.body.classList.add('blue-theme');
  hideOverlayMenu();
}