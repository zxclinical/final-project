const form = document.getElementById("registration-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");

let isFormValid = true;



form.addEventListener("submit", (e) => {
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
        setErrorFor(lname, 'Last name cannot be blank');
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
        setErrorFor(pwd, 'Password cannot be blank');
    } else if (pwdValue.length > 20){
        setErrorFor(pwd, 'Password length should be less than 20 characters');
    } else if (pwdValue.length < 8){
        setErrorFor(pwd, 'Password length should be at least 8 charachter');
    } else if (!checkPwd(pwdValue)){
        setErrorFor(pwd, 'Password should contain at least 1 digit, 1 lower case, 1 upper case letter');
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
function checkPwd(pwd){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(pwd);
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
        isFormValid = true;
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        alert("Account is created, you may now Sign In");
        window.location.href = 'login.html';
    } else {
        alert("Error\nSuch account already exists");
        setErrorFor(document.getElementById('email'), 'Such email is already registered');
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