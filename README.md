# Calendes
Des calendriers comme s'il en pleuvait

# Choix du sujet

Nous utilisons régulièrement des calendriers pour gérer nos emplois du temps, rendez-vous et autres mementos et dates importantes dans notre vie quotidienne. Ce type d'application est utile pour nous car nous permet de ne plus avoir la charge mentale de se souvenir des dates.
Nous pensons que ce sujet est intéressant car il concerne un grand nombre d'utilisateurs potentiels que ce soit des entreprises, des professionnels ou des particuliers.
Nous avons notamment l'exemple de l'emploi du temps de l'utt et nous pensons que des améliorations plus responsables de l'environnement sont possibles.
- plus pratique que edt.utt
- grande et large (pro et privée) utilisation

# Utilité sociale

Dans le monde actuel où chaque minute est compté, le calendrier est un outil indispensable et nécessaire au bon fonctionnement de la société, des entreprises et des personnes. 
Il permet d'améliorer la productivité et l'organisation à toutes les échelles en gérant soi-même son emploi du temps, le partageant avec d'autres personnes ou en créant des évenements partagés.
Les emplois du temps ne concernent pas uniquement les individus mais aussi les ressources. Ainsi une application efficace permet aussi de faciliter l'utilisation et la gestion des ressources.
Ils ont une telle importance qu'ils unifient les individus et les organisations à travers le monde sur une donnée : le temps.
Ils permettent aux individus de se rappeler de l'anniversaire d'un proche, d'un rendez-vous chez le médecin.
Ils permettent aux entreprises de planifier, de donner des deadlines, de gérer l'organisation de projet.
- organisation gloable et coordination
- pouvoir se projeter dans l'avenir (s'organiser, planifier des projets, faire des plans d'action)
- unification du temps mondial

# Effets de la numérisation

La numérisation a eu un impact important sur les emploi du temps : 
l'impact le plus évident est la substitution des agendas papier pour des applications, un agenda se garde désormais à travers les années.
Ils nécessitent désormais des comptes et sont accessibles depuis n'importe où avec un accès à un internet.
Ce changement a aussi eu pour conséquence un plus grande convivialité, facilitant le partage ou même la modification d'un évènement ou d'un emploi du temps.
Comme dans beaucoup de domaines, la numérisation a aussi apporté un plus grand contrôle, permettant à chacun de modifier les réglages pour adapter son agenda à ses préférences. D'autres changements sont aussi la rapidité d'accessibilité et les notifications des agendas modernes qui entraine une certaine aliénation de la vie quotidienne à la technologie

- visibilité par plus de monde de son calendrier (partage simplifié)
- plus de options/d'information
- marche pour tout le temps
- disponible rapidement
- rappel/notification
- concentration de données sensibles
- moins d'utilisation de papier
- aliénation de la vie quotidienne à la technologie


# Scenarios

Chargement de la page :
1. Utilisateurs ouvre le site
2. Les évènement s'affichent immédiatement
  
Consulter la page :
1. Utilisateurs ouvre le site
2. Une synthèse visuelle immédiate lui donne une vision claire de son emploi du temps
  
Choisir un évènement :
1. L'utilisateur repère l'événement qui l'intéresse dans la vue "Semaine actuelle" ou "Semaines prochaines"
2. Il clique sur l'événement souhaité
3. Le module "Création/Modification" se met à jour automatiquement pour afficher tous les paramètres et les boutons d'action deviennent actifs ("Modifier", "Supprimer")

Mofidier l'évènement : 

1. Après avoir sélectionné l'événement (scénario 3), l'utilisateur ajuste les informations qu'il souhaite changer; champs texte, date et récurrence;

Sauvegarder les modifications :

1. L'utilisateur clique sur le bouton "Sauvegarder" après avoir effectué ses modifications
2. L'événement modifié apparaît immédiatement dans les vues "Semaine actuelle" et "Semaines prochaines"

# Impact environnemental des scénarios sur les sites actuels

L'EcoIndex d'une page (de A à G) est calculé en fonction du positionnement de cette page parmi les pages mondiales concernant :

- la complexité de la page(structure et élements),
- le poids des données transférées,
- le nombre de requêtes HTTP
  
