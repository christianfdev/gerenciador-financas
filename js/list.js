function getPayload(token) {
    var payload = token.split('.')[1]; 
    return JSON.parse(window.atob(payload)); 
};

const userId = getPayload(localStorage.getItem('token')).id;

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function listar() {
    axios
        .get(`http://localhost:3000/api/registers/balance/${userId}/${new Date().getFullYear()}-${Number(new Date().getMonth())+1}`)
        .then((res) => {
            const registers = res.data.registers;

            let title = document.getElementById("card-title");
            title.innerHTML = months[res.data.month];

            let entries = document.getElementById("entries");
            let debts = document.getElementById("debts");
            let balance = document.getElementById("balance");

            for (i in registers) {

                let tr = document.createElement("tr");
                let tdCategory = document.createElement("td");
                tdCategory.innerHTML = registers[i].category;
                tdCategory.classList.add("bold");
                let tdValue = document.createElement("td");
                tdValue.innerHTML = registers[i].value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                tr.appendChild(tdCategory);
                tr.appendChild(tdValue);

                JSON.stringify(registers[i].type).includes("entrada")
                    ? entries.appendChild(tr)
                    : debts.appendChild(tr)
            }
            balance.innerHTML += res.data.balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });;
        })
        .catch((err) => console.log(err));
}


listar();


// CHART

const ctx = document.getElementById('myChart');


// Ainda retornando os valores gerais
// A ideia inicial é apenas retornar os gastos nesse chart

let create = async function createChart() {
    await axios
        .get(`http://localhost:3000/api/registers/balance/${userId}/${new Date().getFullYear()}-${Number(new Date().getMonth())+1}`)
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
                                    text: `Finanças de ${months[res.data.month]}`,
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