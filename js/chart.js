// Chart
function getPayload (token) {
  var payload = token.split('.')[1]; //pegar a segunda parte do token
  return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
};

const id = getPayload(localStorage.getItem('token')).id;


//RESOLVER QUESTÃO DA PROMISE!!!

async function getValues(){
  await axios
    .get(`http://localhost:3000/api/registers/balance/${id}`)
    .then((res) => {
        const registers = res.data.registers;
        let labels = [];
        let data = [];
        
        for (i in registers) {
          labels.push(registers[i].category);
          data.push(registers[i].value);  
        }

        let values = {labels, data}
        return values
    })
    .catch((err) => console.log(err));
}


let obj = getValues();

console.log(obj);

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: getValues().labels,
      datasets: [{
        label: 'Valor',
        data: getValues().data,
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
