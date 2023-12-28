const btn = document.getElementById("formBtn");

function select(e){
    e.preventDefault();

    if(document.getElementById("date").value){
        localStorage.setItem("date", document.getElementById("date").value);
        window.location.replace('./bills.html');
    }
}

btn.addEventListener('click', select);