function registerForm() {

    let nom = document.forms["formRegister"]["nom"];
    let prenom = document.forms["formRegister"]["prenom"];
    let mail = document.forms["formRegister"]["mail"];
    let mailc = document.forms["formRegister"]["mailc"];
    let tel = document.forms["formRegister"]["tel"];
    let adresse = document.forms["formRegister"]["adresse"];
    let cp = document.forms["formRegister"]["cp"];
    let ville = document.forms["formRegister"]["ville"];
    let mdp = document.forms["formRegister"]["mdp"];
    let mdpc = document.forms["formRegister"]["mdpc"];

    if (nom.value == '') {
        alert("Entrez votre nom.");
        nom.focus();
        return false;
    }
    if (mdp.value !== mdpc.value) {
        alert("JS: Vos mot de passe ne correspondent pas !");
        mdp.focus(); 
        return false;
    }
    if (mail.value !== mailc.value) {
        alert("JS: Vos e-mails ne correspondent pas !");
        mail.focus();
        formFirst.style.display = "block";
        return false;
    }

    location.reload();
    return true;
}
