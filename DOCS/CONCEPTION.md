# Cas de tests OpenCruise

Les cas de tests ci_dessous nous permettront de tester les différentes fonctionnalités du site OpenCruise.



**Connexion**
|---------|------------------------------------|----------------------------------|------------------ ------------------------------------|----------------------------|
| ID      | TITRE DU TEST                      | DESCRIPTION DU TEST              | TYPE DE CAS TEST | PREREQUIS                          | ATTENTES                   |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------|
| CT -001 | Connexion_Admin                    |Se connecter avec un identifiant  | Cas_Passant      | Données de connexion valides       | Admin est connecté         |
|         |                                    |    et un mot de passe valides    |                  |                                    |                            |
| CT -002 | Connexion_Admin                    |Se connecter avec un identifiant  | Cas_Non_Passant  | Données de connexion invalides     | Admin n'est pas connecté   |
|         |                                    | et un mot de passe invalides     |                  |                                    |                            | 
| CT -003 | Connexion_Part                     |Se connecter avec un identifiant  | Cas_Passant      | Données de connexion valides       | Utilisateur Part est       |
|         |                                    | et un  mot de passe valides      |                  |                                    |       connecté             |
| CT -004 | Connexion_Part                     |Se connecter avec un identifiant  | Cas_Non_Passant  | Données de connexion invalides     | Utilisateur part n'est pas |
|         |                                    | et un mot de passe invalides     |                  |                                    |       connecté             |
| CT -005 | Connexion_Pro                      |Se connecter avec un identifiant  | Cas_Passant      | Données de connexion valides       | Utilisateur pro est        |
|         |                                    | et un mot de passe valides       |                  |                                    |       connecté             |
| CT -006 | Connexion_Pro                      |Se connecter avec un identifiant  | Cas_Non_Passant  | Données de connexion invalides     | Utilisateur pro n'est pas  |
|         |                                    | et un mot de passe invalides     |                  |                                    |       connecté             |
| CT -007 | Connexion_Pro_avec_2nd_Représentant|Se connecter avec un identifiant  | Cas_Passant      | Données de connexion valides       | Utilistauer pro avec 2nd   |
|         |                                    | et un mot de passe valide        |                  |                                    | représentant est connecté  |
| CT -008 | Connexion_Pro_avec_2nd_Représentant|Se connecter avec un identifiant  | Cas_Non_Passant  | Données de connexion invalides     | Utilisateur pro avec 2nd   |
|         |                                    | et un mot de passe valides       |                  |                                    | représentant n'est connecté|
| CT -009 | Conexion_Compte_Bloqué             |Se connecter avec les identifiants| Cas_Non_Passant  | Données de connexion d'un          | Compte n'est connecté      |
|         |                                    | et un mot de passe compte bloqué |                  |   compte bloqué                    |                            |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------| 


**Inscription**
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------|
| ID      | TITRE DU TEST                      | DESCRIPTION DU TEST              | TYPE DE CAS TEST | PREREQUIS                          | ATTENTES                   |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------|
| CT -010 | Inscription_Part                   |S'inscrire avec des données       | Cas_Passant      | Données d'inscription valides      | compte utilisateur part    |
|         |                                    | nécessaires valides              |                  |                                    |  créé                      |
| CT -011 | Inscription_Part                   |S'inscrire en ommettant des       | Cas_Non_Passant  | Données d'inscription invalides    | Compte utilisateur part    |
|         |                                    | mentions obligatoires            |                  |                                    |  non créé                  | 
| CT -012 | Inscription_Pro                    |S'inscrire avec des données       | Cas_Passant      | Données d'inscription valides      | compte utilisateur pro     |
|         |                                    | nécessaires valides              |                  |                                    |   créé                     |
| CT -013 | Inscription_Pro                    |S'inscrire avec des données       | Cas_Non_Passant  | Données d'inscription invalides    | compte utilisateur pro     |
|         |                                    | invalides                        |                  |                                    |  n'est pas créé            |
| CT -014 | Inscription_Pro                    |S'inscrire avec des mentions      | Cas_Passant      | Données d'inscription valides      | compte uilisateur pro      |
|         |                                    | obligatoires non remplies        |                  |                                    |  n'est pas créé            |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------| 



