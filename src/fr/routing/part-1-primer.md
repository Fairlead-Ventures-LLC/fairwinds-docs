---
layout: base-fr.html
title: Routage Partie 1 - Introduction
---

# Routage - Partie 1 : Introduction

<p class="lead">Un aspect incroyable de la voile virtuelle est le nombre considérable de mouvements possibles à faire à chaque minute, sans parler du cours d'une course. L'espace de décision pur de la voile virtuelle éclipse facilement les échecs : même avant d'ajouter des vents changeants (et de nouvelles prévisions toutes les ~6 heures), le nombre de séquences de direction possibles est astronomique.</p>

Prenons un exemple simple.

---

## La Boucle de Base du Routeur Isochrone

Tous les routeurs isochrones sont basés sur une boucle de base simple mais puissante :

1. À partir de la position actuelle du bateau, explorez jusqu'où il irait dans différentes directions
2. Utilisez le temps, TWS et TWD à cet emplacement, et les polaires du bateau pour calculer les positions projetées
3. Ces points exploratoires dans toutes les directions sont appelés **'nœuds'**

Ensuite, avancez vers chaque nœud suivant, et faites la même exploration en partant de chacun de ces milliers de nœuds, projetant vers l'avant une autre distance d'une minute dans un arc de positions exploratoires.

- Chaque rangée de nouvelles positions est appelée un **'front'**
- L'intervalle de temps utilisé pour calculer la prochaine position du bateau est appelé un **'crank'**

---

## Le Problème de l'Espace de Décision

Les mathématiques pures sur cet espace de décision en seulement 60 minutes - en supposant que vous vouliez contempler chaque virage de 1° dans un arc de 180° pour chaque crank d'une minute - est un incalculable **180^60** -- trop de zéros pour les écrire ici !

### Pourquoi C'est Important

Aucun routeur en dehors d'un supercalculateur ne peut contempler tous ces mouvements. QTVLM, FW ou Bitsailor font tous des décisions de compromis pour vous à partir d'une gamme réduite de possibilités.

---

## Comment les Routeurs Contiennent l'Analyse

### 1. Choisir les Gagnants

Si vous gardiez vraiment chaque nœud dans ce 'front' en expansion constante, le nombre de nouveaux nœuds croîtrait exponentiellement.

**Solution :** Dessinez un **'bin'** (généralement une fraction de degré) autour des nœuds le long du dernier front, et choisissez le gagnant de tous ceux dans le 'bin'. Vous n'en gardez qu'un.

Tous les routeurs ont un concept de 'bucket' ou 'bin' qui choisit le gagnant et l'utilise uniquement comme emplacement de départ pour vérifier le prochain front.

### 2. Limiter les Angles

Nous n'avons pas besoin d'explorer chaque 1°, n'est-ce pas ?

**Exemples d'optimisations :**
- Que diriez-vous de chaque 3° de TWA ?
- Supprimez tout ce qui est au-dessus/en dessous de notre VMG optimal
- Résultat : Réduit à environ 70 angles à explorer

### 3. Focaliser la Direction

Les routeurs réduisent l'espace d'exploration des nœuds en un **'cône'** qui se dirige vers la destination. Dans QTVLM, ils appellent cela l'**'angle de balayage'**.

**Exemple :** Si je me dirige vers le nord vers ma destination à 0°, mais que le vent souffle du nord directement vers moi, je devrais tirer des bords au vent pour y arriver.

**Questions auxquelles le routeur doit répondre :**
- Le routeur devrait-il explorer de 45° à -45° de la destination ?
- Devrait-il explorer les 180° complets ?
- Et si aller en arrière est en fait plus rapide si cela s'éloigne de la destination mais obtient un meilleur vent ?

La gestion des angles de balayage progressifs et situationnels est en fait l'un des problèmes les plus difficiles dans les routeurs :
- Et si vous êtes dans une baie ?
- Dans un canal ?
- En passant par le pôle ?
- Avez-vous une polaire qui ne va pas au vent ?

Tout cela impacte l'angle d'exploration nécessaire.

### 4. Ajuster les Cranks

Une autre façon dont les routeurs essaient de réduire le calcul est d'ajuster l'intervalle de **'crank'**.

Il est assez coûteux de faire `D = R*T` où `t = 1 minute`.

**Optimisation :** Et si nous prenions la position actuelle du bateau, la vitesse et la direction du vent, et calculions la distance où il sera dans, disons... **15 minutes** ? Ajustant le crank de 1 minute à 15.

**Compromis :** Cela signifie que nous supposerons que la vitesse du vent est constante pendant ce temps (manquant possiblement des changements), mais ne fait qu'1 calcul au lieu de 15.

---

## Les Trois Compromis Clés

Tous les routeurs luttent avec ces facteurs pour réduire la surcharge de calcul tout en conservant une fidélité suffisamment élevée pour choisir 'la route la plus rapide' :

1. **Bucketing** - Comment grouper et sélectionner les nœuds gagnants
2. **Angles à explorer** - Plage d'angle de balayage
3. **Durée de projection vers l'avant** - Intervalles de crank

Tous ont des compromis.

---

## La Réalité

Malgré ce que beaucoup pensent, **il n'y a pas une seule réponse parfaite ou route parfaite**. C'est déjà simplifié.

Cependant, il existe des conseils pour choisir systématiquement de bonnes routes, et dans le prochain guide, je discuterai des routeurs FW et QTVLM et comment les utiliser efficacement (je laisserai Bitsailor à Hardtack !).

---

## Suite de Cette Série

- **Partie 2 :** Utiliser Efficacement les Routeurs FW et QTVLM
- **Partie 3 :** Stratégies de Routage Avancées
