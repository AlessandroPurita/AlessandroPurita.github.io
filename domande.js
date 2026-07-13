const simulazioneCisia = {
    titolo: "Simulazione TEST ITA-L2 CISIA - Con Sezione Ascolto Integrata V6",
    parti: [
        // ==========================================
        // PARTE 1 - LIVELLO INIZIALE (A1/A2)
        // ==========================================
        {
            livello: "PARTE 1 - Livello Iniziale (A1/A2)",
            
            // --- SEZIONE 1: ASCOLTO ---
            ascolto: {
                titolo: "Sezione 1a: Prova di Ascolto",
                audioUrl: "audio/ascolto_p1.mp3",
                consegna: "Ascolta l'audio 'Un incontro all'università' e rispondi alle domande seguenti. Puoi ascoltare il brano al massimo due volte.",
                domande: [
                    {
                        id: "p1_a1",
                        domanda: "1. Dove si trovano i due ragazzi (Marco e Giulia) mentre parlano?",
                        opzioni: {
                            A: "All'interno degli uffici della segreteria studenti",
                            B: "All'esterno, precisamente davanti alla biblioteca",
                            C: "Alla fermata dell'autobus vicino all'università"
                        },
                        rispostaCorretta: "B"
                    },
                    {
                        id: "p1_a2",
                        domanda: "2. Quale documento aggiuntivo è obbligatorio presentare secondo l'esperienza di Giulia?",
                        opzioni: {
                            A: "Il codice fiscale in formato cartaceo",
                            B: "La fotocopia della carta d'identità aggiornata",
                            C: "La ricevuta stampata del pagamento delle tasse"
                        },
                        rispostaCorretta: "A"
                    }
                ]
            },

            // --- SEZIONE 2: LETTURA ---
            lettura: {
                titolo: "Sezione 1b: Testo della Prova di Lettura",
                testo: "Gentile dottoressa Bianchi,\n\nsono Marco Verdi, uno studente al secondo anno del Corso di Laurea in Lingue Straniere, matricola n. 554321. Le scrivo questa e-mail per chiederle alcune informazioni importanti riguardo al laboratorio di scrittura accademica che inizierà il mese prossimo, dato che venerdì scorso non ho potuto partecipare all'incontro di presentazione generale a causa di un forte mal di denti.\n\nAlcuni miei colleghi mi hanno spiegato che per ottenere i crediti formativi del laboratorio è necessario superare due verifiche: un test a scelta multipla al computer e la consegna di una relazione scritta finale. Riguardo al test al computer, mi hanno detto che verterà sulle regole grammaticali spiegate a lezione. Quante domande ci saranno nel test? C'è un limite di tempo rigido per completarlo sulla piattaforma online?\n\nSiccome vorrei iniziare a portarmi avanti con il lavoro e ripassare i concetti principali, volevo chiederle se può consigliarmi un manuale o un sito web dove trovare esercizi mirati. Ho già iniziato a leggere gli articoli scientifici indicati sul programma e ho preparato una breve bozza di riassunto sull'evoluzione dei linguaggi digitali. Posso inviarle questo file via e-mail per sapere se l'impostazione è corretta o se ci sono errori gravi?\n\nPer quanto riguarda invece la relazione scritta finale, avrei intenzione di analizzare i testi specialistici presenti nella guida del corso. Ha qualche indicazione particolare da darmi sulla lunghezza massima del testo? Nel caso in cui non dovessi superare la prova al primo tentativo, è possibile riprovare l'esame nell'appello di recupero fissato a fine luglio?\n\nInfine, Le chiedo cortesemente qual è il suo giorno di ricevimento per le próximas settimane. Sarebbe possibile fissare un breve colloquio nel suo studio per discutere della struttura della relazione finale e chiarire alcuni dubbi sulle tecniche di citazione bibliografica?\n\nLa ringrazio molto per la sua gentile disponibilità e resto in attesa di un suo cordiale riscontro.\n\nCordiali saluti,\nMarco Verdi"
            },
            comprensione: [
                {
                    id: "p1_c1",
                    domanda: "1. Lo studente scrive alla docente per chiedere informazioni:",
                    opzioni: {
                        A: "perché non è riuscito a superare il test di presentazione",
                        B: "sulle modalità di svolgimento del laboratorio di scrittura",
                        C: "perché vuole cambiare la sua matricola universitaria"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p1_c2",
                    domanda: "2. Per completare con successo il laboratorio di scrittura:",
                    opzioni: {
                        A: "bisogna superare esclusivamente un esame orale finale",
                        B: "è obbligatorio superare due prove distinte",
                        C: "occorre scrivere due diverse relazioni al computer"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p1_c3",
                    domanda: "3. Lo studente desidera sapere in particolare:",
                    opzioni: {
                        A: "se la verifica online ha una durata massima stabilita",
                        B: "a che ora del pomeriggio si terrà il test al computer",
                        C: "quante risposte sbagliate sono consentite per superare il test"
                    },
                    rispostaCorretta: "A"
                },
                {
                    id: "p1_c4",
                    domanda: "4. Nella sua e-mail, Marco chiede alla professoressa:",
                    opzioni: {
                        A: "una lista di tutti i libri di testo previsti per il prossimo anno",
                        B: "del materiale di supporto o dei testi per potersi esercitare",
                        C: "di scrivergli una bozza di riassunto sui linguaggi digitali"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p1_c5",
                    domanda: "5. Per la preparazione della relazione finale, Marco ha intenzione:",
                    opzioni: {
                        A: "di esaminare i materiali specialistici indicati nella guida del corso",
                        B: "di fare molti esercizi pratici sulla grammatica italiana",
                        C: "di scrivere un intero saggio sull'evoluzione dei computer"
                    },
                    rispostaCorretta: "A"
                },
                {
                    id: "p1_c6",
                    domanda: "6. Rispetto alla possibilità di un eventuale fallimento all'esame, Marco domanda:",
                    opzioni: {
                        A: "se è obbligato a frequentare nuovamente tutte le lezioni a settembre",
                        B: "se è previsto un appello per ripetere la prova a fine luglio",
                        C: "entro quanti giorni la docente pubblicherà i voti online"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p1_c7",
                    domanda: "7. Lo studente desidera incontrare di persona la professoressa:",
                    opzioni: {
                        A: "per chiederle di spiegare nuovamente l'evoluzione dei linguaggi",
                        B: "per ricevere chiarimenti sulle citazioni e sulla relazione",
                        C: "perché ha dimenticato di consegnare la bozza del riassunto"
                    },
                    rispostaCorretta: "B"
                }
            ],

            // --- SEZIONE 3: STRUTTURE LINGUISTICHE ---
            strutture: [
                {
                    titolo: "Primo microtesto: Il mio collega Carlos",
                    testo_bucato: "Conosco Carlos da sei mesi: ha 28 anni ed è nato _ (1) _ Spagna. Sua madre è argentina e _ (2) _ padre è spagnolo. Ha _ (3) _ ingegneria a Madrid e ora _ (4) _ a Milano per un progetto internazionale. Carlos è un ragazzo molto _ (5) _ e dinamico: lui fa sport ogni giorno e adora cucinare per i suoi amici.",
                    quesiti: [
                        { id: "p1_s1_1", spazio: "1", opzioni: { A: "in", B: "a", C: "di" }, rispostaCorretta: "A" },
                        { id: "p1_s1_2", spazio: "2", opzioni: { A: "sua", B: "suoi", C: "suo" }, rispostaCorretta: "C" },
                        { id: "p1_s1_3", spazio: "3", opzioni: { A: "studiare", B: "studiato", C: "studia" }, rispostaCorretta: "B" },
                        { id: "p1_s1_4", spazio: "4", opzioni: { A: "lavora", B: "ha lavorato", C: "lavorava" }, rispostaCorretta: "A" },
                        { id: "p1_s1_5", spazio: "5", opzioni: { A: "simpatico", B: "simpatici", C: "simpatica" }, rispostaCorretta: "A" }
                    ]
                },
                {
                    titolo: "Secondo microtesto: Consigli di viaggio",
                    testo_bucato: "Se quest'inverno resterete sempre chiusi in casa, non _ (1) _ mai a staccare la spina dalla routine. Per rigenerarsi bisogna partire, anche solo per due giorni: forse sarà faticoso, ma ne vale la pena. Organizzate un viaggio e presto vi _ (2) _ pronti a ricominciare. Se amate la natura, in montagna ci sono _ (3) _ occasioni di relax, ma dovete stare attenti a prenotare in tempo. Se invece _ (4) _ cercando una città d'arte, il treno ad alta velocità _ (5) _ aiuterà ad arrivare a destinazione in poche ore senza lo stress dell'auto.",
                    quesiti: [
                        { id: "p1_s2_1", spazio: "1", opzioni: { A: "riuscivate", B: "siete riusciti", C: "riuscirete" }, rispostaCorretta: "C" },
                        { id: "p1_s2_2", spazio: "2", opzioni: { A: "sentite", B: "sentirete", C: "sentivate" }, rispostaCorretta: "B" },
                        { id: "p1_s2_3", spazio: "3", opzioni: { A: "buone", B: "buona", C: "buoni" }, rispostaCorretta: "A" },
                        { id: "p1_s2_4", spazio: "4", opzioni: { A: "siete", B: "sta", C: "state" }, rispostaCorretta: "C" },
                        { id: "p1_s2_5", spazio: "5", opzioni: { A: "lo", B: "vi", C: "gli" }, rispostaCorretta: "B" }
                    ]
                }
            ]
        },

        // ==========================================
        // PARTE 2 - LIVELLO AVANZATO (B1/B2)
        // ==========================================
        {
            livello: "PARTE 2 - Livello Avanzato (B1/B2)",
            
            // --- SEZIONE 1: ASCOLTO ---
            ascolto: {
                titolo: "Sezione 2a: Prova di Ascolto",
                audioUrl: "audio/ascolto_p2.mp3",
                consegna: "Ascolta il servizio del Giornale Radio sulla mobilità urbana e rispondi alle domande seguenti. Puoi ascoltare l'audio al massimo due volte.",
                domande: [
                    {
                        id: "p2_a1",
                        domanda: "1. Qual è la principale novità strutturale del piano sperimentale introdotto dal Comune rispetto al passato?",
                        opzioni: {
                            A: "L'introduzione di rimborsi chilometrici diretti ai cittadini che usano mezzi non inquinanti",
                            B: "La sostituzione immediata e totale della flotta automobilistica privata del centro",
                            C: "L'aumento dei costi dei biglietti dei vecchi autobus a gasolio nelle ore di punta"
                        },
                        rispostaCorretta: "A"
                    },
                    {
                        id: "p2_a2",
                        domanda: "2. Chi ha il diritto di richiedere l'accesso agli incentivi economici sulla piattaforma?",
                        opzioni: {
                            A: "Esclusivamente gli studenti universitari fuori sede",
                            B: "Tutti i cittadini residenti che siano maggiorenni",
                            C: "Soltanto i dipendenti assunti presso aziende del centro storico"
                        },
                        rispostaCorretta: "B"
                    }
                ]
            },

            // --- SEZIONE 2: LETTURA ---
            lettura: {
                titolo: "Sezione 2b: Lettura",
                testo: "Negli ultimi decenni, lo sviluppo tecnologico ha ridefinito radicalmente non solo le abitudini quotidiane dei singoli individui, ma l'architettura stessa delle relazioni sociali all'interno dei contesti urbani. L'avvento della cosiddetta \"città intelligente\" (o smart city) si fonda sull'integrazione capillare di sistemi digitali in grado di raccogliere ed elaborare flussi di dati in tempo reale. Sebbene questo paradigma venga spesso celebrato per la sua indiscutibile capacità di ottimizzare l'efficienza dei servizi pubblici, dalla gestione automatizzata dei trasporti allo smaltimento dei rifiuti, una parte della sociologia urbana solleva interrogativi cruciali sulla progressiva privatizzazione degli spazi comuni di aggregazione.\n\nIl rischio principale non risiede tanto nell'adozione dello strumento tecnologico in sé, quanto nella tendenza a delegare ad algoritmi predittivi la risoluzione di problematiche sociali strutturali. Quando l'interazione umana all'interno dei quartieri viene interamente mediata da piattaforme digitali, i tradizionali luoghi di confronto fisico come le piazze e i centri culturali di quartiere subiscono un processo di marginalizzazione funzionale. Il cittadino rischia così di trasformarsi da attore politico attivo a mero fornitore passivo di informazioni commerciali, mentre i centri urbani si riconfigurano per responder più a logiche di mercato che alle reali necessità abitative della comunità.\n\nD'altro canto, non si può ignorare come le tecnologie dell'informazione offrano canali inediti di partecipazione democratica dal basso. Molti movimenti civici utilizzano le reti sociali per coordinare interventi di riqualificazione territoriale o per esercitare una vigilanza attiva sull'operato delle amministrazioni locali. Di conseguenza, l'ecosistema digitale si presenta come un terrain intrinsecamente conflittuale: una struttura che può tanto isolare l'individuo quanto amplificare la sua voce all'interno del dibattito pubblico. La sfida per le generazioni future consisterà nel governare queste transizioni, evitando che la digitalizzazione si traduca in una nuova forma di esclusione sociale per le fasce di popolazione meno alfabetizzate dal punto di vista tecnologico."
            },
            comprensione: [
                {
                    id: "p2_c1",
                    domanda: "1. Secondo il testo, il modello della \"città intelligente\" si basa principalmente su:",
                    opzioni: {
                        A: "l'abolizione totale dei trasporti pubblici tradizionali",
                        B: "l'inserimento diffuso di sistemi per l'elaborazione di dati in tempo reale",
                        C: "una riduzione delle spese per lo smaltimento dei rifiuti speciali"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p2_c2",
                    domanda: "2. Quale critica viene mossa da una parte della sociologia urbana?",
                    opzioni: {
                        A: "La tecnologia rende le piazze luoghi troppo rumorosi per i cittadini",
                        B: "I servizi di smaltimento rifiuti non funzionano in modo efficiente nelle grandi metropoli",
                        C: "Si sta verificando una progressiva privatizzazione dei luoghi pubblici di aggregazione"
                    },
                    rispostaCorretta: "C"
                },
                {
                    id: "p2_c3",
                    domanda: "3. Il termine \"marginalizzazione funzionale\" riferito ai luoghi fisici indica che:",
                    opzioni: {
                        A: "le piazze e i centri di quartiere perdono il loro ruolo centrale nella vita sociale",
                        B: "i centri culturali vengono chiusi per motivi legati alla sicurezza strutturale",
                        C: "gli spazi pubblici vengono utilizzati solo durante i fine settimana"
                    },
                    rispostaCorretta: "A"
                },
                {
                    id: "p2_c4",
                    domanda: "4. Nel contesto del secondo paragrafo, il cittadino corre il rischio di:",
                    opzioni: {
                        A: "dover pagare una tassa speciale per l'uso delle piattaforme online",
                        B: "diventare un soggetto passivo che produce dati a fini commerciali",
                        C: "non riuscire più a trovare alloggio nei quartieri periferici della città"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p2_c5",
                    domanda: "5. In che modo i movimenti civici sfruttano gli strumenti digitali secondo l'autore?",
                    opzioni: {
                        A: "Per vendere prodotti legati all'artigianato locale e finanziare le piazze",
                        B: "Per monitorare l'attività delle autorità locali e organizzare progetti nel territorio",
                        C: "Per sostituire completamente le elezioni comunali con votazioni online"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p2_c6",
                    domanda: "6. L'autore definisce l'ecosistema digitale come un \"terreno intrinsecamente conflittuale\" perché:",
                    opzioni: {
                        A: "genera continue discussioni e liti tra gli utenti sui social network",
                        B: "possiede la duplice capacità di isolare le persone o di favorire il dibattito democratico",
                        C: "richiede investimenti economici troppo elevati da parte dei governi"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p2_c7",
                    domanda: "7. Quale grande sfida viene indicata per il futuro delle città?",
                    opzioni: {
                        A: "Impedire che lo sviluppo tecnologico escluda chi ha meno competenze digitali",
                        B: "Aumentare il numero di algoritmi predittivi nei centri di ricerca universitari",
                        C: "Insegnare la sociologia urbana in tutti i corsi scolastici obbligatori"
                    },
                    rispostaCorretta: "A"
                }
            ],

            // --- SEZIONE 3: STRUTTURE LINGUISTICHE ---
            strutture: [
                {
                    titolo: "Primo microtesto: Il dibattito accademico",
                    testo_bucato: "Qualora il comitato scientifico _ (1) _ i finanziamenti per il progetto sulla sostenibilità, i ricercatori avrebbero potuto completare la raccolta dei dati sul campo. Si ritiene infatti indispensabile che ogni ateneo _ (2) _ di adeguate risorse economiche per sostenere la ricerca applicata. I risultati della ricerca, una volta elaborati, _ (3) _ presentati durante il congresso internazionale di Ginevra, _ (4) _ l'interesse manifestato da numerosi partner stranieri. Resta fermo l'auspicio che il ministero _ (5) _ a breve nuove linee guida operative.",
                    quesiti: [
                        { id: "p2_s1_1", spazio: "1", opzioni: { A: "abbia approvato", B: "approvasse", C: "approverà" }, rispostaCorretta: "B" },
                        { id: "p2_s1_2", spazio: "2", opzioni: { A: "disporrà", B: "dispone", C: "disponga" }, rispostaCorretta: "C" },
                        { id: "p2_s1_3", spazio: "3", opzioni: { A: "saranno", B: "sarebbero", C: "fossero" }, rispostaCorretta: "A" },
                        { id: "p2_s1_4", spazio: "4", opzioni: { A: "nonostante", B: "visto", C: "affinché" }, rispostaCorretta: "B" },
                        { id: "p2_s1_5", spazio: "5", opzioni: { A: "emetterà", B: "emette", C: "emetta" }, rispostaCorretta: "C" }
                    ]
                },
                {
                    titolo: "Secondo microtesto: L'evoluzione del mercato editoriale",
                    testo_bucato: "Negli ultimi anni la diffusione degli e-book ha modificato la filiera editoriale. Se gli editori avessero compreso subito la portata del fenomeno digitale, _ (1) _ investito prima nello sviluppo di piattaforme proprietarie. Ormai i lettori digitali si contano a milioni e la maggior parte delle case editrici _ (2) _ adatta a ritmi serrati alle nuove richieste del pubblico. Ciononostante, si teme che la pirateria informatica _ (3) _ danneggiare irreparabilmente il mercato degli auteurs emergenti. Gli esperti suggeriscono di adottare misure di protezione rigide, _ (4) _ gli utenti finali preferiscano comunque i canali di distribuzione legali. Sebbene il libro cartaceo mantenga il suo fascino, il digitale ha tracciato una strada da cui non _ (5) _ più indietro.",
                    quesiti: [
                        { id: "p2_s2_1", spazio: "1", opzioni: { A: "avessero", B: "avrebbero", C: "ebbero" }, rispostaCorretta: "B" },
                        { id: "p2_s2_2", spazio: "2", opzioni: { A: "si è", B: "ci si", C: "vi si" }, rispostaCorretta: "A" },
                        { id: "p2_s2_3", spazio: "3", opzioni: { A: "può", B: "potesse", C: "possa" }, rispostaCorretta: "C" },
                        { id: "p2_s2_4", spazio: "4", opzioni: { A: "purché", B: "affinché", C: "sebbene" }, rispostaCorretta: "B" },
                        { id: "p2_s2_5", spazio: "5", opzioni: { A: "si tornerà", B: "tornerà", C: "tornerebbe" }, rispostaCorretta: "B" }
                    ]
                }
            ]
        },

        // ==========================================
        // PARTE 3 - LIVELLO SUPERIORE (C1)
        // ==========================================
        {
            livello: "PARTE 3 - Livello Superiore (C1)",
            
            // --- SEZIONE 1: ASCOLTO ---
            ascolto: {
                titolo: "Sezione 3a: Prova di Ascolto",
                audioUrl: "audio/ascolto_p3.mp3",
                consegna: "Ascolta attentamente l'estratto della lezione accademica di linguistica cognitiva e rispondi ai quesiti. Puoi ascoltare il brano al massimo due volte.",
                domande: [
                    {
                        id: "p3_a1",
                        domanda: "1. Su quale asse o nucleo problematico si concentra l'attuale ricerca epistemologica citata?",
                        opzioni: {
                            A: "Sulla contrapposizione netta ed esclusiva tra comportamentismo e strutturalismo",
                            B: "Sulla complessa relazione e integrazione tra invarianti biologiche e fattori situazionali-ambientali",
                            C: "Sul rifiuto metodologico totale di applicare le neuroscienze all'analisi glottodidattica"
                        },
                        rispostaCorretta: "B"
                    },
                    {
                        id: "p3_a2",
                        domanda: "2. Cosa postula il concetto di 'categorizzazione incorporata' (embodied cognition) esposto dalla docente?",
                        opzioni: {
                            A: "Che la semantica si sviluppi indipendentemente dalle esperienze senso-motorie dell'individuo",
                            B: "Che la genesi dei significati sia radicata e rimodellata dall'esperienza corporea e biologica nel contesto",
                            C: "Che la mente funzioni esattamente come un software artificiale disincarnato privo di vincoli fisici"
                        },
                        rispostaCorretta: "B"
                    }
                ]
            },

            // --- SEZIONE 2: LETTURA ---
            lettura: {
                titolo: "Sezione 3b: Lettura",
                testo: "La riflessione novecentesca intorno alla natura intrinseca del segno linguistico ha lungamente risentito di una dicotomia strutturale, ereditata dal formalismo saussuriano, che tendeva a circoscrivere la lingua nell'alveo di un sistema chiuso di pure opposizioni concettuali. Tale astrazione metodologica, pur avendo garantito lo statuto autonomo della linguistica come scienza dogmatica, si rivela oggi parziale di fronte alle acquisizioni delle scienze cognitive e delle neuroscienze computazionali. L'evidenza empirica contemporanea suggerisce, al contrario, che l'architettura semantica non si dipani in un vuoto biologico o sociale, bensì emerga da dinamiche di co-evoluzione tra le strutture neurali dell'individuo e le sollecitazioni fenomenologiche dell'ambiente circostante. L'antico concetto di \"arbitrarietà radicale\" viene così parzialmente ridimensionato a favore di modelli epistemici fondati sulla cognizione situata, dove il significato non è un dato astratto e cristallizzato, ma un processo plastico in perenne riconfigurazione incarnata (embodied).\n\nIn questa prospettiva revisionista, il linguaggio cessa di configurarsi come un mero codice speculare deputato alla categorizzazione di una realtà ontologicamente preesistente. Esso opera, piuttosto, quale dispositivo poietico e trasformativo, capace di plasmare i confini cognitivi entro cui l'esperienza stessa si manifesta. Ne consegue che le variazioni micro-strutturali di un idioma non costituiscono semplici accidenti storici o varianti decorative, ma configurano veri e propri vettori orientativi dell'attenzione percettiva. Le implicazioni di tale mutamento di paradigma investono non soltanto la filosofia del linguaggio, ma anche i fondamenti della glottodidattica. Apprendere una seconda lingua (L2), specialmente in età adulta o in contesti accademici complessi, non equivale semplicemente ad assimilare un inventario di corrispondenze lessicali e formali alternative, bensì comporta una vera e propria ristrutturazione delle mappe concettuali e delle architetture dell'attenzione logica.\n\nSarebbe tuttavia fuorviante interpretare questa fluidità semantica come un cedimento verso forme di relativismo culturale assoluto o di scetticismo gnoseologico. L'esistenza di vincoli biologici condivisi e di regolarità sistemiche profonde impedisce che la plasticità del segno decada in un'anarchia comunicativa priva di validità intersoggettiva. L'esperienza dell'alterità linguistica funge semmai da catalizzatore critico, obbligando il discente a oggettivare i propri automatismi interpretativi. La vera competenza linguistica superiore si colloca precisamente in questo spazio intermedio: la capacità di transitare consapevolmente tra schemi concettuali eterogenei senza smarrire il nucleo logico profondo dell'enunciazione. La sfida teorica consiste pertanto nel coniugare la stabilità strutturale del codice con la flessibilità dinamica della sua attuazione nei contesti storici contemporanei."
            },
            comprensione: [
                {
                    id: "p3_c1",
                    domanda: "1. Quale limite viene attribuito alla dicotomia di impianto saussuriano nel primo paragrafo?",
                    opzioni: {
                        A: "Di aver isolato la lingua da fattori biologici e sociali, definendola come un sistema puramente chiuso",
                        B: "Di non aver fornito alla linguistica moderne un adeguato statuto di autonomia scientifica",
                        C: "Di aver negato l'esistenza di opposizioni concettuali formali all'interno della fonologia"
                    },
                    rispostaCorretta: "A"
                },
                {
                    id: "p3_c2",
                    domanda: "2. L'espressione \"cognizione situata\" implica che il significato:",
                    opzioni: {
                        A: "nasca unicamente all'interno di precise coordinate geografiche e storiche fisse",
                        B: "sia il prodotto dinamico dell'interazione incarnata tra strutture neurali e ambiente",
                        C: "sia una struttura logica astratta che non subisce modifiche nel corso del tempo"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p3_c3",
                    domanda: "3. Nel secondo paragrafo, il linguaggio viene definito come un \"dispositivo poietico\" per indicare che esso:",
                    opzioni: {
                        A: "ha una funzione principalmente estetica e poetica all'interno dei generi letterari",
                        B: "si limita a rispecchiare fedelmente le categorie di una realtà oggettiva preesistente",
                        C: "concorre attivamente a strutturare e plasmare i confini della nostra esperienza cognitiva"
                    },
                    rispostaCorretta: "C"
                },
                {
                    id: "p3_c4",
                    domanda: "4. In base alle tesi dell'autore, l'apprendimento di una seconda lingua in contesti complessi comporta:",
                    opzioni: {
                        A: "il semplice accumulo meccanico di vocaboli speculari rispetto alla propria lingua madre",
                        B: "una parziale riorganizzazione delle abitudini attenzionali e delle strutture concettuali",
                        C: "il definitivo smarrimento della capacità di formulare giudizi logici coerenti"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p3_c5",
                    domanda: "5. Perché, secondo l'autore, la fluidità semantica non sfocia nel relativismo culturale assoluto?",
                    opzioni: {
                        A: "Perché le università impongono regole di grammatica normativa stabili e severe",
                        B: "A causa della presenza di vincoli biologici universali e di costanti sistemiche profonde",
                        C: "Perché l'anarchia comunicativa viene tollerata esclusivamente nella lingua parlata"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p3_c6",
                    domanda: "6. Nel terzo paragrafo, il termine \"intersoggettiva\" si riferisce a una validità che:",
                    opzioni: {
                        A: "riguarda esclusivamente la sfera interiore del singolo parlante isolato",
                        B: "è condivisa ed efficace tra più soggetti all'interno del processo comunicativo",
                        C: "viene stabilita per decreto dalle accademie filologiche internazionali"
                    },
                    rispostaCorretta: "B"
                },
                {
                    id: "p3_c7",
                    domanda: "7. La massima competenza linguistica superiore si manifesta come la capacità di:",
                    opzioni: {
                        A: "muoversi consapevolmente tra paradigmi concettuali diversi preservando la coerenza logica",
                        B: "eliminare ogni forma di variazione micro-strutturale per standardizzare la comunicazione",
                        C: "memorizzare i codici lessicali storici senza apportarvi alcuna innovazione d'uso"
                    },
                    rispostaCorretta: "A"
                }
            ],

            // --- SEZIONE 3: STRUTTURE LINGUISTICHE ---
            strutture: [
                {
                    titolo: "Primo microtesto: Il formalismo e l'evoluzione epistemologica",
                    testo_bucato: "Ove i critici dell'ermeneutica novecentesca _ (1) _ con maggiore acribia le tesi saussuriane, non avrebbero ridotto l'arbitrarietà del segno a una mera convenzione sociale. Si rende perciò necessario che il ricercatore odierno _ (2) _ del dogmatismo metodologico del passato e sappia cogliere l'intima fluidità delle strutture semantiche. I modelli teorici finora elaborati, sebbene validi, _ (3) _ superati dall'incedere delle neuroscienze, _ (4) _ l'urgenza di una sintesi interdisciplinare. Resta l'auspicio che il mondo accademico non _ (5) _ arroccato su posizioni anacronistiche.",
                    quesiti: [
                        { id: "p3_s1_1", spazio: "1", opzioni: { A: "vagliassero", B: "avessero vagliato", C: "vaglino" }, rispostaCorretta: "B" },
                        { id: "p3_s1_2", spazio: "2", opzioni: { A: "si spoglierebbe", B: "si spoglia", C: "si spogli" }, rispostaCorretta: "C" },
                        { id: "p3_s1_3", spazio: "3", opzioni: { A: "risulterebbero", B: "risultano", C: "risultassero" }, rispostaCorretta: "B" },
                        { id: "p3_s1_4", spazio: "4", opzioni: { A: "stante", B: "benché", C: "malgrado" }, rispostaCorretta: "A" },
                        { id: "p3_s1_5", spazio: "5", opzioni: { A: "rimarrebbe", B: "rimanga", C: "rimanesse" }, rispostaCorretta: "B" }
                    ]
                },
                {
                    titolo: "Secondo microtesto: I processi di acquisizione linguistica",
                    testo_bucato: "Se l'apprendimento della L2 in età adulta non implicasse una profonda ristrutturazione cognitiva, i discenti non _ (1) _ le medesime resistenze attenzionali riscontrate sperimentalmente. Si postula, al contrario, che l'architettura cerebrale _ (2) _ riconfigurarsi dinamicamente sotto la pressione dell'input esterno. Malgrado l'evidenza clinica _ (3) _ confermare siffatta plasticità, persistono sacche di scetticismo all'interno dei vecchi paradigmi glottodidattici. È essenziale ridefinire le pratiche di insegnamento _ (4) _ esse rispecchino fedelmente i correlati neurali della comprensione, senza che si _ (5) _ la necessaria stabilità del codice formale.",
                    quesiti: [
                        { id: "p3_s2_1", spazio: "1", opzioni: { A: "avessero palesato", B: "palesassero", C: "paleserebbero" }, rispostaCorretta: "C" },
                        { id: "p3_s2_2", spazio: "2", opzioni: { A: "deve", B: "debba", C: "dovrebbe" }, rispostaCorretta: "B" },
                        { id: "p3_s2_3", spazio: "3", opzioni: { A: "sembra", B: "sembrasse", C: "sembri" }, rispostaCorretta: "C" },
                        { id: "p3_s2_4", spazio: "4", opzioni: { A: "affinché", B: "sebbene", C: "intanto che" }, rispostaCorretta: "A" },
                        { id: "p3_s2_5", spazio: "5", opzioni: { A: "sacrifichi", B: "sacrificherà", C: "sacrificasse" }, rispostaCorretta: "A" }
                    ]
                }
            ]
        }
    ]
};