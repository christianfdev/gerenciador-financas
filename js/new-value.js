function getPayload (token) {
    var payload = token.split('.')[1]; 
    return JSON.parse(window.atob(payload));
};

const userId = getPayload(localStorage.getItem('token')).id;

const formBtn = document.getElementById('formBtn');
let type = document.getElementById('type');
let category = document.getElementById('category');
let value = document.getElementById('value');
let date = document.getElementById('date');

async function register(e){
    e.preventDefault();

    let register = {
        type: type.value,
        category: category.value,
        value: value.value,
        date: date.value,
        userId
    }

    await axios
        .post(`http://localhost:3000/api/registers`, register)
        .then(res => {
            // A ideia é implementar uma pop-up perguntando se o usuário pretende adicionar mais algum registro
            // Caso não, redirecionar como está agora.
            console.log(res);
            if(confirm('Registro adicionado com sucesso!\n Para adicionar outro clique em OK')){
                type.value = '';
                category.value = '';
                value.value = '';
                date.value = '';
            }else {
                window.location.replace('./home.html');
            }
        })    
        .catch(err => console.log(err));
}

formBtn.addEventListener('click', register);