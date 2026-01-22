---
layout: base-fr.html
title: Courants Partie 2 - Comment Router avec les Courants
---

# Courants - Partie 2 : Comment Router avec les Courants

<p class="lead">De loin, le plus grand ajustement mental dans le routage avec les courants dans FW, QTVLM ou Expedition est de comprendre une chose - la 'ligne' de route n'est PLUS votre cap. C'est le chemin optimal que votre bateau devrait prendre sur le fond pour arriver où vous voulez aller.</p>

---

## Le Changement Mental Critique

### Ligne de Route ≠ Cap

La ligne de route montre le **chemin optimal sur le fond**, pas votre cap au compas.

Lorsque des courants sont impliqués, votre bateau doit pointer dans une direction différente de la ligne de route pour compenser le courant qui vous pousse latéralement.

---

## Étape 1 : Générer Votre Route

Vous générez cette route en chargeant **à la fois le GRIB de vent ET de courant** pour la période et en exécutant une route comme d'habitude.

### Où Obtenir les Courants

Les courants se trouvent sur la même page de vent :

**[https://fairwinds.world/wind](https://fairwinds.world/wind)**

### Processus

1. Téléchargez le GRIB de vent pour votre période de course
2. Téléchargez le GRIB de courant pour la même région/période
3. Chargez les deux dans votre routeur (FW, QTVLM ou Expedition)
4. Exécutez votre route normalement

Le routeur calculera le chemin optimal en tenant compte des vecteurs de vent et de courant.

---

## Étape 2 : Diriger Votre Bateau

Une fois que vous avez la route, le prochain problème est... **comment diriger mon bateau pour qu'il 'reste sur la ligne' ?**

Il existe deux approches principales :

---

## La Façon Facile : Laissez FairWinds le Faire

### Cap Compensé

FairWinds a le concept d'une **ligne de navigation vent+courant** et d'un **'cap compensé'**.

### Comment Ça Marche

1. **Activez votre route** dans FairWinds
2. FW calculera le **'cap compensé'** pour vous
3. Cela positionne votre point de voile pour que votre ligne de navigation vent+courant vous déplace le long de la route vers le prochain waypoint
4. Il **rétro-ingénierie** essentiellement les calculs que le routeur fait pour produire la route

### Performance

C'est plutôt bon sauf si vous allez vent debout dans votre route. **Ne faites pas ça.**

---

## La Façon Moyenne : Waypoints Programmés

### Méthode de Contrôle Total

1. **Importez votre route comme référence**
2. Créez un **ensemble programmé de waypoints** sur cette route basé sur le chemin de navigation courant+vent
3. Cela vous donne un contrôle total et une prévisibilité

### Quand Utiliser Ceci

Si vous voulez un **contrôle total et une prévisibilité**, c'est la voie.

Cette méthode nécessite plus de travail manuel mais vous donne une supervision complète de votre plan de navigation.

---

## ⚠️ Avertissements Importants

### Règle #1 : Évitez les Routes Vent Debout

**Ne créez pas de routes où le cap compensé va vent debout, surtout dans des courants forts.**

### Pourquoi C'est Important

- Dans des courants forts, le cap compensé peut devenir extrême
- Si la route vous oblige à pointer dans le vent pour compenser le courant, votre bateau va caler
- Le routeur peut suggérer un chemin "optimal" qui est physiquement impossible à naviguer

### Soyez Patient

**Il faudra du temps pour apprendre à créer et lire de nouvelles routes avec des courants.**

Attendez-vous à une courbe d'apprentissage alors que vous développez l'intuition pour :
- Comment les courants affectent votre cap
- Quand les caps compensés deviennent impraticables
- Comment lire la différence entre les lignes de route et les lignes de navigation

---

## Indicateurs Visuels dans FairWinds

### Ligne de Route (Bleue)
Le chemin optimal sur le fond calculé par le routeur

### Ligne de Navigation (Orange/Rouge)
Votre chemin projeté réel considérant :
- Cap actuel
- Vitesse et direction du vent
- Vitesse et direction du courant
- Polaires du bateau

### Cap Compensé
Lorsqu'une route est activée, FW ajuste votre cap pour que la ligne de navigation suive la ligne de route

---

## Conseils pour Réussir

### Commencez Simple
- Commencez par des courses dans des régions de courant modéré
- Pratiquez avec la Manche avant de vous attaquer au Gulf Stream

### Vérifiez Votre Cap Compensé
- Après avoir activé une route, vérifiez que votre cap a du sens
- Si vous pointez à plus de 60° de votre destination, enquêtez

### Utilisez des Routes de Référence
- Gardez votre route générée par routeur comme référence
- Créez des waypoints manuels basés sur ce que vous apprenez

### Surveillez les Changements de Grib
- Rappelez-vous : les prévisions se mettent à jour toutes les 6 heures (00, 06, 12, 18z)
- Les courants peuvent changer significativement avec de nouvelles données
- Votre cap compensé peut nécessiter un ajustement

---

## Erreurs Courantes

### 1. Ignorer la Ligne de Navigation
**Problème :** Suivre la ligne de route avec votre cap au lieu de laisser FW compenser

**Solution :** Activez la route et faites confiance au cap compensé

### 2. Routes Vent Debout
**Problème :** Le routeur suggère un chemin qui nécessite de pointer dans le vent

**Solution :** Ajoutez des waypoints intermédiaires ou ajustez votre stratégie de route

### 3. Ne Pas Charger les Courants
**Problème :** Router avec seulement le vent dans une région de courant

**Solution :** Chargez toujours les GRIB de vent ET de courant pour les régions de courant

### 4. Oublier les Mises à Jour de Prévisions
**Problème :** Les courants changent au changement de grib mais la route n'est pas mise à jour

**Solution :** Relancez votre route après les mises à jour majeures de prévisions

---

## Prochaines Étapes

- **Partie 3 :** Stratégies et tactiques avancées de courants
- Pratiquez dans les courses d'entraînement de la Manche
- Rejoignez la communauté FairWinds pour partager des conseils de routage de courants

---

## Points Clés à Retenir

1. **Ligne de route = chemin sur le fond**, pas votre cap
2. Chargez **les GRIB de vent ET de courant** depuis fairwinds.world/wind
3. **Mode facile :** Laissez FW calculer le cap compensé automatiquement
4. **Mode moyen :** Utilisez des waypoints programmés pour un contrôle total
5. **Ne routez jamais vent debout** dans des courants forts
6. **Soyez patient** - les courants ajoutent une complexité significative !
