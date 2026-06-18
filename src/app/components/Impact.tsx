import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 500, suffix: '+', label: 'Jóvenes acompañados/as', desc: 'en trayectorias de formación y empleo', color: 'var(--eos-orange)' },
  { num: 12, suffix: '+', label: 'Líneas de acción', desc: 'en diferentes barrios de Rosario', color: 'var(--eos-blue)' },
  { num: 30, suffix: '+', label: 'Organizaciones aliadas', desc: 'en red de trabajo colaborativo', color: 'var(--eos-green)' },
  { num: 8, suffix: ' años', label: 'De trayectoria', desc: 'construyendo junto a las comunidades', color: 'var(--eos-red)' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const allies = [
  'AMR', 'UNR', 'Ministerio de Igualdad y Desarrollo Humano', 'Subsecretaria de Salud Mental',
  'Colegio de Psicologos 2da Circ.', 'INTA', 'Mesa de Articulación de Niñez y adolescencia',
  'Wetlands Internacional Argentina', 'Movimiento Chicos del Pueblo', 'IE3 Global Internships'
];

export function Impact() {
  return (
    <section id="impacto" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-1 rounded-full" style={{ background: 'var(--eos-red)' }} />
          <span className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            Impacto
          </span>
        </div>

        <h2 className="text-foreground mb-12" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Números que cuentan historias
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 border border-border bg-card hover:shadow-md transition-all duration-200 text-center"
            >
              <div
                className="text-5xl font-black mb-2"
                style={{ color: s.color, fontFamily: 'Nunito, sans-serif', lineHeight: 1 }}
              >
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div className="font-bold text-foreground mb-1" style={{ fontSize: '0.95rem', fontFamily: 'Nunito, sans-serif' }}>
                {s.label}
              </div>
              <div className="text-muted-foreground" style={{ fontSize: '0.8rem' }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Quote / Testimony */}
        <div
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden mb-16"
          style={{ background: 'linear-gradient(135deg, var(--eos-orange) 0%, var(--eos-red) 100%)' }}
        >
          <div className="relative z-10 text-white max-w-2xl">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" className="mb-4 opacity-50">
              <path d="M0 28V16.8C0 12.5867 1.04 8.96 3.12 5.92C5.2 2.88 8.48 0.96 12.96 0.16L14.56 3.04C11.68 3.68 9.49333 4.96 8 6.88C6.50667 8.80 5.76 11.04 5.76 13.6H11.2V28H0ZM22.4 28V16.8C22.4 12.5867 23.44 8.96 25.52 5.92C27.6 2.88 30.88 0.96 35.36 0.16L36.96 3.04C34.08 3.68 31.8933 4.96 30.4 6.88C28.9067 8.80 28.16 11.04 28.16 13.6H33.6V28H22.4Z" fill="white" />
            </svg>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, fontWeight: 600 }}>
              Cuando llegué al taller no sabía si iba a poder. Ahora tengo mi propio emprendimiento
              y soy parte de una cooperativa. EOS no solo me dio herramientas, me devolvió la confianza.
            </p>
            <div className="mt-6">
              <div style={{ fontWeight: 700 }}>Valentina M., 22 años</div>
              <div style={{ opacity: 0.8, fontSize: '0.875rem' }}>Egresada del programa de proyectos productivos</div>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full opacity-20" style={{ background: 'white' }} />
          <div className="absolute -right-2 top-4 w-24 h-24 rounded-full opacity-10" style={{ background: 'white' }} />
        </div>

        {/* Allies */}
        <div>
          <p className="text-center text-muted-foreground mb-6 font-semibold uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>
            Trabajamos junto a
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {allies.map((a) => (
              <span
                key={a}
                className="px-4 py-2 rounded-full border border-border bg-card text-muted-foreground"
                style={{ fontSize: '0.85rem', fontWeight: 600 }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
