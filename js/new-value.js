function getPayload (token) {
    var payload = token.split('.')[1]; 
    return JSON.parse(window.atob(payload));
};

const userId = getPayload(localStorage.getItem('token')).id;


const formBtn = document.getElementById('formBtn');

async function register(e){
    e.preventDefault();

    let register = {
        type: document.getElementById('type').value,
        category: document.getElementById('category').value,
        value: document.getElementById('value').value,
        date: document.getElementById('date').value,
        userId
    }

    await axios
        .post(`http://localhost:3000/api/registers`, register)
        .then(res => {
            // A ideia é implementar uma pop-up perguntando se o usuário pretende adicionar mais algum registro
            // Caso não, redirecionar como está agora.
            console.log(res);
            window.location.replace('./home.html');
        })    
        .catch(err => console.log(err));
}

formBtn.addEventListener('click', register);