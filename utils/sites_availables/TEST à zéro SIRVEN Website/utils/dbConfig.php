
<?php

//----Configuration de l'accés à la base de données avec l'objet PDO----//

    class  MyDbConfig {
        private $host = "127.0.0.1";
        private $dbName = "test0sirven";
        private $userName = "root";
        private $password = "";
        public $connect;

        public  function getConnection() {
            $this->connect = null;
            try {
                $this->connect = new PDO("mysql:host=".$this->host."; dbname=".$this->dbName, $this->userName, $this->password);
                $this->connect->exec("set names utf8");
            } catch(PDOException $exception) {
                echo "Erreur de connexion".$exception->getMessage();
            }
            return $this->connect;
        }
    }
?>






