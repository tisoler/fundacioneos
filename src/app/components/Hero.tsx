export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex flex-col">
      {/* Header image as full-width banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '56vw', maxHeight: '520px', minHeight: '280px' }}>
        <img
          src="https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/306855240_184524164089232_2138751321442080461_n.webp"
          alt="Fundación EOS - Para la Infancia y la Juventud"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay at bottom for text transition */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 50%, var(--background) 100%)'
          }}
        />
      </div>

      {/* Hero text below banner */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-10 max-w-4xl mx-auto w-full">
        {/* Rainbow tag */}
        <div className="flex items-center gap-1 mb-4">
          {['var(--eos-red)', 'var(--eos-orange)', 'var(--eos-yellow)', 'var(--eos-green)', 'var(--eos-blue)'].map((c, i) => (
            <span key={i} className="w-6 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>

        <h1
          className="text-foreground mb-4"
          style={{ fontFamily: 'Nunito, sans-serif', lineHeight: 1.15 }}
        >
          <span>Encuentro de </span>
          <span style={{ color: 'var(--eos-orange)' }}>Organizaciones</span>
          <span> y </span>
          <span style={{ color: 'var(--eos-blue)' }}>Saberes</span>
        </h1>

        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-3"
          style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
        >
          Construimos derechos, fortalecemos comunidades y generamos oportunidades para las nuevas generaciones.
        </p>
        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-3"
          style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
        >
          Desde 2014, Fundación EOS impulsa procesos de transformación social junto a organizaciones comunitarias, instituciones públicas y actores de la sociedad civil, promoviendo los derechos humanos, la salud mental, la inclusión educativa, el desarrollo juvenil, la cultura comunitaria y la conservación de la biodiversidad.
        </p>
        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-8"
          style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
        >
          Trabajamos para que niñas, niños, adolescentes y jóvenes de sectores populares puedan desarrollar plenamente sus capacidades y ejercer sus derechos en entornos más justos, inclusivos y sostenibles.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#programas"
            className="px-6 py-3 rounded-full text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: 'var(--primary)', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}
          >
            Conocé nuestras acciones
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-secondary transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{ fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}
          >
            Contactanos
          </a>
        </div>

        {/* Floating stat cards */}
        <div className="mt-12 grid grid-cols-3 gap-4 w-full max-w-lg">
          {[
            { num: '+500', label: 'Jóvenes', color: 'var(--eos-orange)' },
            { num: '12+', label: 'Líneas de acción', color: 'var(--eos-green)' },
            { num: '8 años', label: 'de historia', color: 'var(--eos-blue)' },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center">
              <span className="text-2xl font-black" style={{ color: s.color, fontFamily: 'Nunito, sans-serif' }}>{s.num}</span>
              <span className="text-muted-foreground mt-0.5" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
