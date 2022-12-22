
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}
toggleMenu()

function closeMenu() {
    const close = document.querySelector('.navbar__links');
    const navbar = document.querySelector('.navbar');
    close.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}
closeMenu();