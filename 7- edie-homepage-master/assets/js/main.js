// Variables
const bar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const nav = document.querySelector('ul');


// Functions
function showMenu() {
    nav.classList.add('ul__expanded');
    bar.style.display = 'none';
    xmark.style.display = 'block';
}

function hideMenu() {
    nav.classList.remove('ul__expanded');
    xmark.style.display = 'none';
    bar.style.display = 'block';
}


// Events
bar.addEventListener('click', showMenu);
xmark.addEventListener('click', hideMenu);