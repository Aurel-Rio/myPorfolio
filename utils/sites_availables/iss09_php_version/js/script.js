/*Variables contenant les paragraphes*/
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
//Encrage des éléments du DOM dans un tableau
const arrayP = [p1, p2, p3, p4, p5, p6, p7];
/*-------------------------------------------*/
const animStart = document.getElementById('anim_start');
const navbarLogo = document.getElementById('nbl');
const changeThemeBtn = document.getElementById('change_theme');
const navabarTheme = document.querySelector('nav');
const navbarLinks = document.querySelectorAll('navbar__links');
const footerText = document.getElementById("footer_text");
const footer = document.querySelector("footer");
const imgBackground = document.getElementById("img_background");
const bg_default_black = document.getElementById("bg_default_black");
const body = document.querySelector("body");
const section = document.getElementsByTagName("section");
const borderNavLinks = document.getElementById('nav_links');
const borderNavLinksFooter = document.getElementById('nav_links_footer');

/*Variables contenant les liens  de la Navbar*/
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l6 = document.getElementById('l6');
const l7 = document.getElementById('l7');

const arrayL = [l1, l2, l3, l4, l6, l7];

const l1f = document.getElementById('l1f');
const l2f = document.getElementById('l2f');
const l3f = document.getElementById('l3f');
const l4f = document.getElementById('l4f');
const l6f = document.getElementById('l6f');
const l7f = document.getElementById('l7f');

//Timer sur le logo d'accueil ISS09 Animation d'intoduction
function firstLogoOff() {
    setTimeout(hiddenLogoStart, 6000);
}
function hiddenLogoStart() {
    animStart.style.display = 'none';
}

/*Gestion de l'affichege lors du scroll*/
function activateScroll() {
    window.addEventListener("scroll", function (e) {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'block';
        arrayP[1].style.display = 'block';
        arrayP[2].style.display = 'block';
        arrayP[4].style.display = 'block';
        arrayP[3].style.display = 'block';
        arrayP[5].style.display = 'block';
        arrayP[6].style.display = 'block';
        e.preventDefault();
    });
}



/*Evenement d'écoute afin de gérer l'affichage dynamique des paragraphes via les lien de la navbar*/
function linkNavbar() {
    l1.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'block';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l2.addEventListener('click', (e) => {
        // arrayP[0,2,3,4,5,6].style.display = 'none';
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'block';
        arrayP[2].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l3.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'block';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l4.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'block';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l6.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'block';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l7.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'block';
        e.preventDefault();
    });

    navbarLogo.addEventListener('click', (e) => {
    /*    animStart.style.animation = 'none';
        animStart.style.display = 'block';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();*/
        location.reload();
        });
    l1f.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'block';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l2f.addEventListener('click', (e) => {
        // arrayP[0,2,3,4,5,6].style.display = 'none';
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'block';
        arrayP[2].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l3f.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'block';
        arrayP[4].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l4f.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'block';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l6f.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'block';
        arrayP[6].style.display = 'none';
        e.preventDefault();
    });
    l7f.addEventListener('click', (e) => {
        animStart.style.display = 'none';
        arrayP[0].style.display = 'none';
        arrayP[1].style.display = 'none';
        arrayP[2].style.display = 'none';
        arrayP[3].style.display = 'none';
        arrayP[4].style.display = 'none';
        arrayP[5].style.display = 'none';
        arrayP[6].style.display = 'block';
        e.preventDefault();
    });
}
footer.style.backgroundColor = 'black';
footerText.style.color = 'white';

