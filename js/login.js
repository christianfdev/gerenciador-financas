
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
            localStorage.setItem(res.data.token, 'token');
            console.log(res.data.token);
            window.location.replace('home.html');
        })
        .catch((err) => console.log(err));
}

loginBtn.addEventListener('click', login);
