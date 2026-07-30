import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Plug, ShieldCheck, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/alice";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALICE — Software gestionali modulari, ERP e CRM su misura" },
      {
        name: "description",
        content:
          "Sviluppiamo ALICE: un ecosistema modulare di gestionali ERP, CRM, identità e AI. Ogni applicazione funziona da sola e si integra tramite Cardinal.",
      },
      { property: "og:title", content: "ALICE — Software gestionali modulari, ERP e CRM" },
      {
        property: "og:description",
        content:
          "Un ecosistema modulare per produttività, collaborazione e automazione intelligente.",
      },
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
            Un ecosistema. Molte applicazioni.
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            Software gestionali modulari,
            <span className="text-primary"> costruiti per lavorare insieme.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            ALICE è un ecosistema software modulare per produttività, collaborazione, AI e
            applicazioni aziendali. Ogni applicazione funziona in autonomia e si integra in modo
            trasparente attraverso <span className="text-foreground">Cardinal</span>, la piattaforma
            centrale di orchestrazione.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/prezzi"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Vedi prezzi e moduli <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ecosistema"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Esplora l'ecosistema
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rule-gradient" />
        <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Cos'è ALICE?</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              ALICE nasce per dare alle aziende un'esperienza unificata: invece di collezionare
              software scollegati fra loro, si parte dal modulo di cui si ha bisogno e si cresce nel
              tempo. Gestionale, CRM, fatturazione, documenti, ticketing, identità e assistente AI
              condividono gli stessi dati, gli stessi utenti e la stessa interfaccia.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              L'obiettivo di lungo periodo è semplice: ogni applicazione deve avere valore da sola,
              e diventare molto più potente quando è connessa a Cardinal.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Boxes, title: "Modulare", text: "Attivi solo i moduli che servono, quando servono." },
              { icon: Plug, title: "API-first", text: "Ogni funzione è integrabile con i vostri sistemi." },
              { icon: ShieldCheck, title: "Privacy", text: "Controllo accessi granulare e hosting a scelta." },
              { icon: Sparkles, title: "AI-assisted", text: "Automazioni intelligenti native, non plugin." },
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
            <h2 className="text-3xl font-semibold md:text-4xl">L'ecosistema</h2>
            <p className="mt-3 text-muted-foreground">
              Sette progetti, un'unica piattaforma. Ecco lo stato attuale di ciascuno.
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
            <h2 className="text-2xl font-semibold md:text-3xl">Partiamo dal vostro processo.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Una quota di avvio per costruire il gestionale su misura, poi un canone mensile che
              copre aggiornamenti, assistenza e hosting. Nessuna sorpresa.
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
