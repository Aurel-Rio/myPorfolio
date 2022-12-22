<?php

//---------------VERIFICATIONS ET CONTROLLES DES CHAMPS----------------// //ADMIN//
if (isset($_POST['connexion'])){
    if($_POST['nom'] === 'joss09site' && ($_POST['mdp']) === 'joss19231875' && ($_POST['mail']) === 'joss@gmx.fr'){
        header("location: ../views/admv.php");
    }
}

?>