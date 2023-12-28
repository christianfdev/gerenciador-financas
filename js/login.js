const loginBtn = document.getElementById('login-btn');

async function login(e){
    e.preventDefault();

    let login = document.getElementById('login');
    let password = document.getElementById('password');

    let credentials = {
        username: login.value,
        password: password.value
    }

    await axios
        .post('http://localhost:3000/api/login', credentials)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            console.log(res.data.token);
            window.location.replace('home.html');
        })
        .catch((err) => {
            console.log(err);
            alert("Login/Senha Incorretos! Verifique e tente novamente!");
        });
}

loginBtn.addEventListener('click', login);
