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

function deleteUser(email) {
    if (confirm('Are you sure you want to delete this account?')) {
        const users = JSON.parse(localStorage.getItem('formData'));
        const user = users.find(data => data.email == email);

        const index = users.indexOf(user);

        delete (users[index]);

        localStorage.setItem('formData', JSON.stringify(users.filter(user => user !== null)));

        displayData();
    }
}