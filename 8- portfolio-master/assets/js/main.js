// Variables
const projects = document.querySelector('#projects');
const btnContainer = document.querySelector('.title-chevrons');
const btnUp = document.querySelector('.fa-chevron-up');
const btnDown = document.querySelector('.fa-chevron-down');
const projectsContainer = document.querySelector('.projects__buttons--container');
const react = document.querySelector('.react');
const vue = document.querySelector('.vue');
const responsive = document.querySelector('.responsive');
const projectsProjects = document.querySelector('.projects__container');


// Events
btnUp.addEventListener('click', () => {
    btnContainer.style.marginBottom = '1rem';
    btnUp.style.display = 'none';
    btnDown.style.display = 'block';
    projectsContainer.style.display = 'flex';
    projects.style.height = 'auto';
});

btnDown.addEventListener('click', () => {
    btnContainer.style.marginBottom = '0';
    btnUp.style.display = 'block';
    btnDown.style.display = 'none';
    projectsContainer.style.display = 'none';
    projects.style.height = '';
});

react.addEventListener('click', () => {
    projectsProjects.style.display = 'none';
    projects.style.height = '4063.88px';
});

vue.addEventListener('click', () => {
    projectsProjects.style.display = 'none';
    projects.style.height = '4063.88px';
});

responsive.addEventListener('click', () => {
    projectsProjects.style.display = 'block';
});