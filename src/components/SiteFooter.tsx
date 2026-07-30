import { Link } from "@tanstack/react-router";
import aliceLogo from "@/assets/alice-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={aliceLogo.url} alt="Logo ALICE" className="h-9 w-9 object-contain" />
            <span className="font-display text-xl font-semibold tracking-[0.18em]">ALICE</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Un ecosistema software modulare per produttività, collaborazione e automazione
            intelligente. Una piattaforma, più applicazioni, progettate per lavorare insieme.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Prodotto</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/ecosistema" className="hover:text-foreground">
                Ecosistema
              </Link>
            </li>
            <li>
              <Link to="/prezzi" className="hover:text-foreground">
                Prezzi e moduli
              </Link>
            </li>
            <li>
              <Link to="/azienda" className="hover:text-foreground">
                Filosofia
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contatti</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@alice-software.dev" className="hover:text-foreground">
                info@alice-software.dev
              </a>
            </li>
            <li>
              <Link to="/contatti" className="hover:text-foreground">
                Richiedi un preventivo
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ALICE. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
