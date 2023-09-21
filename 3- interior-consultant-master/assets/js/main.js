function showMenu () {
    let openMenu = document.querySelector('.fa-bars');
    let closeMenu = document.querySelector('.fa-xmark');
    let ul = document.querySelector('ul');

    if (ul.classList.contains('nav__ul--expanded')) {
        ul.classList.remove('nav__ul--expanded');
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        
    } else {
        ul.classList.add('nav__ul--expanded');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';

    }
}


