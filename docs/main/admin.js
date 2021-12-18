function deleteUser(email) {
    const users = JSON.parse(localStorage.getItem('formData'));
    const user = users.find(data => data.email == email);

    const index = users.indexOf(user);

    delete(users[index]);

    localStorage.setItem('formData', JSON.stringify(users.filter(user => user !== null)));

    displayData();
}