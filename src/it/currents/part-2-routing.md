---
layout: base-it.html
title: Correnti Parte 2 - Come Fare Routing con le Correnti
---

# Correnti - Parte 2: Come Fare Routing con le Correnti

<p class="lead">Di gran lunga, il più grande adattamento mentale nel routing con le correnti in FW, QTVLM o Expedition è capire una cosa - la 'linea' di rotta NON è più la tua prua. È il percorso ottimale che la tua barca dovrebbe prendere sul fondo per arrivare dove vuoi andare.</p>

---

## Il Cambiamento Mentale Critico

### Linea di Rotta ≠ Prua

La linea di rotta mostra il **percorso ottimale sul fondo**, non la tua prua alla bussola.

Quando le correnti sono coinvolte, la tua barca deve puntare in una direzione diversa dalla linea di rotta per compensare la corrente che ti spinge lateralmente.

---

## Passo 1: Genera la Tua Rotta

Generi questa rotta caricando **sia il GRIB del vento CHE della corrente** per il periodo e poi eseguendo una rotta come al solito.

### Dove Ottenere le Correnti

Le correnti si trovano sulla stessa pagina del vento:

**[https://fairwinds.world/wind](https://fairwinds.world/wind)**

### Processo

1. Scarica il GRIB del vento per il tuo periodo di gara
2. Scarica il GRIB della corrente per la stessa regione/periodo
3. Carica entrambi nel tuo router (FW, QTVLM o Expedition)
4. Esegui la tua rotta normalmente

Il router calcolerà il percorso ottimale considerando sia i vettori del vento che della corrente.

---

## Passo 2: Governare la Tua Barca

Una volta che hai la rotta, il prossimo problema è... **come governo la mia barca in modo che 'rimanga sulla linea'?**

Ci sono due approcci principali:

---

## Il Modo Facile: Lascia Fare a FairWinds

### Prua Compensata

FairWinds ha il concetto di una **linea di rotta vento+corrente** e di una **'prua compensata'**.

### Come Funziona

1. **Attiva la tua rotta** in FairWinds
2. FW calcolerà la **'prua compensata'** per te
3. Questo posiziona il tuo punto di vela in modo che la tua linea di rotta vento+corrente ti muova lungo la rotta verso il prossimo waypoint
4. Essenzialmente **fa ingegneria inversa** dei calcoli che il router fa per produrre la rotta

### Prestazioni

È abbastanza buono a meno che tu non vada controvento nella tua rotta. **Non farlo.**

---

## Il Modo Medio: Waypoint Programmati

### Metodo di Controllo Totale

1. **Importa la tua rotta come riferimento**
2. Crea un **set programmato di waypoint** su quella rotta basato sul percorso di rotta corrente+vento
3. Questo ti dà controllo totale e prevedibilità

### Quando Usare Questo

Se vuoi **controllo totale e prevedibilità**, questa è la via.

Questo metodo richiede più lavoro manuale ma ti dà completa supervisione del tuo piano di navigazione.

---

## ⚠️ Avvertimenti Importanti

### Regola #1: Evita Rotte Controvento

**Non creare rotte dove la prua compensata va controvento, specialmente in correnti forti.**

### Perché Questo È Importante

- In correnti forti, la prua compensata può diventare estrema
- Se la rotta ti richiede di puntare nel vento per compensare la corrente, la tua barca si fermerà
- Il router può suggerire un percorso "ottimale" che è fisicamente impossibile da navigare

### Sii Paziente

**Ci vorrà tempo per imparare a creare e leggere nuove rotte con le correnti.**

Aspettati una curva di apprendimento mentre sviluppi l'intuizione per:
- Come le correnti influenzano la tua prua
- Quando le prue compensate diventano impraticabili
- Come leggere la differenza tra linee di rotta e linee di rotta

---

## Indicatori Visivi in FairWinds

### Linea di Rotta (Blu)
Il percorso ottimale sul fondo calcolato dal router

### Linea di Rotta (Arancione/Rosso)
Il tuo percorso proiettato effettivo considerando:
- Prua attuale
- Velocità e direzione del vento
- Velocità e direzione della corrente
- Polari della barca

### Prua Compensata
Quando una rotta è attivata, FW regola la tua prua in modo che la linea di rotta segua la linea di rotta

---

## Suggerimenti per il Successo

### Inizia Semplice
- Inizia con gare in regioni di corrente moderata
- Pratica con il Canale della Manica prima di affrontare la Corrente del Golfo

### Controlla la Tua Prua Compensata
- Dopo aver attivato una rotta, verifica che la tua prua abbia senso
- Se stai puntando più di 60° dalla tua destinazione, indaga

### Usa Rotte di Riferimento
- Mantieni la tua rotta generata dal router come riferimento
- Crea waypoint manuali basati su ciò che impari

### Monitora i Cambiamenti di Grib
- Ricorda: le previsioni si aggiornano ogni 6 ore (00, 06, 12, 18z)
- Le correnti possono cambiare significativamente con nuovi dati
- La tua prua compensata potrebbe aver bisogno di aggiustamenti

---

## Errori Comuni

### 1. Ignorare la Linea di Rotta
**Problema:** Seguire la linea di rotta con la tua prua invece di lasciare che FW compensi

**Soluzione:** Attiva la rotta e fidati della prua compensata

### 2. Rotte Controvento
**Problema:** Il router suggerisce un percorso che richiede di puntare nel vento

**Soluzione:** Aggiungi waypoint intermedi o regola la tua strategia di rotta

### 3. Non Caricare le Correnti
**Problema:** Routing solo con il vento in una regione di corrente

**Soluzione:** Carica sempre i GRIB di vento E corrente per le regioni di corrente

### 4. Dimenticare gli Aggiornamenti delle Previsioni
**Problema:** Le correnti cambiano al cambio di grib ma la rotta non è aggiornata

**Soluzione:** Riesegui la tua rotta dopo aggiornamenti importanti delle previsioni

---

## Prossimi Passi

- **Parte 3:** Strategie e tattiche avanzate sulle correnti
- Pratica nelle gare di pratica del Canale della Manica
- Unisciti alla comunità FairWinds per condividere suggerimenti sul routing delle correnti

---

## Punti Chiave da Ricordare

1. **Linea di rotta = percorso sul fondo**, non la tua prua
2. Carica **i GRIB di vento E corrente** da fairwinds.world/wind
3. **Modalità facile:** Lascia che FW calcoli la prua compensata automaticamente
4. **Modalità media:** Usa waypoint programmati per controllo totale
5. **Mai fare routing controvento** in correnti forti
6. **Sii paziente** - le correnti aggiungono complessità significativa!
