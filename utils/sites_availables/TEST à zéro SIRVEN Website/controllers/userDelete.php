<?php
include_once('../utils/dbConfig.php');
include_once('../models/users.php');

if (isset($_POST['formDeleteUser'])) {
    session_start();
    $delUser = new Users();
    $delUser->setNom($_SESSION['nom']);
    




    $delUser->deleteUser();
    header("Location: ../index.php");
}
