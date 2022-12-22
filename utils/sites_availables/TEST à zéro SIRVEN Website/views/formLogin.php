<!DOCTYPE html>
<?php
include '../controllers/userLogin.php';
include '../controllers/adm.php';
include 'head.php';
include 'navbar.php';
include 'footer.php';
?>
<script defer src="../js/userLogin.js"></script>
<div align="center">
    <form name="formLogin" id="formLogin" onsubmit="return loginForm()" class="displayAll" action="" method="post">
        <h2>Formulaire de connexion</h2>
        <div id="line"></div>
        <label for="nom">Entrez votre Nom:</label><br />
        <input pattern="[A-Za-z0-9]+"type="text" value="joss09site" name="nom" maxlength="20" required><br />
        <label for="mail">E-mail:</label><br />
        <input type="mail" value="joss@gmx.fr" name="mail" id="mail" maxlength="25" required><br />
        <label for="mdp">Mot de passe:</label><br />
        <input pattern="[A-Za-z0-9]+"type="password" value="joss19231875" name="mdp" maxlength="150" required><br />
        <input pattern="[A-Za-z0-9]+" type="submit" name="connexion" id="login" value="Se connecter">
    </form>
</div>
<script defer src="../js/userLogin.js"></script>





