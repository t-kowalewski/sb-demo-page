// Hide menu after link click for one-page website

// Select DOM items
const navLink = document.querySelectorAll('.navigation__item');
const checkbox = document.querySelector('.navigation__checkbox');

// Add Event Listener to every nav link
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', checkboxOff);
}

// Uncheck checkbox
function checkboxOff() {
  checkbox.checked = false;
}