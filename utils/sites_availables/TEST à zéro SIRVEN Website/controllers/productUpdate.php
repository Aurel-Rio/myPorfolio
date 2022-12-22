<?php

include_once('../utils/dbConfig.php');
include_once('../models/products.php');

$errorsLogin = [];
if (isset($_POST['productUpdateQuery'])) {
    if (
        !empty($_POST['id_produits'])
        && !empty($_POST['produit_nom'])
        && !empty($_POST['produit_image'])
        && !empty($_POST['produit_prix'])
        && !empty($_POST['produit_desc'])
    ) {
        $id_produits = ($_POST['id_produits']);
        $produit_nom = ($_POST['produit_nom']);
        $produit_image = ($_POST['produit_image']);
        $produit_prix = ($_POST['produit_prix']);
        $produit_desc = ($_POST['produit_desc']);
        
        $verifProductName = htmlspecialchars(strip_tags($produit_nom));
        $verifProductImg = htmlspecialchars(strip_tags($produit_image));
        $verifProductPrice = htmlspecialchars(strip_tags($produit_prix));
        $verifProductDesc = htmlspecialchars(strip_tags($produit_desc));
        var_dump($verifProductDesc);

        $productUpdate = new Produits();
        $productUpdate->setId_produits($id_produits);
        $productUpdate->setProduit_nom($produit_nom);
        $productUpdate->setProduit_image($produit_image);
        $productUpdate->setProduit_prix($produit_prix);
        $productUpdate->setProduit_desc($produit_desc);
        $productUpdate->updateProduct();
        header("Location: admv.php");
    }
}
?>

