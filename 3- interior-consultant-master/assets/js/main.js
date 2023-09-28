let bars = document.querySelector('.fa-bars');
let x = document.querySelector('.fa-xmark');
let list = document.querySelector('ul');

bars.addEventListener('click', function () {
    list.classList.add('nav__ul--expanded');
    // bars.style.display = 'none';
    x.style.display = 'block';
})


x.addEventListener('click', function () {
    list.classList.remove('nav__ul--expanded');
    // bars.style.display = 'block';
    x.style.display = 'none';
})
