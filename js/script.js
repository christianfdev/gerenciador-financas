/*
  Inicialmente todos em um arquivo, mas apenas enquanto está sendo desenvolvido
  o Front-End da aplicação. Assim que o Back-End começar a ser desenvolvido será
  realizada uma divisão melhor dos arquivos.
*/

// Menu Mobile Animação

const menuButton = document.getElementById('button-menu');
const menuMob = document.getElementById('menu-mobile');

function activeMenu() {
    menuButton.classList.toggle('button-active');
    menuMob.classList.toggle('active');
    menuMob.classList.toggle('disabled');
}

menuButton.addEventListener('click', activeMenu);


//Register 

function register(){
  alert('Registro Realizado com Sucesso!');
}