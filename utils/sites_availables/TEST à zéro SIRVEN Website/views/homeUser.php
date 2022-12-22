<?php
session_start();
?>

<h2>Bonjour <?php print($_SESSION['nom']); ?></h2>

<style>
    h2{
        text-align: center;
        font-size: 2em;
        border: 1px solid black;
        border-radius: 10px;
        background: linear-gradient(217deg, rgba(117, 86, 0, 1), rgba(255, 0, 0, 0) 15.71%), linear-gradient(127deg, rgba(0, 0, 0, 1), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 70.71%);
        color:  white;
        text-shadow: 1px 1px rgba(117, 86, 0, 1);
    }
</style>

<?php
    include 'home.php';
    include 'navbarUser.php';
?>