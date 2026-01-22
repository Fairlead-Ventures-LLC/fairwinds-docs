---
layout: base-it.html
title: Correnti Parte 1 - Introduzione
---

# Correnti - Parte 1: Introduzione

<p class="lead">FairWinds ora integra correnti + vento in diverse regioni di correnti 'divertenti' del mondo - il Canale della Manica + Irlanda, la Corrente del Golfo lungo tutto l'Atlantico occidentale, la famigerata Agulhas intorno all'Africa fino al Madagascar, la Kuroshio da Hong Kong al Giappone, e l'intera Corrente dell'Australia Orientale.</p>

Navigare con successo in queste famose masse d'acqua in rapido movimento ha fatto la differenza tra la vita e la morte per i navigatori per centinaia di anni. Anche con strumenti di routing moderni, l'aggiunta di correnti aggiunge un altro livello di complessità e abilità che richiede ai navigatori di migliorare il loro gioco di navigazione.

---

## TWA vs AWA: Una Differenza Critica

Tutti i router integrano le correnti su una **base TWA, non AWA**. Questo è diverso nella vita reale, dove il tuo AWA sarebbe influenzato dalla corrente.

### Esempio Reale

Andare controvento a 45° in 10 nodi TWS con una corrente di 3 nodi dietro di te aumenterebbe la velocità e l'angolo del vento apparente poiché saresti 'spinto' nel vento.

### Perché i Router Usano TWA

**Non è semplicemente possibile fare routing in AWA o AWS.** Come dice un navigatore, *"Il vento vero ti porta a casa"*.

---

## Come Funzionano i Calcoli delle Correnti

Il vettore di corrente (direzione e velocità) sulla barca è applicato a una velocità e direzione della barca calcolate a un dato vento al momento e alla posizione.

### Il Processo

**a.** La barca è al tempo 0 e alla posizione 0

**b.** Calcola la posizione della barca al tempo 1 dato il vento e i polari al tempo 0

**c.** Calcola la corrente alla posizione 0 e aggiungi il vettore alla posizione proiettata della barca

**d.** Sposta la barca dalla posizione 0 alla posizione 1 (i vettori combinati vento + corrente)

### Navigazione Classica

Nella navigazione classicamente addestrata, questo è come funziona tutta la navigazione stimata con le correnti. Se hai mai fatto la cartografia su carta DR, **questi sono i triangoli che disegni sulle carte**.

---

## Calcolo ad Alta Fedeltà di FairWinds

FairWinds esegue questo calcolo su una **base al minuto**. È per questo che la linea di rotta è così ad alta fedeltà.

### Perché Questo È Importante

Questa proiezione minuto per minuto è piuttosto interessante e nuova.

**Confronto con gli MFD:** B&G, RayMarine e tutti gli altri MFD fanno un calcolo davvero brutale sulla tua linea di rotta proiettata basato sulla **corrente osservata nel momento** (è tutto ciò che conosce dagli strumenti della barca), invece di proiettare le correnti nel futuro.

**Risultato:** È una ragione per cui sugli MFD ottieni queste linee di lay proiettate e linee di rotta che sono imprecise o rimbalzano costantemente mentre ti avvicini a loro in forti correnti variabili.

---

## Qualità e Elaborazione dei Dati

Integrare le correnti nella vela virtuale ha alcune limitazioni - vale a dire la **risoluzione e la disponibilità dei dati delle correnti stesse**.

### Taglio Costiero

I modelli tendono a 'tagliare' intorno alle coste o alle caratteristiche terrestri.

### Soluzione FairWinds

Per compensare questo, l'elaborazione meteorologica FW crea una **versione interpolata più liscia** dei GRIB di corrente che crea così un campo molto più bello intorno alle coste.

**Qualità:** Probabilmente nessuno lo noterà ma sono molto migliori; questi GRIB sono disponibili nella pagina /wind e utilizzati nel visualizzatore e simulatore e testati con QTVLM ed Expedition.

---

## Regioni di Correnti in FairWinds

FairWinds include correnti in queste regioni principali:

- **Canale della Manica + Irlanda** - Correnti di marea complesse
- **Corrente del Golfo** - Intero Atlantico occidentale
- **Corrente di Agulhas** - Africa al Madagascar (famigerata per la sua forza)
- **Corrente Kuroshio** - Hong Kong al Giappone
- **Corrente dell'Australia Orientale** - Intera costa orientale

---

## Prossimi in Questa Serie

- **Parte 2:** Come Fare Routing con le Correnti in FairWinds
- **Parte 3:** Strategie Avanzate sulle Correnti

---

## Punti Chiave da Ricordare

1. I router usano **TWA, non AWA** per i calcoli delle correnti
2. FairWinds calcola le correnti **minuto per minuto** per alta fedeltà
3. I vettori di corrente sono **aggiunti ai vettori di vento** per la navigazione stimata
4. FairWinds usa **GRIB lisciati e interpolati** per una migliore precisione costiera
5. Le correnti aggiungono complessità significativa - **migliora il tuo gioco di navigazione!**
