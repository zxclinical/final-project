const signUp = e => {
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exists = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == document.getElementById('email').value.toLowerCase())
    if (!exists) {
        formData.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        dispData();
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
    }else{
        alert("Error\nsuch email is already in use")
    }
    e.preventDefault();
}
function dispData() {
    if (localStorage.getItem('formData')) {
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.fname}</td>
                        <td>${data.lname}</td>
                        <td>${data.email}</td>
                        <td>${data.password}</td>
                    </tr>
                    `;
        });
    }
}
dispData();