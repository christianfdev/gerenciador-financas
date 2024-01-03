

const btnExit = document.getElementById("exit");

function exit(){
    localStorage.clear();
    window.location.replace('./index.html');    
}

btnExit.addEventListener('click', exit);