/*--------------------------------------------------------------------------*/
/*			          Récupération des émléments du DOM        	            */
/*--------------------------------------------------------------------------*/

const navUl = document.getElementById('nav_ul'); // On récupère la Unorganized list de la Navbar
const navLi = navUl.children; // On mets les liste li (enfant de Ul) dans un tableau navLI
/*-----
navLi[0] correspond au lien [Home] de la navbar;
navLi[1] correspond au lien [My Realisations] de la navbar;
navLi[2] correspond au lien [My Cv] de la navbar;
navLi[3] correspond au lien [My Title] de la navbar;
navLi[4] correspond au lien [My Porfolio_Generator] de la navbar;
-----*/

/* Ici On récupéré l'emplkacement des élément à afficher ou non */
const sectionHome = document.getElementById('home');
const animStart = document.getElementById('anim_start');//div pour accueillir l'animation d'introduction
const sectionMyCv = document.getElementById('my_cv');
const sectionMyTitle = document.getElementById('my_title');
const button = document.getElementById('button_arrow_down_change_data');
const myPorfolioGenerator =  document.getElementById('my_porfolio_generator');
const footerLinkGit = document.getElementById('footer_link_git');

const animatedTexts = document.querySelectorAll('.animated_text'); 

const myRealisationsPage = document.getElementById('my_realisations');// On récupère tout les éléments de a afficher ou a modifier de la page My realisation
const myRealisationsElements = myRealisationsPage.children; // On les indexe dans un tableau 
/*-----
myRealisationsElements[0] correspond à l'id : #inject_text_realisations;
myRealisationsElements[1] correspond à l'id : #screen_data_display;
myRealisationsElements[2] correspond à l'id : #button_change_screen_data_display;  
myRealisationsElements[3] correspond à l'id : #button_responcive_icon_arrow_down;
-----*/

const iconResponciveAndArrowdown = [navLi[1], myRealisationsElements[3]];/*-
Tableau de contenant les éléments #button_responcive_icon    et    #button_responcive_icon_arrow_down;
------*/

let clickedOnArrowDownCircle = 0;
/*-Variable de compteur de click sur le arrowDownCircle qui permet de basculer de vue mobile à écran large-*/
let clickedOnRespociveIcon = true;

/*------- On gére l'affichage des pages avec des évènements d'écoute -------*/
/*--------------------------------------------------------------------------*/
/*			                     Page d'accueil             	            */
/*--------------------------------------------------------------------------*/
function displayHome() {    /* Lien Home de la navbar */
    navLi[0].addEventListener('click', (e) => {
        sectionHome.style.display = 'block';
        sectionMyCv.style.display = 'none';
        sectionMyTitle.style.display = 'none';
        myRealisationsPage.style.display = 'none';
        myPorfolioGenerator.style.display = 'none';
        sectionHome.style.animation = 'none';
    });
};

/*--------------------------------------------------------------------------*/
/*			                     Page CV                      	            */
/*--------------------------------------------------------------------------*/

function displayMyCv() {
    navLi[2].addEventListener('click', (e) => { /* Lien My Cv de la navbar */
        sectionHome.style.display = 'none';
        sectionMyCv.style.display = 'block';
        sectionMyTitle.style.display = 'none';
        myRealisationsPage.style.display = 'none';
        myPorfolioGenerator.style.display = 'none';
    });
};

/*--------------------------------------------------------------------------*/
/*			                     Page My_Title               	            */
/*--------------------------------------------------------------------------*/

function displayMyTitle() {
    navLi[3].addEventListener('click', (e) => { /* Lien My Title de la navbar */
        sectionHome.style.display = 'none';
        sectionMyCv.style.display = 'none';
        sectionMyTitle.style.display = 'block';
        myRealisationsPage.style.display = 'none';
        myPorfolioGenerator.style.display = 'none';
    });
};

/*--------------------------------------------------------------------------*/
/*			                     Page des réalisations         	            */
/*--------------------------------------------------------------------------*/

