<!DOCTYPE html>
<html lang="fr">
<?php
include 'head.php';
?>
<body>
<!--Animation d'introduction-->
    <div id="anim_start">
        <img src="../img/Logo_iss09.png" width="100%" alt="Point de connexion 2">
    </div>
<!--Arrière-plan-->
    <div id="img_background">
        <img id="bg_default_black" src="../img/back02.png" alt="Point de connexion">
    </div>

    <?php
    include 'head.php';
    include 'header.php';
    ?>

    <main>
        <?php
        include 'accueil.php';
        include 'forfaits.php';
        include 'assistance.php';
        include 'depannge.php';
        include 'formation.php';
        include 'deplacements.php';
        include 'contact.php';
        ?>
    </main>

</body>

<?php
include 'footer.php';
?>

</html>