function loginForm() {

    let nom = document.forms["formLogin"]["nom"];
    let mail = document.forms["formLogin"]["mail"];
    let mdp = document.forms["formLogin"]["mdp"];
    var email = document.getElementById("mail");

    email.addEventListener("keyup", function(event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Ceci n'est pas un e-mail valide");
        } else {
            email.setCustomValidity("");
        }
    });

    if (nom.value === '') {
        alert("Veuillez entrer un nom");
        nom.focus();
        return false;
    }
}
