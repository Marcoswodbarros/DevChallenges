function showMenu () {
    let openMenu = document.querySelector('.fa-bars');
    let closeMenu = document.querySelector('.fa-xmark');
    let ul = document.querySelector('ul');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');

    if (ul.classList.contains('nav__ul--expanded')) {
        ul.classList.remove('nav__ul--expanded');
        main.classList.remove('main__menu--expanded');
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        
    } else {
        ul.classList.add('nav__ul--expanded');
        main.classList.add('main__menu--expanded');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';    
    }
}
