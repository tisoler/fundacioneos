import { Heart, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    color: 'var(--eos-red)',
    bg: 'rgba(230, 50, 40, 0.1)',
    title: 'Proximidad',
    desc: 'Nos acercamos a los territorios y comunidades donde viven jóvenes y familias, construyendo vínculos de confianza duraderos.',
  },
  {
    icon: Users,
    color: 'var(--eos-green)',
    bg: 'rgba(91, 180, 69, 0.1)',
    title: 'Encuentro',
    desc: 'Creemos en la potencia del trabajo colectivo. Articulamos organizaciones, saberes y personas para generar transformaciones reales.',
  },
  {
    icon: Lightbulb,
    color: 'var(--eos-blue)',
    bg: 'rgba(63, 169, 245, 0.1)',
    title: 'Innovación Social',
    desc: 'Desarrollamos propuestas creativas y adaptadas al contexto local, que abren horizontes de posibilidad para cada joven.',
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-1 rounded-full" style={{ background: 'var(--eos-orange)' }} />
          <span className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            Quiénes somos
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-foreground mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Una fundación construida<br />
              desde y para los{' '}
              <span style={{ color: 'var(--eos-orange)' }}>territorios</span>
            </h2>
            <p className="text-muted-foreground mb-5" style={{ lineHeight: 1.75 }}>
              Fundación EOS — <em>Encuentro de Organizaciones y Saberes</em> — nace en Rosario con la convicción
              de que cada joven tiene el derecho a un proyecto de vida digno. Desde hace más de 8 años
              acompañamos trayectorias de infancia y juventud junto a organizaciones sociales, familias
              y el Estado.
            </p>
            <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.75 }}>
              Nuestro trabajo articula formación, cultura, deporte y proyectos productivos para fortalecer
              la empleabilidad y la participación ciudadana de los y las jóvenes de nuestra ciudad.
            </p>

            {/* Rainbow accent bar */}
            <div className="flex gap-1.5 mb-8">
              {['var(--eos-red)', 'var(--eos-orange)', 'var(--eos-yellow)', 'var(--eos-green)', 'var(--eos-blue)'].map((c, i) => (
                <div key={i} className="h-1.5 rounded-full flex-1" style={{ background: c }} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(244,136,42,0.15)', color: 'var(--eos-orange)' }}>
                Rosario, Santa Fe
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(63,169,245,0.15)', color: 'var(--eos-blue)' }}>
                Desde 2016
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(91,180,69,0.15)', color: 'var(--eos-green)' }}>
                Organización Social
              </span>
            </div>
          </div>

          {/* Values cards */}
          <div className="flex flex-col gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-200"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: v.bg }}
                >
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <div>
                  <h4 className="text-foreground mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>{v.title}</h4>
                  <p className="text-muted-foreground" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
