import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const divisions = [
    { label: "Ingeniería & Producción Técnica", href: "/ingenieria" },
    { label: "Media & Producción Creativa", href: "/media" },
    { label: "Publicidad & Comunicación", href: "/publicidad" },
  ];

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Divisiones", href: "#", hasSub: true },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-wider text-gradient-gold">
          AUDIUM GROUP
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.hasSub ? (
              <div key={l.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
                  {l.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-sm shadow-lg py-2 min-w-[280px]">
                    {divisions.map((d) => (
                      <Link
                        key={d.href}
                        to={d.href}
                        className="block px-5 py-3 font-body text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/contacto"
            className="bg-gradient-gold text-primary-foreground text-sm font-semibold px-5 py-2 rounded-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
            Inicio
          </Link>

          <button
            onClick={() => setDivisionsOpen(!divisionsOpen)}
            className="flex items-center gap-1 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
          >
            Divisiones <ChevronDown className={`w-3.5 h-3.5 transition-transform ${divisionsOpen ? "rotate-180" : ""}`} />
          </button>
          {divisionsOpen && (
            <div className="pl-4 space-y-3">
              {divisions.map((d) => (
                <Link key={d.href} to={d.href} onClick={() => setOpen(false)} className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                  {d.label}
                </Link>
              ))}
            </div>
          )}

          {[
            { label: "Servicios", href: "/servicios" },
            { label: "Nosotros", href: "/nosotros" },
            { label: "Contacto", href: "/contacto" },
          ].map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
