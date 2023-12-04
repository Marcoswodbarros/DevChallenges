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
btnDown.addEventListener('click', () => {
    btnContainer.style.marginBottom = '1rem';
    btnUp.style.display = 'block';
    btnDown.style.display = 'none';
    projectsContainer.style.display = 'flex';
    projects.style.height = 'auto';
});

btnUp.addEventListener('click', () => {
    btnContainer.style.marginBottom = '0';
    btnUp.style.display = 'none';
    btnDown.style.display = 'block';
    projectsContainer.style.display = 'none';
    projects.style.height = '';
});

react.addEventListener('click', () => {
    projectsProjects.style.display = 'none';
    projects.style.height = 'auto';
    react.style.backgroundColor = '#2F80ED';
    react.style.color = 'white';
    vue.style.backgroundColor = '';
    vue.style.color = '';
    responsive.style.backgroundColor = '';
    responsive.style.color = '';
});

vue.addEventListener('click', () => {
    projectsProjects.style.display = 'none';
    projects.style.height = 'auto';
    react.style.backgroundColor = '';
    react.style.color = '';
    vue.style.backgroundColor = '#2F80ED';
    vue.style.color = 'white';
    responsive.style.backgroundColor = '';
    responsive.style.color = '';
});

responsive.addEventListener('click', () => {
    projectsProjects.style.display = 'flex';
    projects.style.height = 'auto';
    react.style.backgroundColor = '';
    react.style.color = '';
    vue.style.backgroundColor = '';
    vue.style.color = '';
    responsive.style.backgroundColor = '#2F80ED';
    responsive.style.color = 'white';
});

