<!DOCTYPE html>

<?php
include '../controllers/productAdd.php';
include '../controllers/productDisplay.php';
include '../controllers/productDelete.php';
include '../controllers/productUpdate.php';
?>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/TEST à zéro SIRVEN Website/css/admv.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script defer src="/TEST à zéro SIRVEN Website/js/admv.js"></script>
    <!--<script defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
    <script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
</head>

<body>
    <section id="selectCrud">
        <button id="btn_display_product">Afficher la liste des produits</button>
        <button id="btn_add_product">Ajouter un produit</button>
        <button id="btn_update_product">Modifier un produit</button>
        <button id="btn_delete_product">Supprimer un produit</button>
        <button id="btn_return_website">Retourner sur le site</button>
    </section>

    <form id="admin_form_add_product" action="#" method="post" name="admin_form_add_product" class="mb-2 text-center " role="group">
        <h2>Ajouter un produit</h2>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_nom">Nom du produit</label></br>
            <input type="text" name="produit_nom"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_image">Lien (URL) de l'image du produit</label></br>
            <input type="text" name="produit_image"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_prix">Prix du produit</label></br>
            <input type="text" name="produit_prix"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_desc">Entrer la description du produit</label></br>
            <textarea type="text" name="produit_desc"></textarea>
        </div></br>
        <input type="submit" name="productAddQuery" id="productAddQuery" value="Envoyer la requête d'ajout du produit"></input>
    </form>

    <form id="admin_form_update_product" action="#" method="post" name="admin_form_update_product" class="mb-2 text-center " role="group">
        <h2>Entrez l'ID du produit à modifier</h2>
        <div class="d-block p-2 bg-dark text-white">
            <label for="id_produits">Id du produit</label></br>
            <input type="text" name="id_produits"></input>
        </div>
        <h2>Modifier un produit</h2>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_nom">Nom du produit</label></br>
            <input type="text" name="produit_nom"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_image">Lien (URL) de l'image du produit</label></br>
            <input type="text" name="produit_image"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_prix">Prix du produit</label></br>
            <input type="text" name="produit_prix"></input>
        </div>
        <div class="d-block p-2 bg-dark text-white">
            <label for="produit_desc">Entrer la description du produit</label></br>
            <textarea type="text" name="produit_desc"></textarea>
        </div></br>
        <input type="submit" name="productUpdateQuery" id="productUpdateQuery" value="Envoyer la requête de mise à jour du produit"></input>
    </form>


    <form id="admin_form_delete_product" action="#" class="mb-2 text-center " role="group" method="POST">
        <h2>Supprimer un produit</h2>
        <div class="d-block p-2 bg-dark text-white">
            <label for="id_produits">Entrer l'identifiant du produit à supprimer:</label></br>
            <input type="number" name="id_produits"> </input>
        </div></br>
        <input type="submit" name="deleteProductQuery" id="deleteProductQuery" value="Envoyer la requête de suppression du produit"></input></br>
        </br>
        <div class="d-block p-2 bg-dark text-white">
            <input type="submit" name="delete_all_products" value="Supprimer tous les produits"></input>
        </div></br>
    </form>

    <div id="display_data"></div>

</body>
<footer>

</footer>