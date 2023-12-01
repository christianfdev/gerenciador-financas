

function listBills() {
    axios
        .get(`http://localhost:3000/api/registers`)
        .then((res) => {
            const registers = res.data;

            let entries = document.getElementById("entries");
            let debts = document.getElementById("debts");

            for (i in registers) {
                console.log(registers[i]);

                let element = document.createElement("li");
                element.innerHTML = registers[i].type;

                registers[i].type === "gastos"
                    ? entries.appendChild(element)
                    : debts.appendChild(element)
            }
        })
}



listBills();
