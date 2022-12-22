<?php 
/*-------------------AFFICHAGE DES PRODUITS---------------------------*/

$mysqli = new mysqli("127.0.0.1", "root", "", "test0sirven");
$mysqli->set_charset("utf8");
$requete = "SELECT * FROM produits";
$resultat = $mysqli->query($requete);
$dataAllProduct = array();
while ($ligne = $resultat->fetch_assoc()) {
    $dataAllProduct[] = $ligne;
}
$pathOfFile = "../json/productsAll.json";
$jsonArray = json_encode($dataAllProduct, JSON_UNESCAPED_UNICODE);
$data = file_put_contents($pathOfFile, $jsonArray);
$mysqli->close();
?>

<?php
/*
$az = new Produits();
$az->displayProduct();
$pathOfFile = "../json/productsAll.json";
$arrayAllProducts = json_encode($az);
$data = file_put_contents($pathOfFile, $arrayAllProducts);
*/
?>
