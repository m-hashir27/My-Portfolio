let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                if(links.getAttribute("href").includes(id)){
                    links.classList.add('active');
                    }
            });
        }
    });
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
};

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .project-card, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

// typed js 

const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer', 'Digital Marketer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});