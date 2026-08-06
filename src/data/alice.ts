export type StatusKey =
  | "concept"
  | "planned"
  | "development"
  | "alpha"
  | "beta"
  | "stable"
  | "maintenance";

export const STATUS: Record<StatusKey, { label: string; icon: string }> = {
  concept: { label: "Concept", icon: "💡" },
  planned: { label: "Planned", icon: "📋" },
  development: { label: "In Development", icon: "🚧" },
  alpha: { label: "Alpha", icon: "🧪" },
  beta: { label: "Beta", icon: "🔶" },
  stable: { label: "Stable", icon: "✅" },
  maintenance: { label: "Maintenance", icon: "🛠" },
};

export interface Project {
  name: string;
  role: string;
  description: string;
  standalone: boolean;
  integrated: boolean;
  platforms: string[];
  status: StatusKey;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "Cardinal",
    role: "Core Platform",
    description:
      "Cardinal è il cuore dell'ecosistema ALICE: collega tutte le applicazioni, gestisce utenti, notifiche e integrazioni. Un solo posto da cui l'azienda controlla tutto, senza saltare da un programma all'altro.",
    standalone: false,
    integrated: true,
    platforms: ["Web", "Desktop"],
    status: "planned", // "development",
    features: [
      "Application launcher",
      "Dashboard unificata",
      "Notifiche centralizzate",
      "Gestione moduli",
      "API Gateway",
    ],
  },
  {
    name: "Light-Cube",
    role: "Identity & Access",
    description:
      "Light-Cube protegge i vostri dati decidendo chi può vedere e fare cosa: un unico accesso per tutte le applicazioni, ruoli e permessi chiari, niente password sparse tra i reparti.",
    standalone: true,
    integrated: true,
    platforms: ["Web", "API"],
    status: "planned", // "development",
    features: [
      "Gestione utenti e organizzazioni",
      "Ruoli e permessi",
      "Autenticazione API",
      "Multi-factor authentication (futuro)",
    ],
  },
  {
    name: "Underworld",
    role: "Management Software",
    description:
      "Underworld manda avanti il lavoro quotidiano: clienti, preventivi, fatture, documenti e assistenza in un unico gestionale. Meno fogli Excel, meno tempo perso, tutto lo storico sempre a portata di mano.",
    standalone: true,
    integrated: true,
    platforms: ["Web"],
    status: "planned", // "development",
    features: [
      "CRM e gestione clienti",
      "Preventivi e fatturazione",
      "Documenti",
      "Ticketing",
      "Magazzino e Finance (futuro)",
    ],
  },
  {
    name: "Yui",
    role: "AI Assistant",
    description:
      "Yui è l'assistente che toglie il lavoro ripetitivo dalle mani del team: scrive e riassume documenti, ritrova in un attimo i dati aziendali e porta a termine le procedure al posto vostro.",
    standalone: true,
    integrated: true,
    platforms: ["Web", "Desktop"],
    status: "planned",
    features: [
      "Generazione documenti",
      "Sintesi riunioni",
      "Ricerca sui dati aziendali",
      "Esecuzione di workflow",
    ],
  },
  {
    name: "Ordinal Scale",
    role: "Communication",
    description:
      "Ordinal Scale tiene unito il team: messaggi, canali, chiamate e file nello stesso posto in cui si lavora, così le decisioni restano collegate ai clienti e ai progetti invece di perdersi nelle chat personali.",
    standalone: true,
    integrated: true,
    platforms: ["Mobile", "Desktop"],
    status: "planned",
    features: [
      "Messaggi diretti e canali",
      "Chiamate voce e video",
      "Condivisione file",
      "Conversazioni assistite da AI",
    ],
  },
  {
    name: "Augma-OS",
    role: "Smart Glasses OS",
    description:
      "Augma-OS porta il gestionale davanti agli occhi di chi lavora sul campo: istruzioni, dati e conferme a mani libere, senza tornare al computer per registrare quello che è stato fatto.",
    standalone: true,
    integrated: true,
    platforms: ["Smart Glasses"],
    status: "concept",
    features: [
      "Interfaccia a bassa latenza",
      "Integrazione AI",
      "Interazione hands-free",
      "Gestione remota",
    ],
  },
  {
    name: "Aincrad",
    role: "Secure Operating System",
    description:
      "Aincrad rende sicure e veloci le postazioni di lavoro: un sistema operativo leggero che protegge i dati aziendali, allunga la vita ai computer esistenti e si aggiorna senza fermare nessuno.",
    standalone: true,
    integrated: true,
    platforms: ["PC"],
    status: "concept",
    features: ["Sicurezza", "Performance", "Privacy", "Deployment enterprise"],
  },
];

