function getPayload(token) {
    var payload = token.split('.')[1];
    return JSON.parse(window.atob(payload));
};

const userId = getPayload(localStorage.getItem('token')).id;

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


function listBills() {
    axios
        .get(`http://localhost:3000/api/registers/all/${userId}/${localStorage.getItem("date")}`)
        .then((res) => {
            const registers = res.data;
            let entriesInfo = document.getElementById("entriesInfo");
            let debtsInfo = document.getElementById("debtsInfo");
            const title = document.getElementById("title");
            title.innerHTML += months[parseInt(localStorage.getItem("date").split('-')[1]) - 1];

            if (registers) {  
                for (i in registers) {
                    let tr = document.createElement("tr");
                    let tdCategory = document.createElement("td");
                    tdCategory.innerHTML = registers[i].category;
                    let tdValue = document.createElement("td");
                    tdValue.innerHTML = registers[i].value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                    let tdDate = document.createElement("td");
                    tdDate.innerHTML = registers[i].date.split('-')[2];

                    tr.appendChild(tdCategory);
                    tr.appendChild(tdValue);
                    tr.appendChild(tdDate);

                    JSON.stringify(registers[i].type).includes("entrada")
                        ? entriesInfo.appendChild(tr)
                        : debtsInfo.appendChild(tr)
                }
            }
        }).catch((err) => console.log(err))
}

listBills();
