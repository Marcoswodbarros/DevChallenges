let bars = document.querySelector('.fa-bars');
let x = document.querySelector('.fa-xmark');
let list = document.querySelector('ul');

bars.addEventListener('click', function () {
    list.classList.add('nav__ul--expanded');
    bars.style.display = 'none';
    x.style.display = 'block';
});

x.addEventListener('click', function () {
    list.classList.remove('nav__ul--expanded');
    bars.style.display = 'block';
    x.style.display = 'none';
});

// Função para atualizar a visibilidade dos ícones com base na largura da tela.
function updateIconVisibility() {
    if (window.innerWidth >= 1024) {
        // Se a largura da tela for maior ou igual a 1024px, oculte ambos os ícones.
        bars.style.display = 'none';
        x.style.display = 'none';

        // Verifique se o menu está expandido e, se estiver, feche-o.
        if (list.classList.contains('nav__ul--expanded')) {
            list.classList.remove('nav__ul--expanded');
        }
    } else {
        // Caso contrário, mostre o ícone "bars" se o menu não estiver expandido,
        // caso contrário, mostre o ícone "x".
        if (!list.classList.contains('nav__ul--expanded')) {
            bars.style.display = 'block';
            x.style.display = 'none';
        } else {
            bars.style.display = 'none';
            x.style.display = 'block';
        }
    }
}

// Adicione um ouvinte de evento de redimensionamento.
window.addEventListener('resize', updateIconVisibility);

// Chame a função inicialmente para definir a visibilidade correta dos ícones.
updateIconVisibility();