function displayMyRealisations() {
    navLi[1].addEventListener('click', (e) => { /* Lien My Realisations de la navbar */
        myRealisationsElements[0].innerHTML = ` <h3>2021 - Développement du site vitrine ISS09</h3><br/>
    <h4 style="color:blue; text-align:center" >Technologies utilisées:</h4><br/>
    <p>
        Html, Css, JavaScript, Php.<br />
        Site vitrine réalisé en distanciel avant mon entrer en formation à l'ADARAR.
        <p style="color:green" class="img-clignote">_</p>
        </p>`
        sectionHome.style.display = 'none';
        sectionMyCv.style.display = 'none';
        sectionMyTitle.style.display = 'none';
        myPorfolioGenerator.style.display = 'none';
        myRealisationsPage.style.display = 'initial';
        myRealisationsElements[1].innerHTML = `<object  data="../utils/sites_availables/iss09_php_version/index.php" type="text/html" style="width:100%; height:100%; "></object>`;
        myRealisationsElements[1].style.border = '5px solid grey';
    });
    changeDataIndiplayRealisations();

};
/* Fonction permettant d'injecter dynamiquement les descriptions et les réalisations*/
function changeDataIndiplayRealisations() {
/* Boucles permettant de selectionner tous les elements du tableau iconResponciveAndArrowdown afin d'avoir une opération au clic event */
    iconResponciveAndArrowdown.forEach(function (elem) { 
        elem.addEventListener("click", function () {
            if (clickedOnArrowDownCircle === 0) {
                myRealisationsElements[0].innerHTML = ` <h3>2021 - Développement du site vitrine ISS09</h3><br/>
                <h4 style="color:blue; text-align:center" >Technologies utilisées:</h4><br/>
                <p>
                    Html, Css, JavaScript, Php.<br />
                    Site vitrine réalisé en distanciel avant mon entrer en formation à l'ADARAR.
                    <p style="color:green" class="img-clignote">_</p>
                    </p>
                    <a style="color:red;" href="http://www.iss09.fr" target="about:blank">ON-LINE</a>`;
                myRealisationsElements[1].innerHTML = `<object  data="../utils/sites_availables/iss09_php_version/index.php" type="text/html" style="width:100%; height:100%; "></object>`
                myRealisationsElements[1].style.border = '1px solid white';
                clickedOnArrowDownCircle = 1;
            } else if (clickedOnArrowDownCircle === 1) {
                myRealisationsElements[0].innerHTML = ` <h3>2021 / 2022 - Projet E-commerce</h3><h4>
                Projet finalisé à 50%</h4><br/>
                <h4 style="color:blue; text-align:center" >Technologies utilisées:</h4><br/>
                <p>
                    Html, Css, JavaScript, Php(poo), mySql, Apache2, bootstrap.<br />
                    Projet réalisé durant mon stage de 2 mois che Sirven Bijoux Fantaisie.
                    <p style="color:green" class="img-clignote">_</p>
                    </p>`;
                myRealisationsElements[1].innerHTML = `<object data="../utils/sites_availables/TEST à zéro SIRVEN Website/index.php"  type="text/html" style="width:100%; height:100%; "></object>`;
                myRealisationsElements[1].style.border = '1px solid  white';
                clickedOnArrowDownCircle = 2;
            } else if (clickedOnArrowDownCircle === 2) {
                myRealisationsElements[0].innerHTML = ` <h3>2022 - Réalisations d'un site de Playlist musicale REZZED</h3><br/>
                <h4 style="color:blue; text-align:center" >Technologies utilisées:</h4><br/>
                <p>
                    Html, Css, JavaScript, Php, mySql, Apache2.<br />
                    Projet réalisé en équipe durant ma formation à l'adrar.
                    <p style="color:green" class="img-clignote">_</p>
                    </p>`;
                myRealisationsElements[1].innerHTML = `<object data="../utils/sites_availables/rezeed/index.php" type="text/html" style="width:100%; height:100%; "></object>`;
                myRealisationsElements[1].style.border = '1px solid grey';
                clickedOnArrowDownCircle = 3;
            }else if (clickedOnArrowDownCircle === 3) {
                myRealisationsElements[0].innerHTML = ` <h3>2021 - TP Api Toulouse, Inventaire de la flore</h3><br/>
                <h4 style="color:blue; text-align:center" >Technologies utilisées:</h4><br/>
                <p>
                    Html, Css, JavaScript, Json.<br />
                    Projet réalisé le 12/01/2021 durant ma formation à l'adrar.
                    <p style="color:green" class="img-clignote">_</p>
                    </p>`;
                myRealisationsElements[1].innerHTML = `<object data="../utils/sites_availables/JS_Api_Toulouse_inventaire_de_la_flore_sauvage/index.html" type="text/html" style="width:100%; height:100%; "></object>`;
                myRealisationsElements[1].style.border = '1px solid black';
                clickedOnArrowDownCircle = 0;
            }
            ;
        });
    });
};

