// Opening Animation -----------------------------------------------------------------

// const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// tl.to('.text', {y: '0%', duration: 1, stagger: 0.20});
// tl.to('.intro', {y: '-100%', duration: 1, delay: 0.5});
// tl.fromTo('.navbar', {opacity: 0}, {opacity: 1, duration: 1});
// tl.fromTo('.main-hero', {opacity: 0}, {opacity: 1, duration: 1}, '-=0.75');

// Sticky Scroll Header -----------------------------------------------------------------

// window.addEventListener("scroll", headerScroll);

// headerScroll();

// function headerScroll() {
//     let header = document.querySelector('header');
//     let navLinks = document.querySelector('.nav-links');
//     header.classList.toggle('sticky', window.scrollY > 0);
//     navLinks.classList.toggle('sticky', window.scrollY > 0);
// }

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

// Modal -----------------------------------------------------------------

const modalBtn = () => {
    const openModalBtn = document.querySelectorAll('.modal-open-btn')
    const closeModalBtn = document.querySelectorAll('.modal-close-btn')

    openModalBtn.forEach(openBtn => {
        openBtn.addEventListener('click', () => {
            const modal = openBtn.getAttribute('data-modal')

            document.getElementById(modal).style.display = 'block'
        })
    })

    closeModalBtn.forEach(closeBtn => [
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal')
            modal.style.display = "none"
        })
    ])

    window.onclick = (e) => {
        if(e.target.className === 'modal'){
            e.target.style.display = "none"
        }
    }
}

modalBtn();



