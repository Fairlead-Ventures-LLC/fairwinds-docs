---
layout: base-it.html
title: Lossodromia vs Ortodromia
---

# Lossodromia vs Ortodromia

<p class="lead">Conoscere la differenza tra le linee di lossodromia e ortodromia (GC) è fondamentale per navigare la distanza più breve velocemente. FairWinds supporta sia le linee di lossodromia che di ortodromia nelle proiezioni mercatore e globo. È l'unica piattaforma di vela virtuale che supporta strumenti di routing ad alta fedeltà che corrispondono alle sfide di navigazione del mondo reale.</p>

Ecco un breve primer sulle linee GC vs lossodromia.

---

## Lo Strumento Divisore

Lo **strumento Divisore** (triangoli gialli) nel menu degli strumenti supporta sia le misurazioni GC che lossodromia ed è un ottimo modo per sperimentare con le due modalità.

---

## Lossodromia - Rotta Costante, Distanza Più Lunga

La linea di lossodromia è una linea retta che collega due punti misurati in coordinate x & y. Tecnicamente parlando, le linee di lossodromia sono conosciute come **'lossodrome'**.

Sulle linee di lossodromia, una rotta di 80° che lascia NY verso il Regno Unito sarà ancora 80° quando ti avvicini al Regno Unito. Eppure, mentre sembra più diretta su una mappa mercatore piatta - **è in realtà più lunga!**

**Esempio:** 3086nm verso Londra, rotta 80° per tutto il percorso. Ma è la più breve?

### Contesto Storico

Tradizionalmente, nei giorni prima del GPS, i marinai usavano la navigazione lossodromica perché era molto più semplice da seguire, sacrificando una certa distanza per la facilità di navigazione.

Sento ancora persone dire cose come *"gira a sinistra al punto e poi sono 230° per 2000 miglia."* Beh, non più, a meno che tu non voglia navigare una distanza più lunga.

---

## Ortodromia - Rotta Cambiante, Distanza Più Breve

La linea di ortodromia collega due punti ma segue la curvatura della terra. Questo è tecnicamente conosciuto come **'ortodroma'**.

Se stai guardando una mappa mercatore, la linea GC apparirà curva e visivamente 'più lunga', anche se **è in realtà una distanza più breve!**

Una differenza chiave nelle rotte GC è che mentre segui questa linea la tua **rotta verso la destinazione finale cambierà**.

**Esempio:** La distanza NY verso Londra è ora di **2974nm** seguendo GC, e nota come la rotta cambia mentre navighi il percorso.

---

## Navigazione in FairWinds

FairWinds instrada sempre la tua barca seguendo i **calcoli di ortodromia** e la linea di rotta disegnerà sempre usando il calcolo GC.

**Ma questo significa che una rotta lossodromica in linea retta e la tua linea di rotta non seguiranno lo stesso percorso!**

### Regola Pratica

Se hai waypoint separati da **5nm o più**, una linea di rotta lossodromica e la linea di rotta inizieranno a deviare. Questo è molto più pronunciato a:
- Latitudini più alte
- Distanze di waypoint più lunghe

---

## Esempi Comuni

### Lunghe Distanze

**Navigazione verso le Hawaii su 1 waypoint** (esempio estremo di lunghe distanze tra waypoint).

In questo esempio la rotta è attivata e la barca si sta dirigendo verso un singolo waypoint, a oltre 2000nm di distanza. Nota che la linea di rotta blu è impostata su 'lossodromia'.

**Puoi vedere che la barca sembra dirigersi nella direzione sbagliata!**

Ma in realtà sta navigando verso la destinazione usando la rotta GC. FW instraderà automaticamente la tua barca e cambierà la tua rotta lungo il percorso più veloce.

Ora, se cambiamo la linea di rotta per disegnare usando l'**'ortodromia'** - **voilà!** - questo è il percorso che la barca seguirà effettivamente.

### Alte Latitudini

**"Mi sono schiantato nell'Artico, perché!?"**

La precisione delle linee GC vs lossodromia è più importante quando si naviga ad alte latitudini.

**Esempio:** A Nunavut (~75°N latitudine), la linea blu disegna attentamente una rotta lossodromica che costeggia l'isola Byam. Ma nota come la linea di rotta traccia il percorso effettivo e mostra una collisione!

Devi fare attenzione! Hai due opzioni:
1. Modificare l'impostazione per disegnare le linee di rotta in ortodromia anche
2. Fare segmenti più corti

La cosa bella è che il rilevamento delle collisioni catturerà la maggior parte di queste situazioni per te, ma è fin troppo facile fare affidamento sulle linee di rotta senza assicurarsi che stiano mostrando il percorso corretto.

---

## Riepilogo

Chiaro come fango? Lo strumento divisore è un ottimo modo per esplorare queste differenze.

### Il Mio Consiglio

- Mantieni il **rilevamento collisioni abilitato** alle latitudini più alte
- Assicurati di controllare le **linee di rotta lossodromia e GC** quando attraversi lunghe distanze tra waypoint ad alte latitudini
- Usa lo **strumento divisore** per sperimentare e comprendere le differenze
- Ricorda: **FairWinds naviga sempre usando i calcoli di ortodromia**

⛵ Buona navigazione!
