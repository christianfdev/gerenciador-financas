function getPayload (token) {
    var payload = token.split('.')[1]; //pegar a segunda parte do token
    return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
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
        .then(res => console.log(res))
        .catch(err => console.log(err));

    
    console.log(register)
}

formBtn.addEventListener('click', register);