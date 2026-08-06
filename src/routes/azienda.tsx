import { createFileRoute } from "@tanstack/react-router";
import { PRINCIPLES } from "@/data/alice";

export const Route = createFileRoute("/azienda")({
  head: () => ({
    meta: [
      { title: "Azienda e filosofia — ALICE software" },
      {
        name: "description",
        content:
          "Chi siamo e come lavoriamo: gestionali che tolgono lavoro inutile alle aziende, attivati un passo alla volta e con costi chiari.",
      },
      { property: "og:title", content: "Azienda e filosofia — ALICE software" },
      {
        property: "og:description",
        content: "Come lavoriamo: un passo alla volta, partendo dal problema più urgente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold md:text-5xl">L'azienda</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Costruiamo gestionali che tolgono lavoro inutile alle aziende: meno dati riscritti a mano,
        meno file sparsi, più tempo per i clienti. Partiamo sempre dal problema più urgente e
        aggiungiamo il resto quando serve davvero, così l'investimento resta sostenibile.
      </p>

      <div className="mt-16 rule-gradient" />

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Come lavoriamo</h2>
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
          <h2 className="text-2xl font-semibold">Un passo alla volta</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Non chiediamo di rivoluzionare tutto in un colpo solo. Mettiamo in funzione prima la
            parte che vi fa perdere più tempo, la usate sul campo, e solo dopo aggiungiamo il resto:
            così il team si abitua senza fermare il lavoro e i risultati si vedono già dalle prime
            settimane.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Dove vogliamo arrivare</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un unico posto in cui gestire clienti, vendite, documenti, comunicazione interna e
            automazioni. Un sistema che cresce insieme all'azienda, senza costringerla a cambiare
            programma ogni volta che cambia un'esigenza.
          </p>
        </div>
      </section>
    </div>
  );
}
