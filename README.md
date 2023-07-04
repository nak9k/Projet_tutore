# Projet_tutore

**Réalisation de tests sur OpenCruise**

Ce projet a pour but de tester les différentes fonctionnalités du site OpenCruise.

**Technologie**

Les tests WEB que nous aurons à réaliser dans le cadre du présent projet se feront avec Cypress.
Cypress est un framework javascript de test bout-en-bout pour les applications web sous Windows, Linux et macOs.

**Choix de cette Technologie**

Nous avons choisir de recourir à ce framework car il présente l'avantage:
D'une grande facilité d'installation,

une rapidité d’exécution : le navigateur lancé qui exécute les tests étant à l’écoute du fichier Javascript décrivant les tests, un enregistrement de fichier suffit à relancer les tests du fichier,

Inexistance de dépendance externe : Full Javascript,

Inexistence de dépendance avec le code : on pourrait très bien s’amuser à tester une application sur un environnement de recette,

Il propose une sauvegarde de l’état du DOM à chaque étape : on peut ainsi s’assurer que les bons éléments s’affichent à une étape précise de la navigation,

Il propose également un service de tableau de bord pour gérer les tests et faciliter l’intégration continue (enregistrements vidéo, capture d’écran, logs, etc.).


**Environnemnts de Tests**

- https://opencruise-ok.sogeti-center.cloud  (version V1.1.0 de l'application)  
  
- https://opencruise-ko.sogeti-center.cloud  (nouvelle version V1.2.0 de l'application à qualifier) 



**Fonctionnalités à tester sur OpenCruise**

- Connexion
- Inscription
- Déconnexion
- Reinitialisation de mot de passe
- Gestion de compte
- Page d'Acceuil
- Recherche d'une croisière
- Affinage des résultats d'une recherche
- Affichage des détails d'une croisière
- Réservation d'une croisière
- Promotion
- Panier
- Paiement


