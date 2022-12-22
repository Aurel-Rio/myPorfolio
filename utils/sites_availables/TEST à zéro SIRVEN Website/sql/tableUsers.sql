CREATE TABLE `test0sirven`.`utilisateurs` (
    `id_utilisateur` INT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(25) NOT NULL,
    `prenom` VARCHAR(25) NOT NULL,
    `mail` VARCHAR(50) NOT NULL,
    `tel` INT(14) NOT NULL,
    `adresse` VARCHAR(50) NOT NULL,
    `cp` INT(5) NOT NULL,
    `ville` VARCHAR(35) NOT NULL,
    `mdp` TEXT NOT NULL,
    PRIMARY KEY (`id_utilisateur`)
) ENGINE = InnoDB CHARSET = utf8 COLLATE utf8_general_ci;