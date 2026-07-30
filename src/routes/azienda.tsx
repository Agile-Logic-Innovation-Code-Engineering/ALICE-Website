import { createFileRoute } from "@tanstack/react-router";
import { PRINCIPLES } from "@/data/alice";

export const Route = createFileRoute("/azienda")({
  head: () => ({
    meta: [
      { title: "Azienda e filosofia — ALICE software" },
      {
        name: "description",
        content:
          "Chi siamo e come lavoriamo: software modulare, API-first, attento alla privacy, leggero, cross-platform e assistito dall'AI.",
      },
      { property: "og:title", content: "Azienda e filosofia — ALICE software" },
      {
        property: "og:description",
        content: "I principi che guidano lo sviluppo dell'ecosistema ALICE.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold md:text-5xl">L'azienda</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Sviluppiamo software gestionali — ERP, CRM e strumenti aziendali su misura — con un approccio
        modulare. Il nostro obiettivo di lungo periodo è un ecosistema completo in cui ogni
        applicazione funziona in autonomia e diventa molto più potente quando è connessa a Cardinal.
      </p>

      <div className="mt-16 rule-gradient" />

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Filosofia</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Come sviluppiamo</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Costruiamo per fasi incrementali invece di sviluppare tutto in parallelo: prima
            l'infrastruttura condivisa (identità, accessi, orchestrazione), poi i moduli gestionali
            che portano valore immediato, infine automazione AI, collaborazione e dispositivi.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Obiettivo di lungo periodo</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un ecosistema unificato per gestione aziendale, collaborazione, intelligenza artificiale
            e dispositivi smart: una piattaforma sola, intelligente, che cresce insieme all'azienda
            che la usa.
          </p>
        </div>
      </section>
    </div>
  );
}
