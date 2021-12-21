
const guestElements = document.querySelectorAll('.guest');
const userElements = document.querySelectorAll('.user');
const adminElements = document.querySelectorAll('.admin');
const logOutButton = document.getElementById('sign-out');

document.addEventListener('DOMContentLoaded', e => {
    const isLoggedIn = +(localStorage.getItem('loggedIn')) === 1;
    const isAdminLoggedIn = +(localStorage.getItem('loggedIn')) === 2;

    if (isLoggedIn) {
        guestElements.forEach(element => element.style.display = 'none');
        userElements.forEach(element => element.style.display = 'inline-block');
    }
    if (isAdminLoggedIn) {
        guestElements.forEach(element => element.style.display = 'none');
        userElements.forEach(element => element.style.display = 'inline-block');
        adminElements.forEach(element => element.style.display = "inline-block");
    }
});
function logOut() {
    localStorage.removeItem('loggedIn', 1);
    if (!localStorage.getItem('logedIn')) {
        if (confirm('Are you sure you want to log out?')) {
            guestElements.forEach(element => element.style.display = 'inline-block');
            userElements.forEach(element => element.style.display = 'none');
            window.location.href = "login.html";
        }

    }
}

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
            breakpoint: 540,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
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

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}