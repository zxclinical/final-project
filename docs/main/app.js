const signUp = e =>{
    let fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        email = document.getElementById("email").value,
        pwd = document.getElementById("pwd").value;
    
    let formData = JSON.parse(localStorage.getItem('formData')) ||  [];

    let exists = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email.toLowerCase() == email.toLowerCase());

    if(!exists){
        formData.push({fname, lname, email, pwd});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.querySelector('fname').focus();
        window.location.href='/docs/login.html'
        alert("Account created\nPlease use the Sign In link");
    }else{
        alert("Error\nSuch account already exists");
    }
    displayData();
    e.preventDefault();
}

function displayData(){
    if (localStorage.getItem('formData')){
        var output = document.querySelector("tbody");
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data=>{
            output.innerHTML += `
                        <tr>
                            <td>${data.fname}</td>
                            <td>${data.lname}</td>
                            <td>${data.email}</td>
                            <td>${data.pwd}</td>
                        </tr>
            `;
        });
    }
}


const signIn = e =>{
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exists = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exists){
        alert('Email or Password are incorrect');
    }
    else{
        alert("Welcome " + email);
        window.location.href='../index.html'
    }
    e.preventDefault();
};