**Rechderche de Croisière**
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------|
| ID      | TITRE DU TEST                      | DESCRIPTION DU TEST              | TYPE DE CAS TEST | PREREQUIS                          | ATTENTES                   |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------|
| CT -015 |Rechercher_Croisière_par_Date       |Chercher une croisière par date   | Cas_Passant      | Etre connecté,avoir les dates      |Affichage des croisières    |
|         |                                    |                                  |                  | références                         |correspondants aux dates    |
|         |                                    |                                  |                  |                                    |                            |
| CT -016 |Rechercher_Croisière_par_Destination|Chercher une croisière par        | Cas_Passant      | Etre connecté, avoir une           |Affichage des croisières cor|
|         |                                    |destination                       |                  | destination cible                  |respondant à la destination |
|         |                                    |                                  |                  |                                    |                            |
| CT -017 |Rechercher_Croisière_par_Destination|Chercher une croisière par        | Cas_Non_Passant  | Avoir une destination cible        | Message d'erreur           |
|         |                                    |destination inexistant            |                  |                                    |                            |
| CT -018 |Rechercher_Croisière_par_Mots-clés  |Chercher une croisière par mots   | Cas_Passant      |Etre connecté, avoir des mots clés  |Affichage des croisières    |
|         |                                    |clés                              |                  |                                    |correspondant               |
|         |                                    |                                  |                  |                                    |                            |
| CT -019 |Rechercher_Croisière_par_Mots-clés  |Chercher une croisière par mots   | Cas_Non_Passant  | Etre connecté, avoir des mots clés | Message d'erreur           |
|         |                                    |clés ne se rapportant à aucune    |                  |                                    |                            |
|         |                                    |crosisière                        |                  |                                    |                            |
| CT -020 |Filtrer_Résultats_de_Recherche      |Affiner les résultats d'une       | Cas_Passant      | Données de connexion valides       |Affichage des croisières    |
|         |                                    |recherche                         |                  |                                    |correspondant aux
|    |
|---------|------------------------------------|----------------------------------|------------------|------------------------------------|----------------------------| 





CT 015 Recherche_Croisière_par_Date_Cas_Non_Passant

Chercher une croisière avec une date passée / avoir les dates références  / la page affiche les croisières correspondants aux dates

CT 016 _Cas_Passant

 /   / 






CT 018 _Cas Passant

 / / 

**Choix de Crosiière**

CT 019 Sélection_de_Crosiière_Cas_Passant

Sélectionner une croisière / identifié une croisière / le site affiche la croisière sélectionnée

CT 020 Vérification_des_Détails_d'une_Croisière_Cas_Passant

Afficher les détails d'une croisière / avoir sélectionné une croisière / le site affiche tous les détails de la croisière

**Réservation de Croisière**

CT 021 Vérification_du_Formulaire_de_Réservation_Cas_Passant

Vérifier que le formualire contient tous les renseignements spécifiés / avoir affiché les détails d'une croisière / tous les renseignements sont présens sur le formulaire

CT 022 Saisi_du_Formulaire_de_Réservation_Cas_Passant

Saisir tous les renseignements du formulaire avec des données valides / avoir des données valides 

CT 023 Saisi_du_Formulaire_de_Réservation_Cas_Non_Passant

Saisir tous les renseignements du formulaire avec des données invalides / avoir des données invalides / le site affiche des erreurs de saisie

CT 024 Validation_du_Formualire_Rempli_Cas_Passant

**Promotion**

CT 025 Ajout_d'une_Promotion_de_type_Senior_Cas_Passant

Ajouter une promotion sénior / Avoir remplir le forumualire avec un age senior / le site ajoute la promotion

CT 026 Ajout_d'une_Promotion_de_type_Senior_Cas_Non_Passant

Ajouter une promotion sénior avec un age non senior / Avoir remplir le forumualire avec un age non senior / le site n'ajoute pas la promotion

CT 027 Ajout_d'une_Promotion_de_type_Couple_Cas_Passant

