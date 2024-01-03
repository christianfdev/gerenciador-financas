// Menu Mobile Animação

const menuButton = document.getElementById('button-menu');
const menuMob = document.getElementById('menu-mobile');

function activeMenu() {
    menuButton.classList.toggle('button-active');
    menuMob.classList.toggle('active');
    menuMob.classList.toggle('disabled');
}

menuButton.addEventListener('click', activeMenu);

