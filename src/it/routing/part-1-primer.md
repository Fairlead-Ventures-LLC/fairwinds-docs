---
layout: base-it.html
title: Routing Parte 1 - Introduzione
---

# Routing - Parte 1: Introduzione

<p class="lead">Un aspetto incredibile della vela virtuale è il numero enorme di mosse possibili da fare in ogni minuto, per non parlare del corso di una gara. Lo spazio decisionale puro della vela virtuale supera facilmente gli scacchi: anche prima di aggiungere venti variabili (e nuove previsioni ogni ~6 ore), il numero di sequenze di sterzo possibili è astronomico.</p>

Facciamo un esempio semplice.

---

## Il Ciclo Base del Router Isocrono

Tutti i router isocroni si basano su un ciclo base semplice ma potente:

1. Dalla posizione attuale della barca, esplora fino a dove andrebbe in diverse direzioni
2. Usa tempo, TWS e TWD in quella posizione, e i polari della barca per calcolare le posizioni proiettate
3. Questi punti esplorativi in tutte le direzioni sono chiamati **'nodi'**

Successivamente, avanza a ciascun nodo successivo e fai la stessa esplorazione partendo da ciascuno di questi migliaia di nodi, proiettando in avanti un'altra distanza di un minuto in un arco di posizioni esplorative.

- Ogni riga di nuove posizioni è chiamata un **'fronte'**
- L'intervallo di tempo utilizzato per calcolare la prossima posizione della barca è chiamato un **'crank'**

---

## Il Problema dello Spazio Decisionale

La matematica pura su questo spazio decisionale in soli 60 minuti - supponendo che tu voglia contemplare ogni virata di 1° in un arco di 180° per ogni crank di un minuto - è un incalcolabile **180^60** -- troppi zeri da scrivere qui!

### Perché Questo È Importante

Nessun router al di fuori di un supercomputer può contemplare tutte queste mosse. QTVLM, FW o Bitsailor stanno tutti prendendo decisioni di compromesso per te da una gamma ristretta di possibilità.

---

## Come i Router Contengono l'Analisi

### 1. Scegliere i Vincitori

Se davvero tenessi ogni nodo in questo 'fronte' in continua espansione, il numero di nuovi nodi crescerebbe esponenzialmente.

**Soluzione:** Disegna un **'bin'** (di solito una frazione di grado) attorno ai nodi lungo l'ultimo fronte, e scegli il vincitore di tutti quelli nel 'bin'. Ne tieni solo uno.

Tutti i router hanno un concetto di 'bucket' o 'bin' che sceglie il vincitore e lo usa solo come posizione di partenza per controllare il prossimo fronte.

### 2. Limitare gli Angoli

Non abbiamo bisogno di esplorare ogni 1°, giusto?

**Esempi di ottimizzazioni:**
- Che ne dici di ogni 3° di TWA?
- Rimuovi tutto ciò che è sopra/sotto il nostro VMG ottimale
- Risultato: Ridotto a circa 70 angoli da esplorare

### 3. Focalizzare la Direzione

I router riducono lo spazio di esplorazione dei nodi in un **'cono'** che si dirige verso la destinazione. In QTVLM lo chiamano l'**'angolo di scansione'**.

**Esempio:** Se mi sto dirigendo a nord verso la mia destinazione a 0°, ma il vento sta soffiando da nord direttamente verso di me, dovrei bordeggiare controvento per arrivarci.

**Domande a cui il router deve rispondere:**
- Il router dovrebbe esplorare da 45° a -45° dalla destinazione?
- Dovrebbe esplorare i 180° completi?
- E se andare indietro è in realtà più veloce se si allontana dalla destinazione ma ottiene vento migliore?

Gestire angoli di scansione progressivi e situazionali è in realtà uno dei problemi più difficili nei router:
- E se sei in una baia?
- In un canale?
- Passando sopra il polo?
- Hai un polare che non va controvento?

Tutto questo influisce sull'angolo di esplorazione necessario.

### 4. Regolare i Crank

Un altro modo in cui i router cercano di ridurre il calcolo è regolando l'intervallo di **'crank'**.

È piuttosto costoso fare `D = R*T` dove `t = 1 minuto`.

**Ottimizzazione:** E se prendessimo la posizione attuale della barca, la velocità e la direzione del vento, e calcolassimo la distanza dove sarà tra, diciamo... **15 minuti**? Regolando il crank da 1 minuto a 15.

**Compromesso:** Significa che assumeremo che la velocità del vento sia costante in quel tempo (possibilmente perdendo cambiamenti), ma fa solo 1 calcolo invece di 15.

---

## I Tre Compromessi Chiave

Tutti i router lottano con questi fattori per ridurre il sovraccarico computazionale mantenendo comunque una fedeltà abbastanza alta per scegliere 'il percorso più veloce':

1. **Bucketing** - Come raggruppare e selezionare i nodi vincenti
2. **Angoli da esplorare** - Intervallo dell'angolo di scansione
3. **Durata di proiezione in avanti** - Intervalli di crank

Tutti hanno compromessi.

---

## La Realtà

Nonostante quello che molti pensano, **non esiste una risposta perfetta o un percorso perfetto**. È già stato semplificato.

Tuttavia, ci sono suggerimenti per scegliere costantemente buoni percorsi, e nella prossima guida discuterò dei router FW e QTVLM e come usarli bene (lascerò Bitsailor a Hardtack!).

---

## Prossimi in Questa Serie

- **Parte 2:** Usare Efficacemente i Router FW e QTVLM
- **Parte 3:** Strategie di Routing Avanzate
