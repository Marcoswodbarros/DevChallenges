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

function updateIconVisibility() {
    if (window.innerWidth >= 1024 && nav.classList.contains('ul__expanded')) {
        hideMenu();
    }

    bar.style.display = window.innerWidth < 1024 && !nav.classList.contains('ul__expanded') ? 'block' : 'none';
    xmark.style.display = window.innerWidth < 1024 && nav.classList.contains('ul__expanded') ? 'block' : 'none';
}


// Events
bar.addEventListener('click', showMenu);
xmark.addEventListener('click', hideMenu);
window.addEventListener('resize', updateIconVisibility);

// Chamando a função inicialmente para definir a visibilidade correta dos ícones
updateIconVisibility();