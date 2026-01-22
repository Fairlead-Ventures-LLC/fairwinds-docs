---
layout: base-fr.html
title: Courants Partie 1 - Introduction
---

# Courants - Partie 1 : Introduction

<p class="lead">FairWinds intègre maintenant les courants + le vent dans plusieurs régions de courants 'amusantes' du monde - la Manche + l'Irlande, le Gulf Stream le long de tout l'Atlantique occidental, le tristement célèbre Agulhas autour de l'Afrique jusqu'à Madagascar, le Kuroshio de Hong Kong au Japon, et tout le courant d'Australie orientale.</p>

Naviguer avec succès dans ces célèbres masses d'eau à mouvement rapide a fait la différence entre la vie et la mort pour les navigateurs pendant des centaines d'années. Même avec des outils de routage modernes, l'ajout de courants ajoute une autre couche de complexité et de compétence qui oblige les navigateurs à améliorer leur jeu de navigation.

---

## TWA vs AWA : Une Différence Critique

Tous les routeurs intègrent les courants sur une **base TWA, pas AWA**. C'est différent dans la vraie vie, où votre AWA serait affecté par le courant.

### Exemple Réel

Aller au vent à 45° dans 10 nœuds TWS avec un courant de 3 nœuds derrière vous augmenterait la vitesse et l'angle du vent apparent car vous seriez 'poussé' dans le vent.

### Pourquoi les Routeurs Utilisent TWA

**Il n'est tout simplement pas possible de router en AWA ou AWS.** Comme dit un navigateur, *"Le vent réel vous ramène à la maison"*.

---

## Comment Fonctionnent les Calculs de Courant

Le vecteur de courant (direction et vitesse) sur le bateau est appliqué à une vitesse et une direction de bateau calculées à un vent donné au moment et à l'emplacement.

### Le Processus

**a.** Le bateau est au temps 0 et à l'emplacement 0

**b.** Calculer la position du bateau au temps 1 compte tenu du vent et des polaires au temps 0

**c.** Calculer le courant à l'emplacement 0 et ajouter le vecteur à la position projetée du bateau

**d.** Déplacer le bateau de la position 0 à la position 1 (les vecteurs combinés vent + courant)

### Navigation Classique

Dans la navigation classiquement formée, c'est ainsi que fonctionne toute l'estime avec les courants. Si vous avez déjà fait de la cartographie papier DR, **ce sont les triangles que vous dessinez sur les cartes**.

---

## Calcul Haute Fidélité de FairWinds

FairWinds effectue ce calcul sur une **base par minute**. C'est pourquoi la ligne de navigation est si haute fidélité.

### Pourquoi C'est Important

Cette projection minute par minute est plutôt cool et nouvelle.

**Comparaison avec les MFD :** B&G, RayMarine et tous les autres MFD font un calcul vraiment brut sur votre ligne de navigation projetée basé sur le **courant observé dans le moment** (c'est tout ce qu'il connaît des instruments du bateau), au lieu de projeter les courants dans le futur.

**Résultat :** C'est une raison pour laquelle sur les MFD vous obtenez ces lignes de lay projetées et lignes de navigation qui sont inexactes ou rebondissent constamment lorsque vous vous en approchez dans des courants variables forts.

---

## Qualité et Traitement des Données

L'intégration des courants dans la voile virtuelle a certaines limitations - notamment la **résolution et la disponibilité des données de courant elles-mêmes**.

### Découpage Côtier

Les modèles ont tendance à 'découper' autour des côtes ou des caractéristiques terrestres.

### Solution FairWinds

Pour compenser cela, le traitement météo FW crée une **version interpolée plus lisse** des GRIB de courant qui crée ainsi un champ beaucoup plus agréable autour des côtes.

**Qualité :** Personne ne le remarquera probablement mais ils sont tellement meilleurs ; ces GRIB sont disponibles dans la page /wind et utilisés dans le visualiseur et le simulateur et testés avec QTVLM et Expedition.

---

## Régions de Courants dans FairWinds

FairWinds inclut des courants dans ces régions majeures :

- **Manche + Irlande** - Courants de marée complexes
- **Gulf Stream** - Tout l'Atlantique occidental
- **Courant d'Agulhas** - Afrique à Madagascar (tristement célèbre pour sa force)
- **Courant Kuroshio** - Hong Kong au Japon
- **Courant d'Australie Orientale** - Toute la côte est

---

## Suite de Cette Série

- **Partie 2 :** Comment Router avec les Courants dans FairWinds
- **Partie 3 :** Stratégies Avancées de Courants

---

## Points Clés à Retenir

1. Les routeurs utilisent **TWA, pas AWA** pour les calculs de courant
2. FairWinds calcule les courants **minute par minute** pour une haute fidélité
3. Les vecteurs de courant sont **ajoutés aux vecteurs de vent** pour l'estime
4. FairWinds utilise des **GRIB lissés et interpolés** pour une meilleure précision côtière
5. Les courants ajoutent une complexité significative - **améliorez votre jeu de navigation !**