/*White and Dark theme*/
function whiteAndDarkTheme() {
    let clicked = false;
    changeThemeBtn.addEventListener('click', (e) => {
        if (clicked === false) {
            navabarTheme.style.backgroundColor = 'grey';
            body.style.backgroundColor = 'rgb(255,255,255)';
            bg_default_black.setAttribute('src', '../img/back01.png');
            borderNavLinks.style.borderColor = 'rgb(105,105,105)';
            borderNavLinks.style.backgroundColor = 'grey';
            
            borderNavLinksFooter.style.borderColor = 'rgb(105,105,105)';
            borderNavLinksFooter.style.backgroundColor = 'grey';
            arrayL[0].style.color = 'white';
            arrayL[1].style.color = 'white';
            arrayL[2].style.color = 'white';
            arrayL[3].style.color = 'white';
            arrayL[4].style.color = 'white';
            arrayL[0].style.textShadow = '1px 1px black';
            arrayL[1].style.textShadow = '1px 1px black';
            arrayL[2].style.textShadow = '1px 1px black';
            arrayL[3].style.textShadow = '1px 1px black';
            arrayL[4].style.textShadow = '1px 1px black';
            l7.style.textShadow = '1px 1px black';
            l1f.style.textShadow = '1px 1px black';
            l2f.style.textShadow = '1px 1px black';
            l3f.style.textShadow = '1px 1px black';
            l4f.style.textShadow = '1px 1px black';
            l6f.style.textShadow = '1px 1px black';
            l7f.style.textShadow = '1px 1px black';
            changeThemeBtn.style.backgroundColor = 'black';
            footer.style.backgroundColor = 'grey';
            footerText.style.color = 'white';
            arrayP[0].style.background = 'none';
            arrayP[1].style.background = 'none';
            arrayP[2].style.background = 'none';
            arrayP[3].style.background = 'none';
            arrayP[4].style.background = 'none';
            arrayP[5].style.background = 'none';
            arrayP[6].style.background = 'none';
            arrayP[0].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[1].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[2].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[3].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[4].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[5].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[6].style.backgroundColor = 'rgb(211,211,211)';
            arrayP[0].style.color = 'black';
            arrayP[1].style.color = 'black';
            arrayP[2].style.color = 'black';
            arrayP[3].style.color = 'black';
            arrayP[4].style.color = 'black';
            arrayP[5].style.color = 'black';
            arrayP[6].style.color = 'black';
            arrayP[0].style.textShadow = '2px 2px white';
            arrayP[1].style.textShadow = '2px 2px white';
            arrayP[2].style.textShadow = '2px 2px white';
            arrayP[3].style.textShadow = '2px 2px white';
            arrayP[4].style.textShadow = '2px 2px white';
            arrayP[5].style.textShadow = '2px 2px white';
            arrayP[6].style.textShadow = '2px 2px white';

            clicked = true;
        }
        else {
            document.body.style.color = 'black';
            navabarTheme.style.backgroundColor = 'black';
            body.style.backgroundColor = 'black';
            bg_default_black.setAttribute('src', '../img/back02.png')
            arrayL[0].style.color = 'white';
            arrayL[1].style.color = 'white';
            arrayL[2].style.color = 'white';
            arrayL[3].style.color = 'white';
            arrayL[4].style.color = 'white';
            changeThemeBtn.style.backgroundColor = 'white';
            footer.style.backgroundColor = 'black';
            footerText.style.color = 'white';
            borderNavLinksFooter.style.borderColor = 'black';
            borderNavLinksFooter.style.backgroundColor = 'black';
            borderNavLinks.style.borderColor = '#222';
            borderNavLinksFooter.style.borderColor = '#222';
            borderNavLinks.style.backgroundColor = 'black';
            arrayP[0].style.background = ' linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[1].style.background = ' linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[2].style.background = '  linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[3].style.background = '  linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[4].style.background = ' linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[5].style.background = '  linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[6].style.background = ' linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 50%, rgba(19,19,19,1) 72%, rgba(102,102,102,1) 100%)';
            arrayP[0].style.backgroundColor = 'none';
            arrayP[0].style.color = 'white';
            arrayP[1].style.color = 'white';
            arrayP[2].style.color = 'white';
            arrayP[3].style.color = 'white';
            arrayP[4].style.color = 'white';
            arrayP[5].style.color = 'white';
            arrayP[6].style.color = 'white';
            arrayP[0].style.textShadow = '2px 2px black';
            arrayP[1].style.textShadow = '2px 2px black';
            arrayP[2].style.textShadow = '2px 2px black';
            arrayP[3].style.textShadow = '2px 2px black';
            arrayP[4].style.textShadow = '2px 2px black';
            arrayP[5].style.textShadow = '2px 2px black';
            arrayP[6].style.textShadow = '2px 2px black';
            clicked = false;
        }
    });
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}

function closeMenu() {
    const close = document.querySelector('.navbar__links');
    const navbar = document.querySelector('.navbar');
    close.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}

   /* Enlève le scroll */
if (window.innerWidth > 700) {
    function noScroll() {
        scrollHaut = window.pageYOffset;
        scrollGauche = window.pageXOffset;
        window.onscroll = function () {
            window.scrollTo(scrollGauche, scrollHaut);
        };
    }

    function yesScroll() {
        window.onscroll = function () { };
    }
    noScroll();
}

firstLogoOff();
whiteAndDarkTheme();
linkNavbar();

closeMenu();
toggleMenu();