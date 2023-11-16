// Variables
const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-xmark');
const list = document.querySelector('ul');


// Functions
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


// Events
bars.addEventListener('click', openMenu);
x.addEventListener('click', closeMenu);
window.addEventListener('resize', updateIconVisibility);

// Chamando a função inicialmente para definir a visibilidade correta dos ícones
updateIconVisibility();





// Button (Second Section) hover
const buttons = document.querySelectorAll('.buttonJs');

buttons.forEach(function (button, index) {
    const texts = document.querySelectorAll('.getStarted');

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#27AE60';
        button.style.transition = '.7s';
        texts[index].style.color = '#FFFFFF';
        texts[index].style.transition = '.7s';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
        texts[index].style.color = '';
        texts[index].style.transition = '';
    });
});

