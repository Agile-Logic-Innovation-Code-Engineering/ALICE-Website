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
      "Il punto di ingresso dell'intero ecosistema ALICE: launcher applicazioni, dashboard, notifiche, gestione moduli, configurazione centrale, API Gateway e livello di integrazione.",
    standalone: false,
    integrated: true,
    platforms: ["Web", "Desktop"],
    status: "development",
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
      "Gestione di identità e accessi condivisa da ogni applicazione: utenti, organizzazioni, ruoli e permessi, autenticazione applicativa e API.",
    standalone: true,
    integrated: true,
    platforms: ["Web", "API"],
    status: "development",
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
      "Il gestionale modulare costruito su Cardinal: CRM, clienti, preventivi, fatturazione, documenti e ticketing, con magazzino e finance in arrivo.",
    standalone: true,
    integrated: true,
    platforms: ["Web"],
    status: "development",
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
      "Automazione intelligente trasversale all'ecosistema: genera documenti, riassume riunioni, cerca dati aziendali ed esegue workflow.",
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
      "Piattaforma di messaggistica e collaborazione enterprise, integrata con Cardinal e Yui.",
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
      "Sistema operativo leggero per dispositivi indossabili, con interfaccia a bassa latenza e gestione remota via Cardinal.",
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
      "Sistema operativo desktop leggero orientato a sicurezza, performance e privacy, con deployment enterprise.",
    standalone: true,
    integrated: true,
    platforms: ["PC"],
    status: "concept",
    features: ["Sicurezza", "Performance", "Privacy", "Deployment enterprise"],
  },
];

export const PRINCIPLES = [
  { title: "Modular by design", text: "Ogni applicazione ha valore da sola e si potenzia insieme alle altre." },
  { title: "API-first", text: "Ogni funzione è esposta via API: integrazione con i vostri sistemi senza attriti." },
  { title: "Privacy focused", text: "Dati minimizzati, controllo degli accessi granulare, hosting a scelta." },
  { title: "Lightweight", text: "Software rapido, sobrio, che non richiede hardware costoso." },
  { title: "Cross-platform", text: "Web, desktop, mobile e dispositivi indossabili." },
  { title: "AI-assisted workflows", text: "L'automazione intelligente è parte della piattaforma, non un extra." },
  { title: "Open integration", text: "Nessun lock-in: import, export e connettori verso terze parti." },
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
    status: "development",
  },
  {
    id: "fatturazione",
    name: "Preventivi e fatturazione",
    product: "Underworld",
    description: "Preventivi, ordini, fatture elettroniche e scadenzario.",
    setup: 1100,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "development",
  },
  {
    id: "documenti",
    name: "Documenti",
    product: "Underworld",
    description: "Archivio documentale con versioni, permessi e ricerca.",
    setup: 700,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "development",
  },
  {
    id: "ticketing",
    name: "Ticketing e assistenza",
    product: "Underworld",
    description: "Richieste dei clienti, code di lavoro, SLA e note interne.",
    setup: 800,
    monthlyOnPremise: 0,
    monthlyCloud: 0,
    status: "development",
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
    status: "development",
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


