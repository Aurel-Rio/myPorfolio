<?php

include_once('../utils/dbConfig.php');
include_once('../models/products.php');

/*-------------------CONTROLES ET VERIFICATION DES CHAMPS DU FORMULAIRE--------------------------*/

$errorsLogin = [];
if (isset($_POST['productAddQuery'])) {
    if (
        !empty($_POST['produit_nom'])
        && !empty($_POST['produit_image'])
        && !empty($_POST['produit_prix'])
        && !empty($_POST['produit_desc'])
    ) {

        $produit_nom = ($_POST['produit_nom']);
        $produit_image = ($_POST['produit_image']);
        $produit_prix = ($_POST['produit_prix']);
        $produit_desc = ($_POST['produit_desc']);

        $verifProductName = htmlspecialchars(strip_tags($produit_nom));
        $verifProductImg = htmlspecialchars(strip_tags($produit_image));
        $verifProductPrice = htmlspecialchars(strip_tags($produit_prix));
        $verifProductDesc = htmlspecialchars(strip_tags($produit_desc));
        //var_dump($verifProductDesc);

        /*-------------------INSTANCIATION ET AJOUT DU NOUVEL OBJET --------------------------------------*/

        $products = new Produits();
        $products->setProduit_nom($verifProductName);
        $products->setProduit_image($verifProductImg);
        $products->setProduit_prix($verifProductPrice);
        $products->setProduit_desc($verifProductDesc);

        $products->addProduct();
        header("Location: admv.php");
    }
}
?>