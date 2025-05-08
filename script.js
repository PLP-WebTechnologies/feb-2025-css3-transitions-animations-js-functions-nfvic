// Functions for localStorage operations
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

const btn = document.getElementById('myBtn');

btn.addEventListener('click', () => {
  // Trigger animation
  btn.classList.add('bounce');
  // Store a preference
  savePreference('lastClicked', new Date().toISOString());
});

// Remove animation class after animation ends so it can be triggered again
btn.addEventListener('animationend', () => {
  btn.classList.remove('bounce');
});

// On page load, retrieve and use preference
window.addEventListener('DOMContentLoaded', () => {
  const lastClicked = getPreference('lastClicked');
  if (lastClicked) {
    console.log('Button last clicked at:', lastClicked);
  }
});
