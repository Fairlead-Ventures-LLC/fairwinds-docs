---
layout: base-fr.html
title: Loxodromie vs Orthodromie
---

# Loxodromie vs Orthodromie

<p class="lead">Connaître la différence entre les lignes de loxodromie et d'orthodromie (GC) est essentiel pour naviguer la distance la plus courte rapidement. FairWinds prend en charge les lignes de loxodromie et d'orthodromie dans les projections mercator et globe. C'est la seule plateforme de voile virtuelle qui prend en charge des outils de routage de si haute fidélité qui correspondent aux défis de navigation du monde réel.</p>

Voici un court aperçu des lignes GC vs loxodromie.

---

## L'Outil Compas

L'**outil Compas** (triangles jaunes) dans le menu des outils prend en charge les mesures GC et loxodromie et est un excellent moyen d'expérimenter avec les deux modes.

---

## Loxodromie - Cap Constant, Distance Plus Longue

La ligne de loxodromie est une ligne droite reliant deux points mesurés en coordonnées x & y. Techniquement, les lignes de loxodromie sont connues sous le nom de **'loxodromes'**.

Sur les lignes de loxodromie, un cap de 80° quittant NY vers le Royaume-Uni sera toujours de 80° lorsque vous approchez du Royaume-Uni. Pourtant, bien qu'elle semble plus directe sur une carte mercator plate - **elle est en fait plus longue !**

**Exemple :** 3086nm vers Londres, cap 80° tout le long. Mais est-ce le plus court ?

### Contexte Historique

Traditionnellement, à l'époque avant le GPS, les marins utilisaient la navigation loxodromique car elle était beaucoup plus simple à suivre, sacrifiant une certaine distance pour la facilité de navigation.

J'entends encore des gens dire des choses comme *"tournez à gauche au point et puis c'est 230° pendant 2000 milles."* Eh bien, plus maintenant, à moins que vous ne vouliez naviguer une distance plus longue.

---

## Orthodromie - Cap Changeant, Distance Plus Courte

La ligne d'orthodromie relie deux points mais suit la courbure de la terre. C'est techniquement connu sous le nom d'**'orthodrome'**.

Si vous regardez une carte mercator, la ligne GC apparaîtra courbée et visuellement 'plus longue', même si **elle est en fait une distance plus courte !**

Une différence clé dans les routes GC est qu'en suivant cette ligne, votre **cap vers la destination finale changera**.

**Exemple :** La distance NY vers Londres est maintenant de **2974nm** en suivant GC, et remarquez comment le cap change pendant que vous naviguez sur la route.

---

## Navigation dans FairWinds

FairWinds route toujours votre bateau en suivant les **calculs d'orthodromie** et la ligne de navigation dessinera toujours en utilisant le calcul GC.

**Mais cela signifie qu'une route loxodromique en ligne droite et votre ligne de navigation ne suivront pas le même chemin !**

### Règle Générale

Si vous avez des waypoints séparés de **5nm ou plus**, une ligne de route loxodromique et la ligne de navigation commenceront à dévier. Ceci est beaucoup plus prononcé à :
- Latitudes plus élevées
- Distances de waypoint plus longues

---

## Exemples Courants

### Longues Distances

**Navigation vers Hawaï sur 1 waypoint** (exemple extrême de longues distances entre waypoints).

Dans cet exemple, la route est activée et le bateau se dirige vers un seul waypoint, à plus de 2000nm. Remarquez que la ligne de route bleue est réglée sur 'loxodromie'.

**Vous pouvez voir que le bateau semble se diriger dans la mauvaise direction !**

Mais en fait, il navigue vers la destination en utilisant la route GC. FW routera automatiquement votre bateau et changera votre cap le long du chemin le plus rapide.

Maintenant, si nous changeons la ligne de route pour dessiner en utilisant l'**'orthodromie'** - **voilà !** - c'est le chemin que le bateau suivra réellement.

### Hautes Latitudes

**"J'ai crashé dans l'Arctique, pourquoi !?"**

La précision des lignes GC vs loxodromie est la plus importante lors de la navigation à hautes latitudes.

**Exemple :** À Nunavut (~75°N latitude), la ligne bleue dessine soigneusement une route loxodromique qui longe l'île Byam. Mais remarquez comment la ligne de navigation trace la route réelle et montre une collision !

Vous devez faire attention ! Vous avez deux options :
1. Modifier le paramètre pour dessiner les lignes de route en orthodromie aussi
2. Faire des segments plus courts

La bonne chose est que la détection de collision attrapera la plupart de ces situations pour vous, mais il est trop facile de compter sur les lignes de route sans s'assurer qu'elles montrent le bon chemin.

---

## Résumé

Clair comme de la boue ? L'outil compas est un excellent moyen d'explorer ces différences.

### Mon Conseil

- Gardez la **détection de collision activée** aux latitudes plus élevées
- Assurez-vous de vérifier les **lignes de route loxodromie et GC** lors de la traversée de longues distances entre waypoints à hautes latitudes
- Utilisez l'**outil compas** pour expérimenter et comprendre les différences
- Rappelez-vous : **FairWinds navigue toujours en utilisant les calculs d'orthodromie**

⛵ Bonne navigation !
