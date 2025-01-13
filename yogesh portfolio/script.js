//header section------------------------------------------------------------------------------------------------------
const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');



menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')){
            
            let str = String(link.childNodes[0].data)
            const payload = `${str.toLowerCase()}`
            var children = [].slice.call(document.getElementsByClassName(payload));
            let childNodes = children[0].children
            let arr = []
            for(let i = 0; i<childNodes.length; i++){
                arr.push(childNodes[i].classList["value"])
            }
            console.log(arr)
            arr.forEach((ele) => {
                const load = `.${ele}`
                ScrollReveal().reveal(load, { origin: 'top' });
            })

            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 0)
        }
    });
});

/* navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 50)
        }
    });
});

*/

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 50)
    }
});

//project section----------------------------------------------------------------------------------------------------
const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;

const activeProject = () => {
    const imgSlide = document.querySelector('.project-carousel .img-slide');
    const projectDetails = document.querySelectorAll('.project-detail'); 

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    projectDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 1) {// -1 number to else index number
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 2;// where you want to disabled right click 
        arrowRight.classList.add('disabled');
    }

    activeProject();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeProject();
});

// contact section----------------------------------------------------------------------------------------------------
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yogeshrakoti01@gmail.com",
        Password : "8E567BB643A0766E8F7D1FFD54A378EAA644",
        To : 'yogeshrakoti01@gmail.com',
        From : "yogeshrakoti01@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    form.reset();
    return false;
});


// scroll reveal---------------------------------------------------------------------------------------------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-detail', { origin: 'top' });

/*
ScrollReveal().reveal('.skills-container', { origin: 'bottom' });
ScrollReveal().reveal('.btn-sci, .img-about, .tech, .live-github, .contact-detail, .home-detail h1, .home-detail h2', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
*/