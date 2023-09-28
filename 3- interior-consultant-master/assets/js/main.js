const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-xmark');
const list = document.querySelector('ul');

function openMenu() {
    list.classList.add('nav__ul--expanded');
    updateIconVisibility();
}

function closeMenu() {
    list.classList.remove('nav__ul--expanded');
    updateIconVisibility();
}

function updateIconVisibility() {
    if (window.innerWidth >= 1024 && list.classList.contains('nav__ul--expanded')) {
        closeMenu();
    }

    bars.style.display = window.innerWidth < 1024 && !list.classList.contains('nav__ul--expanded') ? 'block' : 'none';
    x.style.display = window.innerWidth < 1024 && list.classList.contains('nav__ul--expanded') ? 'block' : 'none';
}

bars.addEventListener('click', openMenu);
x.addEventListener('click', closeMenu);
window.addEventListener('resize', updateIconVisibility);

// Chamando a função inicialmente para definir a visibilidade correta dos ícones
updateIconVisibility();

