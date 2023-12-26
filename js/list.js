function getPayload (token) {
    var payload = token.split('.')[1]; //pegar a segunda parte do token
    return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
};

const userId = getPayload(localStorage.getItem('token')).id;

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log(months[new Date().getMonth()]);



function listar() {
    axios
        .get(`http://localhost:3000/api/registers/balance/${userId}`)
        .then((res) => {
            const registers = res.data.registers;

            let title = document.getElementById("card-title");
            let entries = document.getElementById("entries");
            let debts = document.getElementById("debts");
            
            let balance = document.getElementById("balance");

            for (i in registers) {

                let tr = document.createElement("tr");
                let tdCategory = document.createElement("td");
                tdCategory.innerHTML = registers[i].category;
                tdCategory.classList.add("bold");
                let tdValue = document.createElement("td");
                tdValue.innerHTML = registers[i].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
                
                tr.appendChild(tdCategory);
                tr.appendChild(tdValue);

                
                JSON.stringify(registers[i].type).includes("entrada")
                    ? entries.appendChild(tr)
                    : debts.appendChild(tr)

                
            }
            balance.innerHTML += res.data.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); ;
        })
        .catch((err) => console.log(err));
}


listar();