
<?php
include_once('../utils/dbConfig.php');
include_once('../models/users.php');

/*-------------------CONTROLES ET VERIFICATION DES CHAMPS DU FORMULAIRE--------------------------*/ 

$errorsLogin = [];
if (isset($_POST['connexion'])) {
    if (
        !empty($_POST['nom'])
        && !empty($_POST['mail'])
        && !empty($_POST['mdp'])
    ) {
        $nom = trim($_POST['nom']);
        $mail = trim($_POST['mail']);
        $mdp = trim($_POST['mdp']);
        $verifMdp = htmlspecialchars(strip_tags($mdp));
        $verifMail = htmlspecialchars(strip_tags($mail));
        $verifNom = htmlspecialchars(strip_tags($nom));
        $nUser = new Users();
        $nUser->setMdp($verifMdp);
        $nUser->setMail($verifMail);
        $nUser->setNom($verifNom);
        $stUser = $nUser->getSingleUser();
        $nbrLineNameUser = $stUser->rowCount();
        $stUserMail = $nUser->verifyMail();
        $nbrLineMail = $stUserMail->rowCount();
        
        if ($nbrLineNameUser == 0) {
            $errorsLogin['nomInconnue'] = "Nom inconnue";
            echo "<script>alert(\"PHP ->Veuillez vous inscrire .\")</script>";
        } else if ($nbrLineNameUser == 1) {
            while ($rowUser = $stUser->fetch()) {
                extract($rowUser);
                if (!password_verify($verifMdp, $rowUser['mdp'])) {
                    $errorsLogin['Erreur mdp'] = "Erreur Mdp";
                    echo "<script>alert(\"PHP -> Il y a une erreur de saisie dans votre mail ou dans votre mot de passe!!!\")</script>";
                } else if ($nbrLineMail == 0) {
                    $errorsLogin['mailExist'] = "Erreur Mail";
                    echo "<script>alert(\"PHP ->  Il y a une erreur de saisie dans votre mail ou dans votre mot de passe!!!\")</script>";

/*--------------------------CREATION DE L UTILISATEUR AINSI QUE SON JSON------------------------------------------*/

                } else  if (empty($errorsLogin)){
                    session_start();
                    $_SESSION['nom']= $_POST['nom'];
                    $userArray = array(
                        "user0" => array(
                            "nom" => "$nom"
                        )
                    );
                    $pathOfFile = "../json/loginUser.json";
                    $jsonArray = json_encode($userArray, JSON_UNESCAPED_UNICODE);  /*HT_ACCESS index.php dans tous les dossiers*/
                    $data = file_put_contents($pathOfFile, $jsonArray);
                    header("Location:indexUser.php");
                }
            }
        }
    }
}
?>