Nous avons choisi de comparer l'impact des scénarios sur divers site d'agenda en ligne : monedt.utt.fr, Google Agenda et Cozi, dont [voici les résultats](EcoIndex.md)
La conclusion est que plus les interfaces sont visuellement complexes, plus leur impact sur l'environnement est négatif.

## Modèle économique

| Service | modèle économique | Particularité
| --- | --- | ---
| google agenda | <ul><li>Produit d'appel </li><li>autre? (opaque)</li></ul> | L'outil s'intègre dans un écosystème, cet outil permet de renforcer l'emprise de la compagnie sur les utilisateurs 
| zimbra.utt | <ul><li> outil openSource</li><li>Autre? (opaque)</li></ul> | Il y a des coûts d'hébergements et d'entretiens
| Cozi | <ul><li>Publicités </li><li>abonnement</li></ul> | l'entreprise fait du profit soit par le revenu généré par les pubs, soit par les revenus des abonnées premium
Tab.1 : Mesure de l'EcoIndex moyen de divers services d'agenda

Google Agenda : Le produit est gratuit et ne présente pas de source de  revenu, il s'agit d'un produit d'appel pour l'ecosystème Google.

zimbra.utt : Encore une fois ce service ne présente pas de source de revenu car il est nécessaire et donc fournit par l'université. L'université est elle financé par différentes sources comme les inscriptions ou les subventions publiques

cozi : C'est le produit d'une entreprise. C'est un produit freemium, c'est-à-dire qu'il est utilisable gratuitement mais possède une version premium payante. En cas d'utilisation gratuite, l'entreprise vend de la publicité.

Les agendas sont un produit simple, Les utilisateurs attendent donc qu'ils soient gratuits et grandement accessibles. Pour ces raisons, on constate différents modèles :

- un accès gratuit avec un outil inclus dans un écosystème
- un accès Freemium avec des publicités ou un abonnement payant

On peut trouver une grande quantité d'agenda électronique, c'est donc un secteur très concurrentiel. Ce secteur est cependant dominé par un petit nombre de grands acteurs qui incluent l'agenda dans un ecosystème d'outils.
Les plus petits acteurs doivent donc trouver un moyen de se différencier. Pour ce faire, il peuvent cibler un public spécifique, développer des fonctionnalités spécifiques et essayer de s'intégrer à l'utilisation des outils plus populaires. Cozi, par exemple, cible en particulier les familles, ils ont pour cela développer des fonctionnalités ciblées comme des listes de courses ou de recttes. Ils ont aussi permis d'intégrer leur agendas à d'autres applications avec le format ical. De cette manière, ils n'essayent pas forcément de concurrencer google agenda mais se permettent aussi de s'intégrer à cet outil.

Nous pensons que simplement rajouter un outil à la liste existante serait contradictoire avec l'objectif de réduire l'impact écologique. Notre objectif sera donc de proposer des améliorations aux services déjà existants.

# Structure de l'application et des données

## Structure des données 

Pour notre application, nous avons pour l'instant identifié trois ressources : les comptes, les agendas et les évènements.
Les comptes sont liés à l'utilisateur, ils permettent de l'identifier et d'acceder ses données. Ils sont liés à un seul agendas. ils auront une http-URI avec pour chemin /{compte_id}
Les agendas sont liés à un compte, il s'agit d'une liste d'évènements. ils auront une http-URI avec pour chemin /{compte_id}/agenda
Les évènements sont liés à un agenda, il se composent d'attributs comme date.heure de début et de fin, titre, description, récurrence. Ils auront une http-URI avec pour chemin /{compte_id}/agenda/nom_evenement_{num}

## Maquette de l'interface

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface :

<img width="831" height="481" alt="calendes drawio" src="https://github.com/user-attachments/assets/0968b6d7-ed61-4578-af3a-0df45ecf9006" />
Fig.1: Maquette de l'inerface

