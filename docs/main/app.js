const signUp = e => {
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
    e.preventDefault();
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
                        </tr>
            `;
        });
    }
}


const signIn = e => {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exists = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exists) {
        alert('Email or Password are incorrect');
    }
    else {
        alert("Welcome " + email);
        window.location.href = '../index.html'
    }
    e.preventDefault();
};


$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    draggable: true,

    responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4
          }
        },
        {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    
});



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }