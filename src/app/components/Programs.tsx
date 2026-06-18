import { GraduationCap, Wrench, Recycle, Music, UserPlus, BookOpen } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    color: 'var(--eos-orange)',
    bg: 'rgba(244,136,42,0.12)',
    category: 'Formación',
    title: 'Juventudes',
    subtitle: 'Formación, inclusión y construcción de proyectos de vida.',
    desc: 'Acompañamos a jóvenes de sectores populares en la adquisición de conocimientos, habilidades y herramientas que favorezcan su integración educativa, social y laboral. Creemos que la inclusión juvenil requiere generar oportunidades reales de formación y acceso a nuevos horizontes de desarrollo personal y profesional. Implementamos talleres de formación sociolaboral vinculados a sectores estratégicos y emergentes, entre ellos capacitación en Testing y Calidad de Software, reparación de teléfonos celulares, producción y edición musical, huerta agroecológica urbana, plantas aromáticas y sus derivados, entrenamiento actoral y acompañamiento para la finalización de estudios secundarios. Estas iniciativas fortalecen la empleabilidad, la autonomía económica y la participación activa de las juventudes en la construcción de sus proyectos de vida.',
    tags: ['ODS 4: Educación de Calidad', 'ODS 8: Trabajo Decente y Crecimiento Económico', 'ODS 9: Innovación e Infraestructura', 'ODS 10: Reducción de las Desigualdades'],
  },
  {
    icon: Wrench,
    color: 'var(--eos-blue)',
    bg: 'rgba(63,169,245,0.12)',
    category: 'Empleabilidad',
    title: 'Inserción Laboral',
    subtitle: 'Generamos oportunidades para el acceso al trabajo digno y el desarrollo económico sostenible.',
    desc: 'La empleabilidad constituye una dimensión transversal del trabajo de Fundación EOS. A través de propuestas de formación técnica, capacitación en nuevas tecnologías, fortalecimiento de habilidades socioemocionales y acompañamiento personalizado, promovemos la inclusión laboral de jóvenes y personas en situación de vulnerabilidad. Nuestras acciones buscan reducir las brechas de acceso al empleo mediante la adquisición de competencias demandadas por el mercado laboral actual, fomentando además el emprendedurismo, la economía social y la construcción de proyectos productivos sostenibles. La articulación con instituciones educativas, organizaciones sociales, cooperativas y empresas permite ampliar oportunidades concretas de inserción laboral y generación de ingresos.',
    tags: ['ODS 1: Fin de la Pobreza', 'ODS 4: Educación de Calidad', 'ODS 8: Trabajo Decente y Crecimiento Económico', 'ODS 9: Industria, Innovación e Infraestructura', 'ODS 10: Reducción de las Desigualdades', 'ODS 17: Alianzas para Lograr los Objetivos'],
  },
  {
    icon: Recycle,
    color: 'var(--eos-green)',
    bg: 'rgba(91,180,69,0.12)',
    category: 'Productivo',
    title: 'Conservación de la Biodiversidad y Desarrollo Sustentable',
    subtitle: 'Protegemos los ecosistemas para construir un futuro sostenible.',
    desc: 'Fundación EOS impulsa acciones orientadas a la conservación de la biodiversidad, la restauración ecológica y la educación ambiental como herramientas fundamentales para enfrentar el cambio climático y promover el desarrollo sostenible. Nuestro trabajo combina incidencia institucional, formación comunitaria y acciones concretas de protección ambiental. Entre los principales logros se destaca la creación del Corredor Biológico Cauce Arroyo Pavón Viejo (COBICAPV), impulsando la firma de convenios de cooperación, la elaboración y aprobación de normativa local para su protección y la promoción de su reconocimiento a nivel provincial. Además, desarrollamos programas de educación ambiental en escuelas primarias que permitieron formar más de 300 promotores ambientales infantiles, capacitamos guías naturalistas y guardaparques comunitarios, realizamos acciones de restauración ecológica y promovimos la plantación de especies nativas junto a organizaciones comprometidas con la protección del río Paraná y sus humedales.',
    tags: ['ODS 13: Acción por el Clima', 'ODS 15: Vida de Ecosistemas Terrestres', 'ODS 17: Alianzas para Lograr los Objetivos'],
  },
  {
    icon: Music,
    color: 'var(--eos-red)',
    bg: 'rgba(230,50,40,0.12)',
    category: 'Cultura',
    title: 'Arte, Cultura y Comunicación',
    subtitle: 'La cultura como herramienta de transformación social.',
    desc: 'Promovemos la formación, creación y difusión de expresiones artísticas y culturales como herramientas para fortalecer la participación comunitaria, la identidad colectiva y el diálogo social. Entendemos al arte y la comunicación como espacios privilegiados para la construcción de ciudadanía, la inclusión y el ejercicio de derechos. En el área de teatro desarrollamos procesos de entrenamiento actoral, laboratorios escénicos, investigación y escritura dramática, diseño de vestuario, maquillaje y construcción de máscaras. Como resultado de estos procesos se produjeron y presentaron las obras teatrales Azul, El Frigorífico, Habitáculos y Palabras Burdas. Asimismo, contamos con un laboratorio y estudio musical donde jóvenes y artistas desarrollan experiencias de composición, grabación, producción y edición profesional de obras musicales. A través de este espacio se registraron y difundieron producciones de diversos géneros, entre ellos rap, rock, trap y música melódica.',
    tags: ['ODS 4: Educación de Calidad', 'ODS 5: Igualdad de Género', 'ODS 10: Reducción de las Desigualdades', 'ODS 11: Ciudades y Comunidades Sostenibles', 'ODS 16: Paz, Justicia e Instituciones Sólidas'],
  },
  {
    icon: UserPlus,
    color: 'var(--eos-yellow)',
    bg: 'rgba(245,197,24,0.12)',
    category: 'Derechos',
    title: 'Derechos Humanos y Salud Mental',
    subtitle: 'Promovemos el cuidado integral de las personas y las comunidades.',
    desc: 'La Fundación EOS impulsa espacios de estudio, investigación, formación y acción comunitaria destinados a comprender y abordar las problemáticas sociales contemporáneas que afectan a personas, familias y comunidades. Desde una perspectiva de derechos humanos y salud mental comunitaria, desarrollamos estrategias de acompañamiento, sensibilización y fortalecimiento institucional que contribuyen a la construcción de entornos más justos, inclusivos y protectores. Nuestra labor se sustenta en el trabajo articulado con Centros de Atención Primaria de la Salud, organismos de derechos humanos, espacios de género y diversidad, organizaciones dedicadas a la promoción y protección de derechos de niñas, niños y adolescentes, instituciones educativas y colegios profesionales. Esta red de cooperación nos permite generar respuestas integrales frente a situaciones de vulneración de derechos, exclusión social y problemáticas emergentes que atraviesan a nuestras comunidades.',
    tags: ['ODS 3: Salud y Bienestar', 'ODS 5: Igualdad de Género', 'ODS 10: Reducción de las Desigualdades', 'ODS 16: Paz, Justicia e Instituciones Sólidas'],
  },
  {
    icon: BookOpen,
    color: 'var(--eos-blue)',
    bg: 'rgba(63,169,245,0.12)',
    category: 'Educación',
    title: 'Infancias y Adolescencias',
    subtitle: 'Garantizamos espacios de cuidado, protección y desarrollo.',
    desc: 'Trabajamos para que niñas, niños y adolescentes en situación de vulnerabilidad social accedan a espacios de cuidado, acompañamiento y desarrollo integral que fortalezcan sus trayectorias educativas, sociales y comunitarias. Entendemos que la protección de derechos requiere intervenciones sostenidas que involucren a las familias, las organizaciones y las instituciones presentes en cada territorio. Desarrollamos programas de apoyo educativo, asistencia alimentaria, actividades recreativas y culturales, espacios de cuidado y acompañamiento, así como acciones de promoción y protección integral de derechos. Nuestro objetivo es generar condiciones que favorezcan el desarrollo pleno de las infancias y adolescencias, fortaleciendo sus capacidades, participación y bienestar.',
    tags: ['ODS 1: Fin de la Pobreza', 'ODS 2: Hambre Cero', 'ODS 3: Salud y Bienestar', 'ODS 4: Educación de Calidad', 'ODS 10: Reducción de las Desigualdades', 'ODS 16: Paz, Justicia e Instituciones Sólidas'],
  },
];

export function Programs() {
  return (
    <section id="programas" className="py-20 px-4" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-1 rounded-full" style={{ background: 'var(--eos-green)' }} />
          <span className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            Acciones
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Lo que hacemos cada día
          </h2>
          <p className="text-muted-foreground max-w-sm" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            Líneas de acción integrales que acompañan distintos momentos de la vida de los jóvenes.
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
              <h4 className="text-foreground mt-0.5" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem' }}>
                {p.subtitle}
              </h4>
              <p className="text-muted-foreground flex-1 mt-2 mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.7 }}>
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
