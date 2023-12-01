function listar() {
    axios
        .get(`http://localhost:3000/api/registers`)
        .then((response) => {
            const registers = response.data;

            let lista = document.getElementById('lista');

            for (i in registers) {
                console.log(registers[i]);

                let element = document.createElement("li");

                element.innerHTML = JSON.stringify(registers[i].value);

                lista.appendChild(element);
            }
        })
        .catch((err) => console.log(err));
}

const button = document.getElementById("listbtn");

button.addEventListener('click', listar);