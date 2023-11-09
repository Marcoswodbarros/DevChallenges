// Variables
const bar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const nav = document.querySelector('nav');





// Functions
function showMenu() {
    nav.classList.add('ul__expanded');

}

function hideMenu() {
    nav.classList.remove('ul__expanded');

}

// Events
bar.addEventListener('click', showMenu);
xmark.addEventListener('click', hideMenu);