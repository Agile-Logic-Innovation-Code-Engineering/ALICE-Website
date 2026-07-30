import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Plus } from "lucide-react";
import {
  BASE_SETUP,
  HOSTING_OPTIONS,
  PRICING_EXTRAS,
  PRICING_MODULES,
  type HostingKey,
} from "@/data/alice";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/prezzi")({
  head: () => ({
    meta: [
      { title: "Prezzi ALICE — base una tantum, hosting e moduli" },
      {
        name: "description",
        content:
          "Una quota una tantum di base da € 4.950, un canone mensile secondo l'hosting scelto (on premise o cloud ALICE) e i moduli dell'ecosistema che servono davvero.",
      },
      { property: "og:title", content: "Prezzi ALICE — configura il tuo progetto" },
      {
        property: "og:description",
        content:
          "Base una tantum + hosting + moduli: calcola una stima trasparente del tuo gestionale ALICE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

const eur = (n: number) => new Intl.NumberFormat("it-IT").format(Math.round(n));

function Pricing() {
  const [hostingId, setHostingId] = useState<HostingKey>("on-premise");
  const [selected, setSelected] = useState<string[]>(["crm", "fatturazione"]);

  const hosting = HOSTING_OPTIONS.find((h) => h.id === hostingId) ?? HOSTING_OPTIONS[0];

  const moduleMonthly = (m: (typeof PRICING_MODULES)[number]) =>
    hosting.id === "cloud" ? m.monthlyCloud : m.monthlyOnPremise;

  const totals = useMemo(() => {
    const mods = PRICING_MODULES.filter((m) => selected.includes(m.id));
    const modulesSetup = mods.reduce((s, m) => s + m.setup, 0);
    const modulesMonthly = mods.reduce(
      (s, m) => s + (hosting.id === "cloud" ? m.monthlyCloud : m.monthlyOnPremise),
      0,
    );
    return {
      mods,
      modulesSetup,
      modulesMonthly,
      setup: BASE_SETUP + modulesSetup,
      monthly: hosting.monthly + modulesMonthly,
    };
  }, [selected, hosting]);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const groups = useMemo(() => {
    const map = new Map<string, typeof PRICING_MODULES>();
    for (const m of PRICING_MODULES) {
      map.set(m.product, [...(map.get(m.product) ?? []), m]);
    }
    return [...map.entries()];
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Prezzi</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Una base chiara, poi cresce con voi</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Ogni progetto è costruito su misura del cliente e parte da una{" "}
        <span className="text-foreground">quota una tantum di base</span>, a cui si aggiungono i
        moduli attivati. Dal go-live si aggiunge un{" "}
        <span className="text-foreground">canone mensile</span> che dipende da dove il sistema è
        ospitato: sui vostri server oppure sul cloud ALICE.
      </p>

      {/* Step 1 — base */}
      <section className="mt-14 card-surface p-7">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          01 — Base una tantum
        </p>
        <p className="mt-2 font-display text-4xl font-semibold">€ {eur(BASE_SETUP)}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Analisi dei processi, progettazione su misura, setup dell'ambiente e Cardinal come hub
          dell'ecosistema.
        </p>
      </section>

      {/* Step 2 — hosting */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">02 — Dove viene ospitato</h2>
        <p className="mt-3 text-muted-foreground">
          Il canone mensile copre aggiornamenti, assistenza e manutenzione. Sul cloud ALICE include
          anche infrastruttura, backup e monitoraggio.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {HOSTING_OPTIONS.map((h) => {
            const active = h.id === hosting.id;
            return (
              <button
                key={h.id}
                type="button"
                onClick={() => setHostingId(h.id)}
                aria-pressed={active}
                className={`card-surface p-6 text-left ${
                  active ? "border-primary shadow-[var(--shadow-gold)]" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{h.name}</h3>
                  <span className="font-mono text-sm text-primary">
                    € {eur(h.monthly)} / mese
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step 3 — moduli */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">03 — Moduli dell'ecosistema</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Selezionate solo ciò che vi serve: quasi tutti i moduli incidono solo sulla quota una
          tantum e non aumentano il canone. Fanno eccezione i moduli che richiedono risorse dedicate
          e servizi sempre attivi.
        </p>

        <div className="mt-8 space-y-8">
          {groups.map(([product, mods]) => (
            <div key={product}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {product}
              </h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {mods.map((m) => {
                  const active = selected.includes(m.id);
                  const extraMonthly = moduleMonthly(m);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => toggle(m.id)}
                      aria-pressed={active}
                      className={`card-surface flex gap-4 p-5 text-left ${
                        active ? "border-primary shadow-[var(--shadow-gold)]" : ""
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border transition-colors ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-transparent"
                        }`}
                        aria-hidden
                      >
                        {active ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3 w-3" />}
                      </span>
                      <span className="flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-display text-lg font-semibold">{m.name}</span>
                          <StatusBadge status={m.status} />
                        </span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                          {m.description}
                        </span>
                        <span className="mt-3 block font-mono text-xs text-primary">
                          + € {eur(m.setup)} una tantum ·{" "}
                          {extraMonthly > 0
                            ? `+ € ${eur(extraMonthly)} / mese`
                            : "nessun aumento di canone"}
                        </span>
                        {extraMonthly > 0 && m.monthlyNote ? (
                          <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                            {m.monthlyNote}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Riepilogo */}
      <section className="mt-14 card-surface p-8">
        <h2 className="text-2xl">Stima del vostro progetto</h2>
        <dl className="mt-6 space-y-2.5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Base una tantum</dt>
            <dd className="font-mono">€ {eur(BASE_SETUP)}</dd>
          </div>
          {totals.mods.map((m) => (
            <div key={m.id} className="flex justify-between gap-4">
              <dt className="text-muted-foreground">{m.name}</dt>
              <dd className="font-mono">€ {eur(m.setup)}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 border-t border-border pt-2.5">
            <dt className="text-muted-foreground">Canone base — {hosting.name}</dt>
            <dd className="font-mono">€ {eur(hosting.monthly)} / mese</dd>
          </div>
          {totals.mods
            .filter((m) => moduleMonthly(m) > 0)
            .map((m) => (
              <div key={`${m.id}-monthly`} className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{m.name} — canone</dt>
                <dd className="font-mono">€ {eur(moduleMonthly(m))} / mese</dd>
              </div>
            ))}
        </dl>

        <div className="mt-7 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Avvio progetto (una tantum)
            </p>
            <p className="mt-1.5 font-display text-4xl font-semibold">≈ € {eur(totals.setup)}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Canone mensile — {hosting.name}
            </p>
            <p className="mt-1.5 font-display text-4xl font-semibold text-primary">
              ≈ € {eur(totals.monthly)}
              <span className="ml-1 font-sans text-base font-medium text-muted-foreground">
                / mese
              </span>
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Le cifre sono una stima indicativa: ogni progetto è su misura e il preventivo definitivo
          viene concordato dopo l'analisi, in base a integrazioni, volumi di dati e
          personalizzazioni richieste.
        </p>

        <Link
          to="/contatti"
          className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Richiedi il preventivo definitivo
        </Link>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl">Servizi aggiuntivi</h2>
        <p className="mt-3 text-muted-foreground">
          Attivabili in qualsiasi momento, indipendentemente dai moduli scelti.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PRICING_EXTRAS.map((a) => (
            <div key={a.name} className="card-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{a.name}</h3>
                <span className="font-mono text-sm text-primary">{a.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 card-surface p-8">
        <h2 className="text-xl">Come si arriva al prezzo finale</h2>
        <ol className="mt-5 grid gap-5 md:grid-cols-4">
          {[
            ["01", "Base", "Quota di avvio: analisi, ambiente e Cardinal come hub."],
            ["02", "Su misura", "Ogni progetto viene disegnato sui vostri processi reali."],
            ["03", "Moduli", "Ogni modulo attivato incide sulla una tantum, raramente sul canone."],
            ["04", "Hosting", "On premise o cloud ALICE: determina il canone mensile."],
          ].map(([n, t, d]) => (
            <li key={n}>
              <span className="font-mono text-sm text-primary">{n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
