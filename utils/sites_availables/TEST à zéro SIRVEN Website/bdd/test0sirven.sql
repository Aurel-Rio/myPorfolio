-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 19 mai 2022 à 13:38
-- Version du serveur :  8.0.29-0ubuntu0.20.04.3
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test0sirven`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_utilisateur` int NOT NULL,
  `nom` varchar(25) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `tel` int NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `cp` int NOT NULL,
  `ville` varchar(35) NOT NULL,
  `mdp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_utilisateur`, `nom`, `prenom`, `mail`, `tel`, `adresse`, `cp`, `ville`, `mdp`) VALUES
(1, 'riozacki', 'rio', 'riozacki@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$ZijHQjMK.OWCcdX3Js1nJ.vcoWoLzxDojy6FWoZjunMNvb5IND7Cy'),
(2, 'as', 'as', 'as@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$WSISohFvv316fGh3SqCfHeqepv2zkAi465ZgE9xwXiowEOtcfkMda'),
(3, 'aa', 'aa', 'aa@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$3zpV58Juga78zABygIXOY.ytO9idd7.yQhhfCdXsc0pZwk6wt3jYK'),
(4, 'az', 'az', 'az@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$M9X7HRR3hATdp4dEzv4yieNTeU7rLyZZ0c56B1jJuLjNGuVJ6HSa2'),
(5, 'aze', 'aze', 'aze@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$0VDj5tLJz8Cpk5dnPShgfu.glQaw80pwC.65wBMVbbWYw5fZJR7Jy'),
(6, 'wx', 'wx', 'wx@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$bpMD0D1vUfnMG3ay7B75aOqBmknOO/HqPI09eNuoXvnUStDcSHuwO'),
(7, 'qs', 'qs', 'qs@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$Uh18CXfsYoa25Gg2K04/hulzeQj16GPlNMC8tlQE5dQi/o83Dfiie'),
(8, 'ui', 'ui', 'ui@gmx.com', 677523809, '2,rue de la côte', 9700, 'SAVERDUN', '$2y$10$qVWYARRqYW88dTVAZ2hMsuq10kIL254Dpc0txmaraJhZgLcDDM0y6');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_utilisateur` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
