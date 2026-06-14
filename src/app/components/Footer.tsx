import { Instagram, Facebook, Heart } from "lucide-react";

const navLinks = [
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Programas', href: '#programas' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/306962665_184524167422565_6063563362354363787_n.webp" alt="Fundación EOS" className="h-12 w-12 object-contain rounded-full bg-white p-1" />
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.1rem' }}>Fundación EOS</div>
                <div style={{ opacity: 0.6, fontSize: '0.7rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Encuentro de Organizaciones y Saberes
                </div>
              </div>
            </div>
            <p style={{ opacity: 0.6, fontSize: '0.875rem', lineHeight: 1.7 }}>
              Acompañando trayectorias de infancia y juventud en Rosario desde 2016.
            </p>
            <div className="flex gap-1.5 mt-5">
              {['var(--eos-red)', 'var(--eos-orange)', 'var(--eos-yellow)', 'var(--eos-green)', 'var(--eos-blue)'].map((c, i) => (
                <span key={i} className="w-5 h-1.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navegación
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ opacity: 0.7, fontSize: '0.9rem', fontWeight: 600 }}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, marginBottom: '1rem', fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Redes sociales
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://www.instagram.com/fundacion.eos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
                style={{ opacity: 0.7 }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Instagram size={15} />
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>@fundacion.eos</span>
              </a>
              <a
                href="https://www.facebook.com/p/EOS-para-la-infancia-y-Juventud-100075949485590/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
                style={{ opacity: 0.7 }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Facebook size={15} />
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>EOS para la Infancia y Juventud</span>
              </a>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{ background: 'var(--eos-orange)', color: '#fff', fontWeight: 700, fontFamily: 'Nunito, sans-serif', fontSize: '0.875rem' }}
            >
              <Heart size={14} />
              Apoyá a EOS
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)', opacity: 0.5, fontSize: '0.8rem' }}
        >
          <span>© 2024 Fundación EOS. Rosario, Argentina.</span>
          <span>Hecho con amor por y para los jóvenes</span>
        </div>
      </div>
    </footer>
  );
}