Ajouter une promotion Couple / Avoir remplir le forumualire en cochant option couple / le site ajoute la promotion

CT 028 Ajout_d'une_Promotion_de_type_Couple_Cas_Non_Passant

Ajouter une promotion couple en étant une personne seule / Avoir remplir le forumualire en precisant etre seul / le site n'ajoute pas la promotion

CT 029 Ajout_d'une_Promotion_de_type_Personne_Seule_Partage_de_Cabine_Cas_Passant

Ajouter une promotion Seul partageant Cabine / Avoir remplir le forumualire en cochant option partage de cabine / le site ajoute la promotion

CT 030 Ajout_d'une_Promotion_de_type_Personne_Seule_Partage_de_Cabine_Cas_Non_Passant

Ajouter une promotion Personne seule partageant cabine / Avoir remplir le forumualire sans seletionner l'option partage de cabine / le site n'ajoute pas la promotion

CT 031 Ajout_d'une_Promotion_de_type_Groupe_Cas_Passant

Ajouter une promotion groupe / Avoir remplir le forumualire en cochant option groupe / le site ajoute la promotion

CT 032 Ajout_d'une_Promotion_de_type_Groupe_Cas_Non_Passant

Ajouter une promotion Groupe / Avoir remplir le forumualire sans selectionner groupe / le site n'ajoute pas la promotion

**Panier**

CT 033 Affichage_du_Panier_vide_Cas_Passant

Afficher le panier vide / etre connecté / le site affiche le panier sans réservation

CT 034 Validation_de_Panier_Vide_Cas_Non_Passant

Valider un panier vide / avoir affiché un panier vide / le site affiche un message d'erreur

CT 035 Affichage_du_Panier_avec_Réservation_Cas_Passant

Afficher le panier contenant des réservations / etre connecté, avoir choisir et validé des croisières / le site affiche le panier avec les croisières 

CT 036 Modification_du_Panier_Cas_Passant

Modifier les croisières contenues dans le panier / avoir sélectionné la réservation à modifier / le site enregistre les modifications

CT 037 Suppression_Réservations_du_Panier_Cas_Passant

Supprimer une croisière dans le panier / avoir sélectionné la réservation / le site supprime la réservation

**Paiement**

CT 038 Paiement_Par_Carte_Bancaire_Cas_Passant

Paire ma réservation par carte bancaire / avoir une carte bancaire valide / le site valide le paiement

CT 039 Paiement_Par_Carte_Bancaire_Cas_Non_Passant

Paire ma réservation par carte bancaire invalide / avoir une carte bancaire invalide / le site refuse le paiement

CT 040 Confirmation_de_Paiement_Cas_Passant


**Gestion de compte**

CT 041 Validation_d'un_compte_utilisateur_Cas_Passant

Valider un nouveau compte utilisateur / etre connecté avec un compte admin / le site debloque le compte

CT 042 Blocage_d'un_compte_utilisateur_Cas_Passant

Bloquer un compte utilisateur / etre connecté avec un compte admin / le site bloque le compte

CT 013 Réinitialisation_mot_de_passe_Cas_Passant

Générer un nouveau mot de passe / avoir un mot de passe au bon format / mot de passe réinitialisé

CT 014 Réinitialisation_mot_de_passe_Cas_Non_Passant

Générer un nouveau mot de passe sans respecter le format requis / avoir un mot de passe au mauvais format / mot de passe non réinitialisé

**Gestion de croisière**

CT 043 Publication_de_croisière_Cas_Passant

Publier une croisière / Avoir les données sur la croisière / le site affiche la croisière publiée

CT 044 Publication_de_croisière_Cas_Non_Passant

Publier une croisière en ommetant des mentions obligatoires/ Avoir les données sur la croisière / le site affiche un message d'erreur et ne publie pas la croisière

CT 045 Modification_de_croisière_Cas_Passant

Modifier une croisière / Avoir les données sur la croisière / le site modifie la croisière

CT 046 Suppression_de_croisière_Cas_Passant

Supprimer une croisière / avoir sélectionné la croisière cible / le site supprime la croisière
