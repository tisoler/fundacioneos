import { GraduationCap, Briefcase, TrendingUp, Music, Shield, BookOpen } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    color: 'var(--eos-orange)',
    bg: 'rgba(244,136,42,0.12)',
    category: 'Formación',
    title: 'Talleres y Capacitaciones',
    desc: 'Espacios de aprendizaje en oficios, habilidades socioemocionales, ciudadanía digital y herramientas para el trabajo. Diseñados con y para jóvenes.',
    tags: ['Oficios', 'Digital', 'Soft Skills'],
  },
  {
    icon: Briefcase,
    color: 'var(--eos-blue)',
    bg: 'rgba(63,169,245,0.12)',
    category: 'Empleabilidad',
    title: 'Inserción Laboral',
    desc: 'Acompañamos a jóvenes en su primer acercamiento al mundo del trabajo: orientación vocacional, búsqueda de empleo y vinculación con empresas locales.',
    tags: ['Primer empleo', 'Orientación', 'Red de empresas'],
  },
  {
    icon: TrendingUp,
    color: 'var(--eos-green)',
    bg: 'rgba(91,180,69,0.12)',
    category: 'Productivo',
    title: 'Proyectos Productivos',
    desc: 'Impulsamos emprendimientos juveniles y cooperativas de trabajo, brindando herramientas de gestión, financiamiento y acompañamiento técnico.',
    tags: ['Emprendimiento', 'Cooperativas', 'Microcrédito'],
  },
  {
    icon: Music,
    color: 'var(--eos-red)',
    bg: 'rgba(230,50,40,0.12)',
    category: 'Cultura',
    title: 'Arte y Cultura',
    desc: 'La cultura como herramienta de transformación: talleres de música, teatro, artes visuales y comunicación popular con jóvenes de los barrios.',
    tags: ['Música', 'Teatro', 'Arte urbano'],
  },
  {
    icon: Shield,
    color: 'var(--eos-yellow)',
    bg: 'rgba(245,197,24,0.12)',
    category: 'Derechos',
    title: 'Derechos y Ciudadanía',
    desc: 'Formamos jóvenes como promotores de derechos, facilitando espacios de participación política, medioambiental y comunitaria.',
    tags: ['Participación', 'Medio ambiente', 'Género'],
  },
  {
    icon: BookOpen,
    color: 'var(--eos-blue)',
    bg: 'rgba(63,169,245,0.12)',
    category: 'Educación',
    title: 'Apoyo Escolar',
    desc: 'Espacios de acompañamiento a la trayectoria educativa para que ningún joven quede fuera del sistema: tutorías, refuerzo y re-vinculación escolar.',
    tags: ['Tutorías', 'Re-vinculación', 'Nivel medio'],
  },
];

export function Programs() {
  return (
    <section id="programas" className="py-20 px-4" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-1 rounded-full" style={{ background: 'var(--eos-green)' }} />
          <span className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            Programas
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Lo que hacemos cada día
          </h2>
          <p className="text-muted-foreground max-w-sm" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            Programas integrales que acompañan distintos momentos de la vida de los jóvenes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <article
              key={p.title}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: p.bg }}
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: p.color }}>
                    {p.category}
                  </span>
                  <h3 className="text-foreground mt-0.5" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem' }}>
                    {p.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground flex-1 mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: p.bg, color: p.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
