import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PROJECTS, VERTICAL_SOLUTIONS } from "@/data/alice";
import { CONTACT } from "@/data/contact";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — richiedi un preventivo ad ALICE" },
      {
        name: "description",
        content:
          "Raccontaci il tuo processo aziendale: prepariamo un preventivo per il gestionale modulare ALICE, con quota di avvio e canone mensile.",
      },
      { property: "og:title", content: "Contatti — richiedi un preventivo ad ALICE" },
      {
        property: "og:description",
        content: "Parliamo del tuo progetto gestionale: analisi gratuita e preventivo chiaro.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    module: PROJECTS[2].name,
    message: "",
  });

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Richiesta preventivo — ${form.company || form.name || "nuovo progetto"}`,
  )}&body=${encodeURIComponent(
    `Nome: ${form.name}\nAzienda: ${form.company}\nEmail: ${form.email}\nModulo di interesse: ${form.module}\n\n${form.message}`,
  )}`;

  const field =
    "mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold md:text-5xl">Parliamone</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Raccontaci come lavora oggi la tua azienda. Ti rispondiamo con una proposta concreta: moduli
        consigliati, quota di avvio e canone mensile.
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <form
          className="card-surface p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Nome e cognome
              <input
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Mario Rossi"
              />
            </label>
            <label className="block text-sm font-medium">
              Azienda
              <input
                className={field}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Rossi S.r.l."
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            Email
            <input
              required
              type="email"
              className={field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="mario@azienda.it"
            />
          </label>

          <label className="mt-5 block text-sm font-medium">
            Modulo di interesse
            <select
              className={field}
              value={form.module}
              onChange={(e) => setForm({ ...form, module: e.target.value })}
            >
              {PROJECTS.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} — {p.role}
                </option>
              ))}
              {VERTICAL_SOLUTIONS.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} — {s.sector}
                </option>
              ))}
              <option value="Non lo so ancora">Non lo so ancora</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Il tuo progetto
            <textarea
              required
              rows={5}
              className={field}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Quali processi vorresti digitalizzare?"
            />
          </label>

          <button
            type="submit"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Invia richiesta
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Il pulsante apre il tuo client di posta con il messaggio già compilato.
          </p>
        </form>

        <aside className="space-y-4">
          <div className="card-surface p-6">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-semibold">Email</h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
            >
              {CONTACT.email}
            </a>
          </div>
          <div className="card-surface p-6">
            <Phone className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-semibold">Telefono</h2>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
            >
              {CONTACT.phone}
            </a>
          </div>
          <div className="card-surface p-6">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="mt-3 font-semibold">Dove siamo</h2>
            <p className="mt-1 text-sm text-muted-foreground">{CONTACT.location}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
