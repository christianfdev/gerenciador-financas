function getPayload(token) {
  var payload = token.split('.')[1]; //pegar a segunda parte do token
  return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
};

const id = getPayload(localStorage.getItem('token')).id;

// Chart

//RESOLVER QUESTÃO DA PROMISE!!!

const ctx = document.getElementById('myChart');


let obj = async function getValues() {
  await axios
    .get(`http://localhost:3000/api/registers/balance/${id}/${new Date().getMonth()}`)
    .then((res) => {


      const registers = res.data.registers;
      let labels = [];
      let data = [];

      for (i = 0; i < registers.length; i++) {
        labels.push(registers[i].category);
        data.push(registers[i].value);

        if (i === registers.length - 1) {
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                label: 'Valor',
                data: data,
                borderWidth: 1
              }]
            },
            options: {
              plugins: {
                title: {
                  display: true,
                  text: "Dezembro Gastos",
                  color: "#000"
                }
              }
            }
          });
        }
      }

    })
    .catch((err) => console.log(err));
}()






