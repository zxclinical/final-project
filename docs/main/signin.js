const email = document.getElementById("email");
const pwd = document.getElementById("pwd");


function setErrorFor(input, message) {
    isFormValid = false;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerHTML = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

const signIn = () => {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exists = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exists) {
        setErrorFor(document.getElementById('email'), '');
        setErrorFor(document.getElementById('pwd'), 'Email or password are incorrect');
    }
    else if (exists && pwd=="adminadmin"){
        alert("Welcome " + email);
        setSuccessFor(document.getElementById('email'));
        setSuccessFor(document.getElementById('pwd'));
        localStorage.setItem('loggedIn', 2);
        window.location.href = 'admin.html';
    }
    else {
        alert("Welcome " + email);
        setSuccessFor(document.getElementById('email'));
        setSuccessFor(document.getElementById('pwd'));
        localStorage.setItem('loggedIn', 1);
        window.location.href = 'index.html';
    }
};