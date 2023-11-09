const bar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');

bar.addEventListener('click', () => {
    bar.style.display = 'none';
    xmark.style.display = 'block';
});

xmark.addEventListener('click', () => {
    xmark.style.display = 'none';
    bar.style.display = 'block';
})