L'interface est divisée en trois parties distinctes:
- "Semaine actuelle" est une visualisation des événements de la semaine actuelle. Ces événements sont affichés sur la plage horaire où ils ont lieu, avec leur titre. Les événements avec un fond plein sont des événements dit "récurrents", ils se répètent tous les x unité de temps. Au contraire, les événements éphémères de la semaine sont présentés avec sans fond, qu'avec un contour.
- "Semaines prochaines" est une liste d'événements ponctuels qui arrivent dans les semaines qui suivent. Ces événements sont présentés sous forme d'une liste déroulante dans l'ordre chronologique.
- "Création/Modification" est l'outil principal. Sans sélection d'un événement déjà présent, il permet d'en créer un avec un titre, une date et heures, une récurrence s'il y en a une, un lieu et des informations connexes écrites. Si un événement est sélectionné, il permet de visualiser les détails de cet événement et de pouvoir les modifier.


## Premier prototype

Pour notre première version, nous avons décidé d'écrire l'intégralité du code en HTML pur pour bien structurer la page vis-à-vis de la maquette. Pour cette première version du prototype l'échantillon de données est chargé àl'intéreur du  code de manière statique et les fonctionnalités implémentées ne sont que celles nécessaires pour suivre le scénario prioritaire (Consulter la page).

<img width="831" height="481" alt="calendes premier prototype" src="https://github.com/user-attachments/assets/86bb4f3e-3e17-4da8-8862-14d1a81c63e4" />


Fig.2 : Prototype de la page principale

Ce premier site a posé plusieurs problèmes. Le premier, qui a été réglé dans la partie d'après, est la non-intéractivité du site : les ajouts/modifications/suppressions d'évènements ne se sont pas ; le tableau n'est pas responsive par rapport aux boîtes d'évènement. Le second problème principal est le fait que les évènements ne peuvent se mettre que par plage de 2h (les évènements de 10h05, 10h50, 11h12 et 11h52 sont tous dans la boîte 10h-12h). Il a été décidé, pour palier à ce problème, d'ordoner chronologiquement les évènements au sein de la boîte dans la suite.


## Second prototype / Passage au React

Après avoir fait notre premier prototype, nous avions deux choix : passer par une bibliothèque avec notre code actuel ou passer maintenant en React. Nous avons décidé de recommencer le code avec du React. Ce changement nous a permis plus efficacement de trier et mettre les données dans les tableaux. 
Cependant, certaines choses sont resté comme par exemple la mise en page, les couleurs et notre idée de minimalisme (pas de photographies, des données affichées minimales et une interface épurée).

