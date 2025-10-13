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

Ajouter un évènement :
1. Utilisateurs ouvre le site
2. Utilisateur ajoute un évènement avec date, heure, description, récurrence
3. Utilisateur valide cet évènement
  
Supprimer un évènement :
1. Utilisateurs ouvre le site 
2. Utilisateur sélectionne un évènement
3. Utilisateur supprime cet évènement
  
Exporter un edt :
1. Utilisateur ouvre le site
2. Utilisateurs sélectionne « exporter » dans le format choisi (pdf, ics)
	
(autres scénarios possibles : Regarder un emploi de temps, Charger un emploi du temps, Modifier un évènement)

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


