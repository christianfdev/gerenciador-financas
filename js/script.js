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

// Chart


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Aluguel', 'Compras', 'Dízimo', 'Fornecedores', 'Lanches', 'Lazer'],
      datasets: [{
        label: 'Valor',
        data: [1000, 760, 1000, 6760, 460, 500],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
            display: true,
            text: "Novembro Gastos",
            color: "#000"
        }
      }
    }
  });


//Register 

function register(){
  alert('Registro Realizado com Sucesso!');
}