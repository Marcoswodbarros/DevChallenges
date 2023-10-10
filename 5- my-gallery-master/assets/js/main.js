// Variables
const body = document.querySelector('body');
const sun = document.querySelector('.bi-brightness-high');
const moon = document.querySelector('.bi-moon');


// Events
sun.addEventListener('click', darkMode);
moon.addEventListener('click', brightMode);


// Functions
function darkMode () {
    body.style.backgroundColor = 'black';
    sun.style.display = 'none';
    moon.style.display = 'block';
}

function brightMode () {
    body.style.backgroundColor = 'white';
    sun.style.display = 'block';
    moon.style.display = 'none';
}