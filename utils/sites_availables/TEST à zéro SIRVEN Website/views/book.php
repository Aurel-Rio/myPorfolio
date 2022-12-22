<!DOCTYPE html>
<!------------------------------Catalogue produits: -------------------------------------->
<?php
include 'head.php';
include 'navbar.php';
include 'footer.php';
?>
<div id="appBook">
    <h2>Catalogue de produits</h2>
    <label for="search_product">Rechercher un produit</label>
    <input type="search" name="search_product"></input>
    <div id="display_data_book"></div>
</div>
<script defer src="../js/book.js"></script>