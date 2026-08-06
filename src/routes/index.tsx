import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Plug, ShieldCheck, Sparkles } from "lucide-react";
import { PROJECTS, VERTICAL_SOLUTIONS } from "@/data/alice";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALICE — Gestionali ERP e CRM che fanno risparmiare tempo" },
      {
        name: "description",
        content:
          "Gestionali pronti per hotel, negozi, turismo e artigiani oppure su misura: clienti, preventivi, fatture e magazzino in un unico sistema, senza dati doppi.",
      },
      { property: "og:title", content: "ALICE — Gestionali che fanno risparmiare tempo" },
      {
        property: "og:description",
        content:
          "Soluzioni pronte per il vostro settore o gestionale su misura: un unico sistema per clienti, vendite e documenti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Un solo sistema al posto di dieci programmi scollegati.
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            Il gestionale che fa lavorare meglio la vostra azienda,
            <span className="text-primary"> senza sprechi di tempo.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Basta dati copiati da un programma all'altro e informazioni che si perdono. Con ALICE
            clienti, preventivi, fatture, documenti e assistenza vivono in un unico posto: si parte
            dal modulo che serve oggi e si aggiunge il resto quando l'azienda cresce. Potete
            scegliere una <span className="text-foreground">soluzione già pronta</span> per il vostro
            settore oppure un gestionale <span className="text-foreground">su misura</span>.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/prezzi"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Calcola il vostro preventivo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ecosistema"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Guarda cosa possiamo gestire
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rule-gradient" />
        <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Cosa cambia per voi</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Quante volte lo stesso dato viene riscritto in tre posti diversi? Quanto tempo si perde
              a cercare un preventivo vecchio o a capire cosa c'è davvero in magazzino? ALICE
              risponde a questo: un'unica base dati per clienti, vendite, documenti e assistenza, con
              le informazioni sempre aggiornate per chiunque ne abbia bisogno.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Si comincia in piccolo, dal problema più urgente, e si aggiungono funzioni solo quando
              servono davvero: nessun investimento enorme all'inizio e nessuna funzione pagata e mai
              usata.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Boxes, title: "Meno tempo perso", text: "Un dato si inserisce una volta sola e si ritrova ovunque serva." },
              { icon: Plug, title: "Si collega a ciò che avete", text: "Parla con i programmi e i servizi che usate già oggi." },
              { icon: ShieldCheck, title: "Dati al sicuro", text: "Ognuno vede solo il suo, e i dati restano dove decidete voi." },
              { icon: Sparkles, title: "Meno lavoro manuale", text: "L'assistente AI compila, riassume e cerca al posto vostro." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-surface p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Soluzioni pronte per il vostro settore</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Se il vostro lavoro assomiglia a quello di tanti altri, non serve partire da zero:
              questi gestionali sono già configurati, costano meno e si possono usare da subito.
            </p>
          </div>
          <Link to="/prezzi" className="text-sm text-primary hover:underline">
            Confronta e configura →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {VERTICAL_SOLUTIONS.map((s) => (
            <article key={s.id} className="card-surface flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {s.sector}
                  </p>
                </div>
                <StatusBadge status={s.status} />
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">{s.tagline}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Tutto quello che possiamo gestire</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Ogni applicazione risolve un problema preciso e funziona anche da sola: attivate quella
              che vi serve oggi, le altre si aggiungono quando volete.
            </p>
          </div>
          <Link to="/ecosistema" className="text-sm text-primary hover:underline">
            Vedi tutti i dettagli →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.name} className="card-surface flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {p.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <StatusBadge status={p.status} />
                <span className="text-xs text-muted-foreground">{p.platforms.join(" · ")}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="card-surface flex flex-wrap items-center justify-between gap-6 p-10">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Sapete subito quanto costa.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Una quota iniziale per mettere in piedi il sistema e un canone mensile che comprende
              aggiornamenti, assistenza e hosting. Nessun costo nascosto, nessuna sorpresa a fine
              anno.
            </p>
          </div>
          <Link
            to="/prezzi"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Scopri i prezzi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
