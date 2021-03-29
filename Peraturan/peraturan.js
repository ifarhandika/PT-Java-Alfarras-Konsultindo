// Hide Navbar whhen Scroll Down -----------------------------------------------------------------

let navbar = document.querySelector('header');
let scrollPrev = window.pageYOffset;

window.onscroll = function(){
    let scrollCurrent = window.pageYOffset;
    if(scrollPrev > scrollCurrent){
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "-100px";
    }
    scrollPrev = scrollCurrent;
}

// Navbar Responsive -----------------------------------------------------------------

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        //Animation link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
        
        
    });
}

navSlide();