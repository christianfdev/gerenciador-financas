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
