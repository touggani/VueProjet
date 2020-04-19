Explication du projet Vuejs

Notre site web, réalisé avec la technologie vue, consiste à répertorier des films et autres productions cinématographique. Nous devions offrir à l'utilisateur un simple accès à ces oeuvres.
Pour cela, nous avons utilisés une api nommé The movie DataBase (TMDB): https://developers.themoviedb.org/3/getting-started/introduction.

Notre site est découpé en differentes catégories:

1- Composant Menu
Ce composant est utilisé dans toute les pages. Il permet à l'utilisateur de se deplacer plus simplement sur le site.



2- L'accueil
Composant vue 
Pour y accéder il suffit de lancer le localhost. Son lien route est: '/'. Cette page présente briévement le concept du site web.



3- Les films

ListeFilm: Composant vue
Le lien route pour accéder à cette page est: '/liste-film'. Ce composant affiche tous les films appelés de l'API.
Concept utilisés:
    - Appel d’une API REST
    - Gestion des succès et erreurs
    - Formatage des données reçues
    - Configuration du router
    - Navigation à l’aide de routes entre composants
    - Passage de paramètres/props/query intelligent entre les routes
    - Utilisation intelligente des directives (v-for, v-if, v-model... )
    - Bonne utilisation des computed, methods, filtres, created
    - Utilisation intelligente des composants
    - Liaison de données
    - Rendu déclaratif des variables

DetailFilm: Composant vue
Le lien route pour accéder à cette page est: '/detail-film/{id-film}'. Cette page affiche plus detail sur le film selectionné sur la page ListeFilm. Nous avons des informations tels que le nom du film, sa durée, ses genres, son affiche, sa bande-annonce, son résumé ...
Concept utilisés:
    - Appel d’une API REST
    - Gestion des succès et erreurs
    - Formatage des données reçues
    - Configuration du router
    - Navigation à l’aide de routes entre composants
    - Passage de paramètres/props/query intelligent entre les routes
    - Utilisation intelligente des directives (v-for, v-if, v-model... )
    - Bonne utilisation des computed, methods, filtres, created
    - Utilisation intelligente des composants
    - Liaison de données
    - Rendu déclaratif des variables

