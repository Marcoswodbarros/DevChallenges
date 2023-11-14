const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-xmark');
const list = document.querySelector('ul');

function openMenu() {
    x.style.display = 'block';
    bars.style.display = 'none';
    list.style.top = "0";
    list.classList.add('ul__expanded');
    updateIconVisibility();
}

function closeMenu() {
    x.style.display = 'none';
    bars.style.display = 'block';
    list.style.top = "-100%";
    list.classList.remove('ul__expanded');
    updateIconVisibility();
}

function updateIconVisibility() {
    if (window.innerWidth >= 1024 && list.classList.contains('ul__expanded')) {
        closeMenu();
    }

    bars.style.display = window.innerWidth < 1024 && !list.classList.contains('ul__expanded') ? 'block' : 'none';
    x.style.display = window.innerWidth < 1024 && list.classList.contains('ul__expanded') ? 'block' : 'none';
}

bars.addEventListener('click', openMenu);
x.addEventListener('click', closeMenu);
window.addEventListener('resize', updateIconVisibility);

// Chamando a função inicialmente para definir a visibilidade correta dos ícones
updateIconVisibility();
