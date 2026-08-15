import { Heart, Users, Lightbulb } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

const values = [
  {
    icon: Heart,
    color: 'var(--eos-red)',
    bg: 'rgba(230, 50, 40, 0.1)',
    title: 'Proximidad por Nuestra Misión',
    desc: 'Promover el ejercicio pleno de los derechos humanos mediante acciones educativas, culturales, comunitarias, ambientales y de salud mental que contribuyan a la inclusión social, el fortalecimiento comunitario y el desarrollo integral de las personas.',
  },
  {
    icon: Users,
    color: 'var(--eos-green)',
    bg: 'rgba(91, 180, 69, 0.1)',
    title: 'Encuentro por Nuestra Visión',
    desc: 'Construir una sociedad más justa, democrática y sostenible, donde todas las personas, especialmente niñas, niños, adolescentes y jóvenes en situación de vulnerabilidad, tengan acceso efectivo a sus derechos y oportunidades para desarrollar sus proyectos de vida.',
  },
  {
    icon: Lightbulb,
    color: 'var(--eos-blue)',
    bg: 'rgba(63, 169, 245, 0.1)',
    title: 'Innovación Social',
    desc: 'Desarrollamos soluciones integrales y colaborativas para abordar problemáticas complejas vinculadas a los derechos humanos, las infancias, las juventudes, la salud mental, la inclusión sociolaboral, la cultura y el ambiente. A través de la creación de espacios de formación, producción cultural, cuidado comunitario, inserción laboral juvenil y conservación de la biodiversidad, la Fundación impulsa procesos sostenibles que fortalecen capacidades locales, promueven el ejercicio de derechos y producen transformaciones sociales duraderas. Su capacidad para conectar saberes diversos, construir alianzas estratégicas y desarrollar iniciativas replicables con impacto social y ambiental la posiciona como un actor clave en la generación de innovación social orientada al desarrollo humano sostenible.',
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
            <p className="text-muted-foreground mb-3" style={{ lineHeight: 1.75 }}>
              Fundación EOS (Encuentro de Organizaciones y Saberes) surge del recorrido colectivo de organizaciones sociales, centros comunitarios y referentes territoriales que desde 2006 impulsan acciones en defensa de los derechos de las infancias, adolescencias y juventudes en la provincia de Santa Fe.
            </p>
            <p className="text-muted-foreground mb-3" style={{ lineHeight: 1.75 }}>
              Nuestra historia se encuentra profundamente vinculada a la de protección integral de derechos, la promoción de la participación comunitaria y el fortalecimiento de organizaciones populares. Desde hace más de 12 años acompañamos trayectorias de infancia y juventud junto a organizaciones sociales, familias y el Estado.
            </p>
            <p className="text-muted-foreground mb-3" style={{ lineHeight: 1.75 }}>
              Nuestro trabajo articula formación, cultura, deporte y proyectos productivos para fortalecer la empleabilidad y la participación ciudadana de los y las jóvenes de nuestra ciudad.
            </p>
            <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.75 }}>
              Con personería jurídica otorgada en 2014, Fundación EOS consolida una plataforma institucional capaz de articular esfuerzos entre organizaciones sociales, organismos públicos, universidades, empresas y agencias de cooperación para promover procesos de desarrollo humano sostenible.
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

        {/* Story in images carousel */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <h2 className="text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Nuestra historia en{' '}
              <span style={{ color: 'var(--eos-green)' }}>imágenes</span>
            </h2>
            <p className="text-muted-foreground max-w-sm" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
              Momentos de nuestros talleres, proyectos y territorios.
            </p>
          </div>
          <ImageCarousel
            slides={storySlides}
            interval={4500}
            showArrows
            showDots
            showCaptions
            aspectClassName="aspect-[16/12.096] md:aspect-[16/8.855]"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

const storySlides = [
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/educacion.webp',
    alt: 'Apoyo educativo a niñas y niños',
    caption: 'Acompañamos las trayectorias educativas',
    subcaption: 'Espacios de apoyo escolar y promoción de derechos',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/educacion1.webp',
    alt: 'Espacio educativo comunitario',
    caption: 'Aprendizaje en comunidad',
    subcaption: 'Saberes que se comparten y transforman',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/cultura1.webp',
    alt: 'Taller de creación colectiva',
    caption: 'Creación colectiva',
    subcaption: 'Teatro y expresiones comunitarias',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/cultura2.webp',
    alt: 'Producción musical de jóvenes',
    caption: 'Música y producción',
    subcaption: 'Laboratorio de grabación y edición',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/ecologia1.webp',
    alt: 'Huerta agroecológica urbana',
    caption: 'Huerta agroecológica',
    subcaption: 'Producción sustentable y soberanía alimentaria',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/ecologia2.webp',
    alt: 'Acciones de restauración ecológica',
    caption: 'Cuidado del ambiente',
    subcaption: 'Restauración ecológica y especies nativas',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/formacion1.webp',
    alt: 'Capacitación en oficios',
    caption: 'Capacitación en oficios',
    subcaption: 'Nuevas tecnologías y habilidades para el trabajo',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/infancia1.webp',
    alt: 'Espacio de juego para las infancias',
    caption: 'Juegos y cuidados',
    subcaption: 'Espacios de recreación protegida',
  },
  {
    src: 'https://tisolercdn.nyc3.cdn.digitaloceanspaces.com/fundacioneos/carrusel/produccion1.webp',
    alt: 'Emprendimientos productivos juveniles',
    caption: 'Emprendimientos productivos',
    subcaption: 'Proyectos que generan ingresos y autonomía',
  },
];
