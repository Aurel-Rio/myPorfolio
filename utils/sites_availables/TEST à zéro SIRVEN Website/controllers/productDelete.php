<?php
include_once('../utils/dbConfig.php');
include_once('../models/products.php');

if (isset($_POST['deleteProductQuery'])) {
    if (
        !empty($_POST['id_produits'])
    ) {
        $id_produits = ($_POST['id_produits']);
        //$id_produits = trim($_POST['enter_id']);
        $delProduct = new Produits();
        $delProduct->setId_produits($id_produits);
        $delProduct->deleteProduct();
        header("Location: admv.php");
    }
}
if (isset($_POST['delete_all_products'])) {
    //$id_produits = trim($_POST['enter_id']);
    $delProductAll = new Produits();
    $delProductAll->deleteProductAll();
    header("Location: admv.php");
}
?>