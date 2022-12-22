<?php
include_once('../utils/dbConfig.php');

class Users
{
    public $connect;
    private $tableUser = 'utilisateurs';
    private $id_utilisateurs;
    private $nom;
    private $prenom;
    private $mail;
    private $mailc;
    private $tel;
    private $adresse;
    private $cp;
    private $ville;
    private $mdp;
    private $mdpc;

    public function __construct()
    {
        $this->connect = new MyDbConfig();
        $this->connect = $this->connect->getConnection();
    }
	public function getId_utilisateurs(){
		return $this->id_utilisateurs;
	}

    public function getTableUser()
    {
        return $this->tableUser;
    }


    public function setMdpc($mdpc)
    {
        $this->mdpc = $mdpc;
    }


    public function setMailc($mailc)
    {
        $this->mailc = $mailc;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function setPrenom($prenom)
    {
        $this->prenom = $prenom;
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function setMail($mail)
    {
        $this->mail = $mail;
    }


    public function getTel()
    {
        return $this->tel;
    }

    public function setTel($tel)
    {
        $this->tel = $tel;
    }

    public function getAdresse()
    {
        return $this->adresse;
    }

    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;
    }

    public function getCp()
    {
        return $this->cp;
    }

    public function setCp($cp)
    {
        $this->cp = $cp;
    }

    public function getVille()
    {
        return $this->ville;
    }

    public function setVille($ville)
    {
        $this->ville = $ville;
    }

    public function getMdp()
    {
        return $this->mdp;
    }

    public function setMdp($mdp)
    {
        $this->mdp = $mdp;
    }



    // CRUD

    // Read pour récupérer la liste de tous les utilisateurs
    public function getUsers(){
    
        $myQuery = 'SELECT 
                            * 
                        FROM 
                            ' . $this->tableUser . '';
        $stmt = $this->connect->prepare($myQuery);
        $stmt->execute();
        return $stmt;
    }

    //Read d'un seul utilisateur 
    public function getSingleUser()
    {
        $myQuery = 'SELECT 
                            * 
                        FROM 
                            ' . $this->tableUser . '
                        WHERE
                            nom = :nom';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(":nom", $this->nom);
        $stmt->execute();
        return $stmt;
    }

    public function verifyMail()
    {
        $myQuery = 'SELECT 
                            *
                        FROM
                            ' . $this->tableUser . '
                        WHERE
                            mail = :mail';

        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(":mail", $this->mail);
        $stmt->execute();
        return $stmt;
    }
    
    public function createUser() {
        $myQuery = 'INSERT INTO
                            ' . $this->tableUser . '
                        SET
                        nom = :nom,
                        prenom = :prenom,
                        mail = :mail,
                        tel = :tel,
                        adresse = :adresse,
                        cp = :cp,
                        ville = :ville,
                        mdp = :mdp';
        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':nom', $this->nom);
        $stmt->bindParam(':prenom', $this->prenom);
        $stmt->bindParam(':mail', $this->mail);
        $stmt->bindParam(':tel', $this->tel);
        $stmt->bindParam(':adresse', $this->adresse);
        $stmt->bindParam(':cp', $this->cp);
        $stmt->bindParam(':ville', $this->ville);
        $stmt->bindParam(':mdp', $this->mdp);
        return $stmt->execute();
    }

    // UPDATE  -> NOM 
    public function updateUser()
    {
        $myQuery = 'UPDATE
                            ' . $this->tableUser . '
                        SET
                    
                        nom = :nom,
                        prenom = :prenom,
                        mail = :mail,
                        mailc = :mailc,
                        tel = :tel,
                        adresse = :adresse,
                        cp = :cp,
                        ville = :ville,
                        mdp = :mdp,
                        mdpc = :mdpc
                        WHERE
                            nom = :nom2';
        $stmt = $this->connect->prepare($myQuery);
        $stmt->bindParam(':nom', $this->nom);
        $stmt->bindParam(':prenom', $this->prenom);
        $stmt->bindParam(':mail', $this->mail);
        $stmt->bindParam(':mailc', $this->mailc);
        $stmt->bindParam(':tel', $this->tel);
        $stmt->bindParam(':adresse', $this->adresse);
        $stmt->bindParam(':cp', $this->cp);
        $stmt->bindParam(':ville', $this->ville);
        $stmt->bindParam(':mdp', $this->mdp);
        $stmt->bindParam(':mdpc', $this->mdpc);
        if ($stmt->execute) {
            return true;
        } else {
            return false;
        }
    }

    // DELETE -> NOM
    public function deleteUser()
    
    {/*
        $myQuery = 'DELETE FROM ' . $this->tableUser . ' WHERE nom = :nom';
        $stmt = $this->connect->prepare($myQuery);
     $stmt->bindParam(':nom', $this->nom);
        die(var_dump($stmt));
        if ($stmt->execute) {
            var_dump('iffifififif');
            return true;
        
        } else {
            var_dump('lese else');
            return false;

        }
        */
        $myQuerry = "DELETE FROM utilisateurs WHERE nom = '".$this->nom."'";
        $this->connect->exec($myQuerry);
    }
} 
?>