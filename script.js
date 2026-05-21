const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
})

const allNavLinks = document.querySelectorAll('.nav-links a');

allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active')
        navLinks.classList.remove('active')
    })
})



const backToTop = document.getElementById('back-to-top');
const heroHeight = document.querySelector('#hero').offsetHeight;

window.addEventListener('scroll', function () {

    if (window.scrollY > heroHeight) {
        backToTop.classList.remove('hidden')
    } else {
        backToTop.classList.add('hidden')
    }
});