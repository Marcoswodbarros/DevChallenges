const btnContainer = document.querySelector('.title-chevrons');
const btnUp = document.querySelector('.fa-chevron-up');
const btnDown = document.querySelector('.fa-chevron-down');
const projectsContainer = document.querySelector('.projects__buttons--container');

btnUp.addEventListener('click', () => {
    btnContainer.style.marginBottom = '1rem';
    btnUp.style.display = 'none';
    btnDown.style.display = 'block';
    projectsContainer.style.display = 'flex';
});

btnDown.addEventListener('click', () => {
    btnContainer.style.marginBottom = '0';
    btnUp.style.display = 'block';
    btnDown.style.display = 'none';
    projectsContainer.style.display = 'none';
});