export const PRINCIPLES = [
  { title: "Si parte da ciò che serve", text: "Attivate solo i moduli utili oggi: nessuna spesa per funzioni che non usereste." },
  { title: "Parla con i vostri sistemi", text: "Tutto è collegabile ai programmi che già usate: niente doppi inserimenti." },
  { title: "I dati restano vostri", text: "Accessi controllati persona per persona e hosting dove preferite: vostri server o cloud ALICE." },
  { title: "Veloce anche su PC normali", text: "Software leggero: non serve cambiare hardware per lavorare senza attese." },
  { title: "Ovunque lavoriate", text: "Ufficio, negozio, cantiere o in mobilità: web, desktop, mobile e dispositivi indossabili." },
  { title: "Meno lavoro ripetitivo", text: "L'AI compila, riassume e cerca al posto vostro: il team si concentra sui clienti." },
  { title: "Liberi di cambiare idea", text: "Import ed export sempre disponibili: nessun vincolo che vi tenga prigionieri." },
];

/* ---------- PRICING (tutti i valori sono modificabili) ---------- */

/** Quota una tantum di base: analisi, setup ambiente e Cardinal come hub dell'ecosistema. */
export const BASE_SETUP = 4950;

export type HostingKey = "on-premise" | "cloud";

export interface HostingOption {
  id: HostingKey;
  name: string;
  description: string;
  /** Canone mensile di base. */
  monthly: number;
}

export const HOSTING_OPTIONS: HostingOption[] = [
  {
    id: "on-premise",
    name: "On premise",
    description:
      "Il sistema gira sui vostri server. Canone per aggiornamenti, assistenza, manutenzione e supporto sistemistico.",
    monthly: 750,
  },
  {
    id: "cloud",
    name: "Cloud ALICE",
    description:
      "Infrastruttura gestita da noi: hosting, backup, monitoraggio e scalabilità inclusi, oltre ad aggiornamenti e assistenza.",
    monthly: 1900,
  },
];

export interface PricingModule {
  id: string;
  name: string;
  /** Progetto dell'ecosistema a cui appartiene il modulo. */
  product: string;
  description: string;
  /** Aggiunta alla quota una tantum. */
  setup: number;
  /** Aggiunta al canone mensile per hosting on premise (0 = nessun aumento). */
  monthlyOnPremise: number;
  /** Aggiunta al canone mensile per hosting sul cloud ALICE (0 = nessun aumento). */
  monthlyCloud: number;
  status: StatusKey;
  /** Nota mostrata quando il modulo incide sul canone. */
  monthlyNote?: string;
}

export const PRICING_MODULES: PricingModule[] = [
  {
    id: "crm",
    name: "CRM e clienti",
    product: "Underworld",
    description: "Anagrafiche, pipeline commerciale, attività e storico delle relazioni.",
    setup: 900,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned", // "development",
  },
  {
    id: "fatturazione",
    name: "Preventivi e fatturazione",
    product: "Underworld",
    description: "Preventivi, ordini, fatture elettroniche e scadenzario.",
    setup: 1100,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned", // "development",
  },
  {
    id: "documenti",
    name: "Documenti",
    product: "Underworld",
    description: "Archivio documentale con versioni, permessi e ricerca.",
    setup: 700,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned", // "development",
  },
  {
    id: "ticketing",
    name: "Ticketing e assistenza",
    product: "Underworld",
    description: "Richieste dei clienti, code di lavoro, SLA e note interne.",
    setup: 800,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned", // "development",
  },
  {
    id: "magazzino",
    name: "Magazzino e Finance",
    product: "Underworld",
    description: "Giacenze, movimenti, listini e primo livello di controllo di gestione.",
    setup: 1400,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned",
  },
  {
    id: "light-cube-pro",
    name: "Identity avanzata",
    product: "Light-Cube",
    description: "SSO, multi-organizzazione, autenticazione a più fattori e audit degli accessi.",
    setup: 950,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "planned", // "development",
  },
  {
    id: "yui",
    name: "Yui — assistente AI",
    product: "Yui",
    description: "Generazione documenti, sintesi riunioni, ricerca sui dati aziendali e workflow.",
    setup: 4200,
    monthlyOnPremise: 200,
    monthlyCloud: 2300,
    status: "planned",
    monthlyNote:
      "Il modello AI richiede risorse dedicate: sui vostri server il canone aggiuntivo copre licenze e manutenzione, sul cloud ALICE include anche l'infrastruttura di calcolo.",
  },
  {
    id: "ordinal-scale",
    name: "Ordinal Scale — collaborazione",
    product: "Ordinal Scale",
    description: "Messaggi, canali, chiamate e condivisione file integrati con Cardinal.",
    setup: 6000,
    monthlyOnPremise: 100,
    monthlyCloud: 100,
    status: "planned",
    monthlyNote: "Servizio sempre attivo con gestione di traffico e archivi delle conversazioni.",
  },
  {
    id: "augma-os",
    name: "Augma-OS — smart glasses",
    product: "Augma-OS",
    description: "Operatività hands-free sul campo con gestione remota dei dispositivi.",
    setup: 4200,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "concept",
  },
  {
    id: "aincrad",
    name: "Aincrad — sistema operativo",
    product: "Aincrad",
    description: "Postazioni sicure e leggere con deployment e aggiornamenti gestiti.",
    setup: 5000,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "concept",
  },
];

