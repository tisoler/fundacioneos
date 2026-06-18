import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Acciones", href: "#programas" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/306962665_184524167422565_6063563362354363787_n.webp" alt="Fundación EOS" className="h-10 w-10 object-contain rounded-full bg-white p-0.5" />
          <div className="leading-none">
            <span className="block font-black" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.1rem', letterSpacing: '-0.01em', color: 'var(--eos-blue-dark)' }}>
              Fundación EOS
            </span>
            <span className="block text-foreground/80" style={{ fontSize: '0.65rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 700 }}>
              Para la Infancia y Juventud
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
              style={{ fontSize: '1rem', fontWeight: 700 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-muted hover:bg-accent/20 transition-colors"
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun size={16} className="text-eos-yellow" style={{ color: 'var(--eos-yellow)' }} /> : <Moon size={16} className="text-foreground/70" />}
          </button>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'var(--primary)', fontSize: '0.875rem', fontWeight: 700 }}
          >
            Sumate
          </a>
          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/98 backdrop-blur-sm border-b border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary border-b border-border/50 transition-colors"
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center py-2.5 rounded-full text-primary-foreground"
            style={{ background: 'var(--primary)', fontWeight: 700 }}
          >
            Sumate
          </a>
        </div>
      )}
    </nav>
  );
}