/*Ici on passe s'un affichage ecran large a mobile (Responcive)*/
function responciveIconOnClick() {
    myRealisationsElements[2].addEventListener('click', (e) => {
        if (clickedOnRespociveIcon === true) {
            myRealisationsElements[1].classList.remove('screen_data_display');
            myRealisationsElements[1].classList.add('responciveMobileDisplay');
            clickedOnRespociveIcon = false;
        } else {
            myRealisationsElements[1].classList.remove('responciveMobileDisplay');
            myRealisationsElements[1].classList.add('screen_data_display');
            clickedOnRespociveIcon = true;
        };
    });
};

footerLinkGit.addEventListener('mouseover', (e) => {      /*2 paramètre ????*/
    footerLinkGit.classList.remove('img-clignote-green');
    footerLinkGit.classList.add('img-clignote');
    footerLinkGit.innerHTML = `Link GIT_HUB`; 
    footerLinkGit.style.color = 'red';
    footerLinkGit.style.animation = 'none';
    footerLinkGit.style.cursor = 'pointer';                   
    e.preventDefault();
    footerLinkGit.addEventListener('click', (e) => {
        window.open('https://github.com/riozacki');
        e.preventDefault();
    });
})
footerLinkGit.addEventListener('mouseleave', (e) => {
    footerLinkGit.classList.remove('img-clignote');
    footerLinkGit.classList.add('img-clignote-green');
    footerLinkGit.textContent = 'SERVANT Aurélien';      
    footerLinkGit.style.color = 'green';
    e.preventDefault();
})

/*--------------------------------------------------------------------------*/
/*			                     Page My Poroliio_Generator   	            */
/*--------------------------------------------------------------------------*/

function MyPorfioloGenerator () {
    navLi[4].addEventListener('click', (e) => {
        myPorfolioGenerator.style.display = 'block';
        sectionHome.style.display = 'none';
        sectionMyCv.style.display = 'none';
        sectionMyTitle.style.display = 'none';
        myRealisationsPage.style.display = 'none';
    })
};

//Timer sur le logo d'accueil Animation d'intoduction
function firstLogoOff() {
    setTimeout(hiddenLogoStart, 5000);
}
function hiddenLogoStart() {
    animStart.style.display = 'none';
}


/*---------------------------ANIMATION DU TEXTE----------------*/
/*
function animateText(animatedText) {
    const text = animatedText.textContent;
    let speed = animatedText.getAttribute("speed");
    let delay = animatedText.getAttribute("delay");
    if (speed == null) {
    speed = 150;
    }
    if (delay == null) {
    delay = 0;
    }
    animatedText.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
    if (text[i] == '') {
        animatedText.innerHTML += '';
    }
    animatedText.innerHTML += `<span>${text[i]}</span>`;
    }                                                                WORK IN PROGRESS
    console.log(text);
    setTimeout(function () {
    let idx = 0;
    function writeChar() {
        const span = animatedText.querySelectorAll('span')[idx];
        span.classList.add('fade');
        idx++;
        if (idx == text.length) {
        clearInterval(writeCharInterval);
        }
    }
    let writeCharInterval = setInterval(writeChar, speed);
    }, delay);
}
animatedTexts.forEach(animateText);
---------------------------------------------------------------------*/




/*Ici on appelle les classes CSS afin d'afficher le Burger et le menu*/
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



firstLogoOff();
toggleMenu();
closeMenu();
displayHome();
displayMyRealisations();
displayMyCv();
displayMyTitle();
responciveIconOnClick(); 
MyPorfioloGenerator();