export const PRICING_EXTRAS = [
  { name: "Integrazione custom", price: "da € 1.200 una tantum", text: "Connettore verso un gestionale, e-commerce o servizio esterno." },
  { name: "Migrazione dati", price: "da € 700 una tantum", text: "Importazione e bonifica dello storico dai sistemi attuali." },
  { name: "Formazione del team", price: "€ 450 / giornata", text: "Sessioni pratiche sugli strumenti attivati, in sede o da remoto." },
  { name: "Ore di sviluppo extra", price: "€ 70 / ora", text: "Sviluppi fuori canone su richiesta, tracciati e rendicontati." },
];



/* ---------- SOLUZIONI VERTICALI (gestionali già pronti) ---------- */

export interface VerticalSolution {
  id: string;
  /** Nome commerciale del gestionale. */
  name: string;
  /** Settore di riferimento. */
  sector: string;
  tagline: string;
  description: string;
  /** Quota una tantum di attivazione (comprende setup e configurazione). */
  setup: number;
  /** Canone mensile con hosting sui server del cliente. */
  monthlyOnPremise: number;
  /** Canone mensile con hosting sul cloud ALICE. */
  monthlyCloud: number;
  status: StatusKey;
  /** Funzioni incluse nel pacchetto. */
  includes: string[];
  /** Moduli opzionali attivabili sopra al pacchetto (id di PRICING_MODULES). */
  optionalModuleIds: string[];
}

export const VERTICAL_SOLUTIONS: VerticalSolution[] = [
  {
    id: "asuna",
    name: "Asuna",
    sector: "Hotel e strutture ricettive",
    tagline: "Camere sempre piene, reception senza stress",
    description:
      "Asuna toglie il caos dalla reception: vedete a colpo d'occhio camere libere e occupate, evitate overbooking, gestite tariffe e conti degli ospiti in pochi clic e chiudete la giornata con i numeri già pronti.",
    setup: 2900,
    monthlyOnPremise: 290,
    monthlyCloud: 490,
    status: "development",
    includes: [
      "Planning camere e disponibilità",
      "Prenotazioni e check-in / check-out",
      "Tariffe stagionali e listini",
      "Anagrafica ospiti e conti",
      "Fatturazione e corrispettivi",
    ],
    optionalModuleIds: ["light-cube-pro", "documenti", "ticketing", "yui", "ordinal-scale"],
  },
  {
    id: "agil",
    name: "Agil",
    sector: "Negozi e retail",
    tagline: "Vendere di più sapendo sempre cosa avete in negozio",
    description:
      "Agil rende la cassa veloce e il magazzino affidabile: giacenze aggiornate a ogni vendita, promozioni gestite senza errori e report chiari su cosa gira davvero e cosa resta fermo sugli scaffali.",
    setup: 2400,
    monthlyOnPremise: 240,
    monthlyCloud: 420,
    status: "planned", // "development",
    includes: [
      "Punto cassa e scontrini",
      "Magazzino e giacenze",
      "Listini, sconti e promozioni",
      "Anagrafica clienti e fidelity",
      "Report vendite",
    ],
    optionalModuleIds: ["light-cube-pro", "crm", "fatturazione", "yui", "ordinal-scale"],
  },
  {
    id: "argo",
    name: "Argo",
    sector: "Attrazioni turistiche e guide",
    tagline: "Più prenotazioni, zero doppioni in calendario",
    description:
      "Argo tiene sotto controllo visite, tour e gruppi: disponibilità aggiornata in tempo reale, prenotazioni online che entrano da sole nel calendario, check-in rapido all'ingresso e incassi sempre quadrati.",
    setup: 2700,
    monthlyOnPremise: 260,
    monthlyCloud: 450,
    status: "planned",
    includes: [
      "Calendario tour ed esperienze",
      "Biglietteria e check-in",
      "Gestione gruppi e guide",
      "Prenotazioni online",
      "Incassi e report",
    ],
    optionalModuleIds: ["light-cube-pro", "crm", "documenti", "yui", "ordinal-scale"],
  },
  {
    id: "lizbeth",
    name: "Lizbeth",
    sector: "Artigiani e laboratori",
    tagline: "Sapere quanto costa davvero ogni lavoro",
    description:
      "Lizbeth mette ordine in laboratorio: ogni commessa con materiali, ore e costi reali, preventivi pronti in pochi minuti e fatture che partono senza rincorrere i fogli sparsi in officina.",
    setup: 2200,
    monthlyOnPremise: 220,
    monthlyCloud: 390,
    status: "planned",
    includes: [
      "Commesse e stato lavorazioni",
      "Materiali e consumi",
      "Ore di lavoro e costi",
      "Preventivi e fatture",
      "Storico clienti",
    ],
    optionalModuleIds: ["light-cube-pro", "crm", "documenti", "ticketing", "ordinal-scale"],
  },
];
