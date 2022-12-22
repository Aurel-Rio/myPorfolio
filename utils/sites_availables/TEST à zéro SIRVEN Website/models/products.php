<?php
include_once('../utils/dbConfig.php');
class Produits
{
    public $connect;
    private $tableProduct = 'produits';
    private $id_produits;
    private $produit_nom;
    private $produit_image;
    private $produit_prix;
    private $produit_desc;

    public function __construct()
    {
        $this->connect = new MyDbConfig();
        $this->connect = $this->connect->getConnection();
    }
    public function getTableProduct()
    {
        return $this->tableProduct;
    }

    public function setTableProduct($tableProduct)
    {
        $this->tableProduct = $tableProduct;
    }

    public function getId_produits()
    {
        return $this->getId_produits();
    }

    public function setId_produits($id_produits)
    {
        $this->id_produits = $id_produits;
    }

    public function getProduit_nom()
    {
        return $this->produit_nom;
    }

    public function setProduit_nom($produit_nom)
    {
        $this->produit_nom = $produit_nom;
    }

    public function getProduit_image()
    {
        return $this->produit_image;
    }

    public function setProduit_image($produit_image)
    {
        $this->produit_image = $produit_image;
    }

    public function getProduit_prix()
    {
        return $this->produit_prix;
    }

    public function setProduit_prix($produit_prix)
    {
        $this->produit_prix = $produit_prix;
    }

    public function getProduit_desc()
    {
        return $this->produit_desc;
    }

    public function setProduit_desc($produit_desc)
    {
        $this->produit_desc = $produit_desc;
    }

    public function addProduct()
    {
        $myQuery = 'INSERT INTO 
                     ' . $this->tableProduct . '
                    SET
                    produit_nom = :produit_nom,
                    produit_image = :produit_image,
                    produit_prix = :produit_prix,
                    produit_desc = :produit_desc';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':produit_nom', $this->produit_nom);
        $stmt->bindParam(':produit_image', $this->produit_image);
        $stmt->bindParam(':produit_prix', $this->produit_prix);
        $stmt->bindParam(':produit_desc', $this->produit_desc);
        return $stmt->execute();
    }

    public function displayProduct()
    {
        $myQuery = 'SELECT 
                        *
                    FROM 
                        ' . $this->tableProduct . '';
        $stmt = $this->connect->prepare($myQuery);
        $stmt->execute();
    }

    public function displayProductById()
    {
        $myQuery = 'SELECT 
                    FROM 
                        ' . $this->tableProduct . '
                         WHERE  id_produits = :id_produits ';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':id_produits', $this->id_produits);
        $stmt->execute();
    }

    public function deleteProduct()
    {
        $myQuery = 'DELETE FROM ' . $this->tableProduct . '
                    WHERE  id_produits = :id_produits ';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':id_produits', $this->id_produits);
        $stmt->execute();
    }

    public function deleteProductAll()
    {
        $myQuery = 'DELETE  FROM ' . $this->tableProduct . '';
        $stmt = $this->connect->prepare($myQuery);
        $stmt->execute();
    }

    public function updateProduct()
    {
        $myQuery = 'UPDATE
                        ' . $this->tableProduct . ' 
                    SET
                    produit_nom = :produit_nom,
                    produit_image = :produit_image,
                    produit_prix = :produit_prix,
                    produit_desc = :produit_desc
                    WHERE
                    id_produits = :id_produits ';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':id_produits', $this->id_produits);
        $stmt->bindParam(':produit_nom', $this->produit_nom);
        $stmt->bindParam(':produit_image', $this->produit_image);
        $stmt->bindParam(':produit_prix', $this->produit_prix);
        $stmt->bindParam(':produit_desc', $this->produit_desc);
        return $stmt->execute();
    }
}
