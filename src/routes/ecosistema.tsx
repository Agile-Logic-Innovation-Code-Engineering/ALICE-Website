import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PROJECTS, STATUS, VERTICAL_SOLUTIONS } from "@/data/alice";
import { StatusBadge, STATUS_DOT } from "@/components/StatusBadge";

export const Route = createFileRoute("/ecosistema")({
  head: () => ({
    meta: [
      { title: "Cosa possiamo gestire — le applicazioni ALICE" },
      {
        name: "description",
        content:
          "Dalla gestione clienti alla fatturazione, dall'assistente AI alle soluzioni pronte per hotel, negozi, turismo e artigiani: cosa risolve ogni applicazione ALICE.",
      },
      { property: "og:title", content: "Cosa possiamo gestire — le applicazioni ALICE" },
      {
        property: "og:description",
        content: "Ogni applicazione risolve un problema preciso e funziona anche da sola.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ecosystem,
});

function Ecosystem() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold md:text-5xl">Cosa possiamo gestire</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Ogni applicazione risolve un problema concreto e funziona anche da sola: potete iniziare da
        quella che vi serve oggi e collegare le altre quando siete pronti. Qui trovate cosa fa
        ciascuna e a che punto è lo sviluppo.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {Object.entries(STATUS).map(([key, s]) => (
          <span
            key={key}
            className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[key as keyof typeof STATUS_DOT]}`}
              aria-hidden
            />
            {s.label}
          </span>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-4 font-medium">Progetto</th>
              <th className="px-5 py-4 font-medium">Ruolo</th>
              <th className="px-5 py-4 font-medium">Standalone</th>
              <th className="px-5 py-4 font-medium">Integrato</th>
              <th className="px-5 py-4 font-medium">Piattaforme</th>
              <th className="px-5 py-4 font-medium">Stato</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p) => (
              <tr key={p.name} className="border-t border-border">
                <td className="px-5 py-4 font-display font-semibold">{p.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{p.role}</td>
                <td className="px-5 py-4">
                  {p.standalone ? (
                    <Check className="h-4 w-4 text-primary" aria-label="Sì" />
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground" aria-label="No" />
                  )}
                </td>
                <td className="px-5 py-4">
                  {p.integrated ? (
                    <Check className="h-4 w-4 text-primary" aria-label="Sì" />
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground" aria-label="No" />
                  )}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{p.platforms.join(", ")}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 space-y-4">
        {PROJECTS.map((p) => (
          <article key={p.name} className="card-surface p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                  {p.role}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{p.description}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Soluzioni pronte</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Gestionali già impostati per settori specifici: costano meno di un progetto su misura,
          partono subito e restano estendibili con gli altri moduli quando l'attività cresce.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {VERTICAL_SOLUTIONS.map((s) => (
            <article key={s.id} className="card-surface p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {s.sector}
                  </p>
                </div>
                <StatusBadge status={s.status} />
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          to="/prezzi"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Configura la tua soluzione
        </Link>
      </section>
    </div>
  );
}
