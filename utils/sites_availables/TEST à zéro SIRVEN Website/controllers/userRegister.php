<?php

include_once('../utils/dbConfig.php');
include_once('../models/users.php');

/*-------------------CONTROLES ET VERIFICATIONS DES CHAMPS DU FORMULAIRE--------------------------*/ 
$nbrLineNameUser2 = '';
$nbrLineMailRegister = ''; 
$success = 0;
$msg = "Une erreur est survenue dans le php";
$errors = [];
if (isset($_POST['formRegister'])) {
    if (
        !empty($_POST['nom'])
        && !empty($_POST['prenom'])
        && !empty($_POST['mail'])
        && !empty($_POST['mailc'])
        && !empty($_POST['tel'])
        && !empty($_POST['adresse'])
        && !empty($_POST['cp'])
        && !empty($_POST['ville'])
        && !empty($_POST['mdp'])
        && !empty($_POST['mdpc'])
    ) {

        $nom = trim($_POST['nom']);
        $prenom = trim($_POST['prenom']);
        $mail = trim($_POST['mail']);
        $mailc = trim($_POST['mailc']);
        $tel = trim($_POST['tel']);
        $adresse = trim($_POST['adresse']);
        $cp = trim($_POST['cp']);
        $ville = trim($_POST['ville']);
        $mdp = trim($_POST['mdp']);
        $mdpc = trim($_POST['mdpc']);


/*-------------------VERIFICATION ET CONTROLLES DES ENTREES--------------------------------------*/ 

        if ($mdp !== $mdpc) {
            $errors['mdp'] = "PHP -> Les mots de passent ne correspondent pas !";
        } else {
            if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
                $errors['mail'] = "PHP -> Cette adresse e-mail n'est pas valide!";
                echo "<script>alert(\"PHP ->Cette adresse e-mail n'est pas valide!\")</script>";
                echo ($errors);
            } else if (!filter_var($mailc, FILTER_VALIDATE_EMAIL)) {
                $errors['mailConf'] = "PHP -> Echec de la confirmation e-mail! ";
                echo "<script>alert(\"PHP ->Echec de la confirmation e-mail! \")</script>";
                echo ($errors);
            } else if ($mail !== $mailc) {
                $errors['mailCompare'] = "PHP -> Vos e-mails ne sont pas identiques, erreur de saisie!";
                echo "<script>alert(\"PHP -> Vos e-mails ne sont pas identiques, erreur de saisie!\")</script>";

            } else {
                $verifMdp = htmlspecialchars(strip_tags($mdp));
                $verifNom = htmlspecialchars(strip_tags($nom));
                $verifMail = htmlspecialchars(strip_tags($mail));
                $verifAdresse = htmlspecialchars(strip_tags($adresse));
                $verifVille = htmlspecialchars(strip_tags($ville));
                $verifCp = htmlspecialchars(strip_tags($cp));
                $verifPrenom = htmlspecialchars(strip_tags($prenom));
                $verifTel = htmlspecialchars(strip_tags($tel));

                $newUser = new Users();

                $newUser->setNom($verifNom);
                $newUser->setPrenom($verifPrenom);
                $newUser->setMail($verifMail);
                $newUser->setTel($verifTel);
                $newUser->setAdresse($verifAdresse);
                $newUser->setCp($verifCp);
                $newUser->setVille($verifVille);
                $newUser->setMdp(password_hash($verifMdp, PASSWORD_BCRYPT));
                $stUser = $newUser->getSingleUser();
                $nbrLineNameUser2 = $stUser->rowCount();
                $stUser = $newUser->verifyMail();
                $nbrLineMailRegister = $stUser->rowCount();
            }
            if ($nbrLineNameUser2 > 0) {
                $errors['nomDoublon'] = "Erreur doublon nom";
                echo "<script>alert(\"PHP -> Ce nom existe déjà.\")</script>";

            } else if ($nbrLineMailRegister > 0) {
                $errors['mail'] = "Le mail entrer existe déjà";
                echo "<script>alert(\"PHP -> Erreur de saisie dans votre nom ou votre mot de passe !\")</script>";
                print "Le mail entrer existe déjà";
                var_dump($errors);
            }
        }
    }
/*--------------------------CREATION DE L UTILISATEUR AINSI QUE SON JSON------------------------------------------*/

    if (empty($errors)) {
        $newUser->createUser();
        //JSON data user
        session_start();
        $_SESSION['nom'] =  $_POST['nom'];
        $userArray = array(
            "user0" => array(
                "nom" => "$nom",
                "prenom" => "$prenom",
                "mail" => "$mail",
                "tel" => "$tel",
                "adresse" => "$adresse",
                "cp" => "$cp",
                "ville" => "$ville"
            )
        );
        $pathOfFile = "../json/newUser.json";
        $jsonArray = json_encode($userArray, JSON_UNESCAPED_UNICODE);
        $data = file_put_contents($pathOfFile, $jsonArray);
        header("Location:indexUser.php");
    }
}
?>