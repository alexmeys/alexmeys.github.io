//ChangeTheLights
function setLightTheme() {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  hideOverlayMenu();
}

function setDarkTheme() {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  hideOverlayMenu();
}