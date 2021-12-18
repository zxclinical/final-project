const form = document.getElementById("registration-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const guestElements = document.querySelectorAll('.guest');
const userElements = document.querySelectorAll('.user');

let isFormValid = true;

document.addEventListener('DOMContentLoaded', e => {
    const isLoggedIn = +(localStorage.getItem('loggedIn')) === 1;

    if (isLoggedIn) {
        guestElements.forEach(element => element.style.display = 'none');
        userElements.forEach(element => element.style.display = 'block');
    }
});

// Новое событие на logout
// Удалить loggedIn из localStorage
// Редирект

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (! checkInput()) {
        return;
    }

    signUp();
});

function checkInput() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();

    if (fnameValue === "") {
        setErrorFor(fname, 'First name cannot be blank');
    } else {
        setSuccessFor(fname);
    }

    if (lnameValue === "") {
        setErrorFor(lname, 'First name cannot be blank');
    } else {
        setSuccessFor(lname);
    }

    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (pwdValue === "") {
        setErrorFor(pwd, 'First name cannot be blank');
    } else if (pwdValue.length > 15){
        setErrorFor(pwd, 'Password length should be less than 15 characters');
    } else if (pwdValue.length < 8){
        setErrorFor(pwd, 'Password length should be at least 8 charachter');
    }
     else {
        setSuccessFor(pwd);
    }

    return isFormValid;
}

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

function checkEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const signUp = () => {
    let fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        email = document.getElementById("email").value,
        pwd = document.getElementById("pwd").value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exists = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.email.toLowerCase() == email.toLowerCase());

    if (!exists) {
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.querySelector('fname').focus();
        window.location.href = '/docs/login.html'
        alert("Account created\nPlease use the Sign In link");
    } else {
        alert("Error\nSuch account already exists");
    }
    displayData();
}

function displayData() {
    if (localStorage.getItem('formData')) {
        var output = document.querySelector("tbody");
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                        <tr>
                            <td>${data.fname}</td>
                            <td>${data.lname}</td>
                            <td>${data.email}</td>
                            <td>${data.pwd}</td>
                            <td><button onclick="deleteUser('${data.email}')">Delete</button></td>
                        </tr>
            `;
        });
    }
}


const signIn = () => {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exists = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exists) {
        alert('Email or Password are incorrect');
    }
    else {
        alert("Welcome " + email);
        localStorage.setItem('loggedIn', 1);
        window.location.href = 'index.html'
    }
};


$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    draggable: true,
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}