Avec le prototype actuel, il est possible d'obtenir une première estimation de l'impact écologique du frontend. Certes, le chargement dynamique des données n'est pas encore présent, mais nous avons déjà la possibilité d'évaluer l'effet de l'affichage des données et du framework. Cette analyse de l'impact (cf. Tab.3) est déjà prometteuse en mode "développement", mais surtout en mode "pré-production". Nous évaluons ici l'impact bénéfique de l'utilisation d'outils de développement Web comprenant la ["minification"](https://fr.wikipedia.org/wiki/Minification) (voir Wikipédia) du code d'une part, et la combinaison du code et des feuilles de style d'autre part.

| |EcoIndex|GES (gCO2e)|Taille du DOM|Requêtes|Taille de la page (ko)|
|---|---|---|---|---|---|
|Mode "pré-production"|80 A 🟢 |1.39|212|5|1379|
|Mode "développement"|76 B 🟢 |1.47|170|18|2485|

Tab.2 Mesure de l'EcoIndex moyen de notre prototype, dans le cadre du scénario principal

## Passage à l'échelle

Nous pouvons maintenant observer ce que le passage à l'échelle aura comme impact sur l'application.

Dans notre cas, ce passage à l'échelle passera par une augmentation du nombre d'évènement. En effet, après une utilisation continue, l'utilisateur aura mis tous ses événements et les événements passés seront toujours enregistré dans les données. Cela aura pour conséquence d'augmenter linéairement le volume de données et aura une influence négative sur l'impact écologique de notre site.
Nous estimons que cette augmentation sera en effet linéaire. En effet, nous considérons que chaque semaine correspond à un nombre à peu près fixe de nouveaux évènements.

Nous voulons donc, afin d'observer cette tendance, automatiser l'évaluation de notre site par l'outil EcoIndex :

### Évolution de l'EcoIndex lors du passage à l'échelle

Nous pouvons récolter et consulter les mesures nécessaires à la production de l'EcoIndex, [avant](https://github.com/UTT-GL03/Calendes/actions/runs/19237856405) et [après](https://github.com/UTT-GL03/Calendes/actions/runs/19238831912).

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Chargement de la page			 | 83 A 🟢 <br/> 44 D 🟡 | 1.34<br/>2.12  | 176 <br/> 2843 | 3       | 207.31<br/> 207.31
| 2. Consulter la page 	             | 83 A 🟢 <br/> 39 D 🟡 | 1.34<br/>2.22  | 176 <br/> 2843 | 5       | 214.819<br/> 1143.014
| 3. Choisir un évènement			 | 83 A 🟢 <br/> 39 D 🟡 | 1.34<br/>2.22  | 178 <br/> 2845 | 5       | 214.819<br/> 1143.014
| 4. Modifier l'évènement            | 83 A 🟢 <br/> 39 D 🟡 | 1.34<br/>2.22  | 178 <br/> 2845 | 5       | 214.819<br/> 1143.014
| 5. Sauvegarder les modifications   | 83 A 🟢 <br/> 39 D 🟡 | 1.34<br/>2.22  | 176 <br/> 2843 | 5       | 214.819<br/> 1143.014

Tab.3 : Tableau de l'évolution de l'écoindx après le passage à l'échelle

Le passage à l'échelle montre bien l'augmentation du DOM de la page passant de 176 à 2 843 ainsi que le poids de la page passant de 215 Ko à 1 143 Ko à l'ouverture.

### Mesure de la consommation énergétique liée à la consultation

#### Première mesure avec couchDB

MEASUREMENTS
|  (index)                 | cpu (s)    | écran (s) | temps total (s)  | memoire (Bits)   | disk (Bits) | réseau (Bits) |
|--------------------------:|-----------:|-----------:|--------------:|----------:|---------:|------------:|
| greenframe-runner         | 0.0602   | 16.9     | 18.1        | 1.22e+8 | 0.00   | 2.27e+5   |
| calendes-static_hosting-1 | 0.000193 | 0.00     | 17.7        | 5.52e+6 | 0.00   | 2.27e+5   |
| calendes-backend-1        | 0.0391   | 0.00     | 17.7        | 1.02e+8 | 0.00   | 25.0      |

ESTIMATES
| (index)                   | cpu (Wh)    | mémoire (Wh)    | disk (Wh) | réseau (Wh) | écran (Wh) | total (Wh) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 0.00075   | 0.000045  | 0.0     | 0.0012     | 0.066     | 0.068    |
| calendes-static_hosting-1 | 0.0000034 | 0.0000028 | 0.0     | 0.0012     | 0.0       | 0.0012   |
| calendes-backend-1        | 0.00068   | 0.000051  | 0.0     | 1.3e-7     | 0.0       | 0.00074  |

Tab.4: mesure et estimations de la consommation énergétique après l'implémentation de couchDB

L'empreinte estimée est de 30.813 mg eq. co2 ± 1.9% (69.713 mWh).

Cette première mesure de la consommation a été faite après l'implémentation de la base de donnée à distance avec couchDB.


#### Mesure sur notre application complètement fonctionnelle 

MEASUREMENTS
| (index)                   | cpu (s)    | écran (s) | temps total (s) | mémoire (B)   | disk (B) | réseau (B) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 0.194    | 17.7     | 19.1        | 1.41e+8 | 0.00   | 1.62e+6   |
| calendes-static_hosting-1 | 0.000176 | 0.00     | 18.8        | 5.57e+6 | 0.00   | 2.28e+5   |
| calendes-backend-1        | 0.137    | 0.00     | 18.8        | 9.84e+7 | 0.00   | 1.39e+6   |

ESTIMATES
| (index)                   | cpu (Wh)    | mémoire (Wh)    | disk (Wh) | réseau (Wh) | écran (Wh) | total (Wh) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 0.0024    | 0.000054  | 0.0     | 0.0083     | 0.069     | 0.080    |
| calendes-static_hosting-1 | 0.0000031 | 0.0000030 | 0.0     | 0.0012     | 0.0       | 0.0012   |
| calendes-backend-1        | 0.0024    | 0.000052  | 0.0     | 0.0071     | 0.0       | 0.0096   |

Tab.5: mesure et estimations de la consommation énergétique sur application v1.0.0

L'empreinte estimée est de 39.994 mg eq. co2 ± 0.6% (90.485 mWh).

#### Mesure après multiplication des données par 10

MEASUREMENTS
| (index)                   | cpu (s)    | écran (s) | temps total (s) | mémoire (B)   | disk (B) | réseau (B) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 1.25     | 20.8     | 22.1        | 1.78e+8 | 0.00   | 1.56e+7   |
| calendes-static_hosting-1 | 0.000196 | 0.00     | 21.8        | 5.54e+6 | 0.00   | 2.28e+5   |
| calendes-backend-1        | 1.05     | 0.00     | 21.8        | 1.54e+8 | 0.00   | 1.54e+7   |

ESTIMATES

| (index)                   | cpu (Wh)    | mémoire (Wh)    | disk (Wh) | réseau (Wh) | écran (Wh) | total (Wh) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 0.016     | 0.000079  | 0.0     | 0.080      | 0.081     | 0.18     |
| calendes-static_hosting-1 | 0.0000034 | 0.0000034 | 0.0     | 0.0012     | 0.0       | 0.0012   |
| calendes-backend-1        | 0.018     | 0.000095  | 0.0     | 0.079      | 0.0       | 0.097    |

Tab.6: mesure et estimations de la consommation énergétique avec 10 foix plus de données

L'empreinte estimée est de 121.64 mg eq. co2 ± 0.1% (275.203 mWh).


#### Mesure après tri chronologique des événements

MEASUREMENTS
| (index)                   | cpu (s)    | screen (s) | totalTime (s) | mem (B)   | disk (B) | network (B) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 1.49     | 20.9     | 22.1        | 1.78e+8 | 0.00   | 1.57e+7   |
| calendes-static_hosting-1 | 0.000193 | 0.00     | 21.8        | 5.54e+6 | 0.00   | 2.29e+5   |
| calendes-backend-1        | 1.10     | 0.00     | 21.8        | 1.54e+8 | 0.00   | 1.55e+7   |

ESTIMATES

| (index)                   | cpu (Wh)    | mem (Wh)    | disk (Wh) | network (Wh) | screen (Wh) | total (Wh) |
|--------------------------:|------------:|------------:|----------:|-------------:|------------:|-----------:|
| greenframe-runner         | 0.019     | 0.000079  | 0.0     | 0.080      | 0.081     | 0.18     |
| calendes-static_hosting-1 | 0.0000034 | 0.0000034 | 0.0     | 0.0012     | 0.0       | 0.0012   |
| calendes-backend-1        | 0.019     | 0.000095  | 0.0     | 0.079      | 0.0       | 0.099    |

Tab.7: mesure et estimations de la consommation énergétique avec tri chronologique des données

L'empreinte estimée est de 123.824 mg eq. co2 ± 0.3% (280.144 mWh).


## Bilan et Perspectives

Lors de ce cours, nous avons utilisé GreenFrame et GreenIT. Nous avons beaucoup appris et cela nous a notamment permis d'en venir à plusieurs réalisations qui nous ont étonné.
Tout d'abord, nous avons été surpris par les différences des mesures entres les deux outils. Sur la dernière version de notre application, GreenFrame estime l'empreinte de notre application à 0.124 gC02eq alors que GreenIT l'estime à 1,7 gC02eq. Cette différence peut notamment s'expliquer par la difficulté à évoluer l'impact écologique réel d'une appilcation web mais il s'explique avant tout par les différences dans la manière de mesurer des deux outils. GreenFrame évalue l'impact de la consultation seulement alors que GreenIt a une évaluation plus globale.
Nous avons aussi été surpris par l'impact écologique des infrastucture notamment présenté lors de la fresque du numérique où bien que nous savions que la création des appareils avait un impact nous ne pensions pas qu'il était aussi important.







