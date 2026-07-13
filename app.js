let domandeAppiattite = [];
let paginaCorrente = 0;
let timerIntervallo = null;
let tempoRimanente = 60 * 30; // 60 minuti

document.addEventListener("DOMContentLoaded", () => {
    preparaDomande();
    mostraSchermataIniziale();
});

// Trasforma la struttura ad albero del PDF in un array lineare di pagine
function preparaDomande() {
    simulazioneCisia.parti.forEach((parte) => {
        // 1. Aggiungi la comprensione del testo come blocco unico o diviso
        parte.comprensione.forEach((q) => {
            domandeAppiattite.push({
                tipo: 'comprensione',
                livello: parte.livello,
                lettura: parte.lettura,
                dati: q
            });
        });

        // 2. Aggiungi i microtesti delle strutture linguistiche
        if (parte.strutture) {
            parte.strutture.forEach((micro) => {
                domandeAppiattite.push({
                    tipo: 'struttura',
                    livello: parte.livello,
                    titolo: micro.titolo,
                    testo_bucato: micro.testo_bucato,
                    quesiti: micro.quesiti
                });
            });
        }
    });
}

function mostraSchermataIniziale() {
    const container = document.getElementById("contenitore-esame");
    container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <h2 style="color: #0056b3; margin-bottom: 20px;">Benvenuto nella Simulazione CISIA ITA-L2</h2>
            <p style="margin-bottom: 30px; color: #555;"> Il test è composto da domande di comprensione del testo e strutture linguistiche da completare.<br>
            Avrai a disposizione <strong>60 minuti</strong> in totale. Il tempo partirà non appena premerai il tasto qui sotto.</p>
            <button type="button" class="btn-invia" id="btn-avvia" onclick="iniziaEsame()">Avvia Test</button>
        </div>
    `;
    document.querySelector('.azione-container').style.display = 'none';
}

function iniziaEsame() {
    document.querySelector('.azione-container').style.display = 'flex';
    avviaTimer();
    mostraPagina(0);
}

function mostraPagina(indice) {
    paginaCorrente = indice;
    const container = document.getElementById("contenitore-esame");
    const item = domandeAppiattite[paginaCorrente];
    let html = `<span class="badge-livello">${item.livello}</span>`;

    if (item.tipo === 'comprensione') {
        html += `
            <div class="testo-lettura">
                <h3>${item.lettura.titolo}</h3>
                <p>${item.lettura.testo}</p>
            </div>
            <div class="blocco-domanda" id="blocco-${item.dati.id}" data-correct="${item.dati.rispostaCorretta}">
                <p><strong>${item.dati.domanda}</strong></p>
                <div class="opzioni-container">
                    ${Object.entries(item.dati.opzioni).map(([chiave, valore]) => {
                        const checked = salvataggioRisposte[item.dati.id] === chiave ? 'checked' : '';
                        return `
                            <label class="opzione">
                                <input type="radio" name="${item.dati.id}" value="${chiave}" ${checked} onchange="salvaRispostaRadio('${item.dati.id}', '${chiave}')">
                                <strong>${chiave}.</strong> ${valore}
                            </label>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (item.tipo === 'struttura') {
        // Sostituisce i placeholder _ (1) _ con dei campi di testo (textbox)
        let testoElaborato = item.testo_bucato;
        let elencoOpzioniHtml = `<div class="box-aiuto-opzioni"><strong>Opzioni disponibili da digitare:</strong><ul style="margin-top:5px; padding-left:20px;">`;

        item.quesiti.forEach((q) => {
            const valoreInserito = salvataggioRisposte[q.id] || '';
            const inputTxt = `<input type="text" class="input-spazio" id="input-${q.id}" value="${valoreInserito}" placeholder="(${q.spazio})" oninput="salvaRispostaTesto('${q.id}', this.value)">`;
            
            // Regex per intercettare pattern dinamici come _ (1) _ o _ (2) _
            const regexPlaceholder = new RegExp(`_\\s*\\(${q.spazio}\\)\\s*_`, 'g');
            testoElaborato = testoElaborato.replace(regexPlaceholder, inputTxt);

            // Genera specchietto delle opzioni A, B, C per aiutare lo studente
            const opzioniStringa = Object.entries(q.opzioni).map(([k, v]) => `${k}: ${v}`).join(' | ');
            elencoOpzioniHtml += `<li><strong>Spazio ${q.spazio}:</strong> ${opzioniStringa}</li>`;
        });
        elencoOpzioniHtml += `</ul></div>`;

        html += `
            <div class="testo-lettura" style="border-left-color: #007bff; background-color: #f4f8ff;">
                <h4>${item.titolo}</h4>
                <p style="line-height: 2.3; font-size: 1.1rem;">${testoElaborato}</p>
            </div>
            ${elencoOpzioniHtml}
        `;
    }

    container.innerHTML = html;
    aggiornaBottoniNavigazione();
}

// Stato globale temporaneo delle risposte date dall'utente
let salvataggioRisposte = {};

function salvaRispostaRadio(id, valore) { salvataggioRisposte[id] = valore; }
function salvaRispostaTesto(id, valore) { salvataggioRisposte[id] = valore.trim(); }

function aggiornaBottoniNavigazione() {
    const containerAzioni = document.querySelector(".azione-container");
    
    const isPrimaPagina = paginaCorrente === 0;
    const isUltimaPagina = paginaCorrente === domandeAppiattite.length - 1;

    containerAzioni.innerHTML = `
        <button type="button" class="btn-nav" ${isPrimaPagina ? 'disabled style="opacity:0.5"' : ''} onclick="mostraPagina(${paginaCorrente - 1})">Precedente</button>
        <span style="align-self:center; font-weight:600;">Pagina ${paginaCorrente + 1} di ${domandeAppiattite.length}</span>
        ${isUltimaPagina 
            ? `<button type="button" class="btn-invia" onclick="valutaEsame()">Invia e Termina la Prova</button>`
            : `<button type="button" class="btn-nav" onclick="mostraPagina(${paginaCorrente + 1})">Domanda Seguente</button>`
        }
    `;
}

function avviaTimer() {
    const display = document.getElementById('tempo');
    timerIntervallo = setInterval(() => {
        let minuti = parseInt(tempoRimanente / 60, 10);
        let secondi = parseInt(tempoRimanente % 60, 10);

        minuti = minuti < 10 ? "0" + minuti : minuti;
        secondi = secondi < 10 ? "0" + secondi : secondi;

        // RIGA CORRETTA:
        display.textContent = minuti + ":" + secondi;

        if (--tempoRimanente < 0) {
            clearInterval(timerIntervallo);
            alert("Tempo scaduto! Sottomissione automatica della prova.");
            valutaEsame();
        }
    }, 1000);
}

function valutaEsame() {
    clearInterval(timerIntervallo);
    document.getElementById("timer").style.display = "none";
    
    let punteggio = 0;
    let totaleQuesiti = 0;
    let riepilogoHtml = `<div class="sezione-esame"><h2>Revisione Completa dell'Esame</h2>`;

    simulazioneCisia.parti.forEach((parte) => {
        riepilogoHtml += `<h3 style="margin-top:20px; color:#0056b3;">${parte.livello}</h3>`;

        // Verifica Comprensione
        parte.comprensione.forEach((q) => {
            totaleQuesiti++;
            const dataData = salvataggioRisposte[q.id];
            const esatta = dataData === q.rispostaCorretta;
            if (esatta) punteggio++;

            riepilogoHtml += `
                <div class="blocco-domanda" style="background-color: ${esatta ? '#d4edda' : '#f8d7da'}; margin-bottom:10px;">
                    <p><strong>${q.domanda}</strong></p>
                    <p>Tua risposta: <strong>${dataData || 'Nessuna'}</strong> | Risposta corretta: <strong>${q.rispostaCorretta}</strong></p>
                    <p style="font-style:italic; font-size:0.9rem; color:#444;">${q.spiegazione || ''}</p>
                </div>
            `;
        });

        // Verifica Strutture
        if (parte.strutture) {
            parte.strutture.forEach((micro) => {
                riepilogoHtml += `<div class="blocco-domanda" style="background:#fff; border-left:4px solid #007bff;"><strong>${micro.titolo}</strong><br><br>`;
                micro.quesiti.forEach((q) => {
                    totaleQuesiti++;
                    const dataData = (salvataggioRisposte[q.id] || '').toUpperCase();
                    const esatta = dataData === q.rispostaCorretta;
                    if (esatta) punteggio++;

                    riepilogoHtml += `
                        <div style="padding:5px 10px; margin:5px 0; background:${esatta ? '#d4edda' : '#f8d7da'}; border-radius:4px;">
                            Spazio (${q.spazio}) -> Tua inserita: <strong>${dataData || 'Vuoto'}</strong> | Corretta: <strong>${q.rispostaCorretta}</strong> (${q.opzioni[q.rispostaCorretta]})
                        </div>
                    `;
                });
                riepilogoHtml += `</div>`;
            });
        }
    });

    riepilogoHtml += `</div>`;

    const output = document.getElementById("risultato");
    output.style.display = "block";
    output.style.backgroundColor = "#e2e3e5";
    const percentuale = ((punteggio / totaleQuesiti) * 100).toFixed(1);
    
    output.innerHTML = `
        <h3>Risultato Finale</h3>
        <p>Punteggio: <strong>${punteggio}</strong> su <strong>${totaleQuesiti}</strong> domande esatte.</p>
        <p>Percentuale di accuratezza: <strong>${percentuale}%</strong></p>
    `;

    document.getElementById("contenitore-esame").innerHTML = riepilogoHtml;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}