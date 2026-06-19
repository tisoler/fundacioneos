import { useState } from "react";
import { Send, MapPin, Instagram, Facebook, CheckCircle } from "lucide-react";

type FormState = {
  nombre: string;
  email: string;
  tipo: string;
  mensaje: string;
};

export function Contact() {
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', tipo: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = 'Ingresá tu nombre';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido';
    if (!form.mensaje.trim() || form.mensaje.length < 10) e.mensaje = 'El mensaje es muy corto';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch('https://chasqui.tisoler.net.ar/v1/mail/contacto/eos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombreApellido: form.nombre,
          email: form.email,
          interes: form.tipo,
          mensaje: form.mensaje,
        }),
      });
      if (!res.ok) throw new Error('Error al enviar el mensaje');
      setSent(true);
    } catch {
      setErrors({ mensaje: 'Ocurrió un error al enviar el mensaje. Intentá de nuevo.' });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(err => ({ ...err, [field]: undefined }));
  };

  return (
    <section id="contacto" className="py-20 px-4" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-1 rounded-full" style={{ background: 'var(--eos-blue)' }} />
          <span className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            Contacto
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left info */}
          <div>
            <h2 className="text-foreground mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              ¿Querés ser parte?
            </h2>
            <p className="text-muted-foreground mb-2" style={{ lineHeight: 1.75 }}>
              Trabajamos para que los derechos se conviertan en oportunidades reales para las personas y comunidades.
            </p>
            <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.75 }}>
              Contactanos para desarrollar proyectos conjuntos, alianzas estratégicas o iniciativas de financiamiento.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(63,169,245,0.15)' }}>
                  <MapPin size={18} style={{ color: 'var(--eos-blue)' }} />
                </div>
                <div>
                  <div className="font-bold text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>Ubicación</div>
                  <div className="text-muted-foreground" style={{ fontSize: '0.9rem' }}>Rosario, Santa Fe, Argentina</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(244,136,42,0.15)' }}>
                  <Instagram size={18} style={{ color: 'var(--eos-orange)' }} />
                </div>
                <div>
                  <div className="font-bold text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>Instagram</div>
                  <a
                    href="https://www.instagram.com/fundacion.eos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--eos-orange)', fontSize: '0.9rem' }}
                  >
                    @fundacion.eos
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(63,169,245,0.15)' }}>
                  <Facebook size={18} style={{ color: 'var(--eos-blue)' }} />
                </div>
                <div>
                  <div className="font-bold text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>Facebook</div>
                  <a
                    href="https://www.facebook.com/p/EOS-para-la-infancia-y-Juventud-100075949485590/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: 'var(--eos-blue)', fontSize: '0.9rem' }}
                  >
                    EOS para la Infancia y Juventud
                  </a>
                </div>
              </div>
            </div>

            {/* How to participate */}
            <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-foreground mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>¿Cómo podés sumarte?</h4>
              <ul className="flex flex-col gap-2">
                {['Participando de nuestros talleres y programas', 'Vinculando tu organización a la red EOS', 'Realizando una donación monetaria o en especie', 'Ofreciendo pasantías o puestos laborales para jóvenes'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    <span className="mt-1.5 w-4 h-1 rounded-full shrink-0" style={{ background: 'var(--eos-green)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-3xl border border-border p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <CheckCircle size={48} className="mb-4" style={{ color: 'var(--eos-green)' }} />
                <h3 className="text-foreground mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>¡Mensaje enviado!</h3>
                <p className="text-muted-foreground mb-6" style={{ lineHeight: 1.7 }}>
                  Gracias por escribirnos. Nos comunicaremos con vos a la brevedad.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: '', email: '', tipo: '', mensaje: '' }); }}
                  className="px-5 py-2.5 rounded-full border-2 border-primary text-primary hover:bg-secondary transition-colors font-semibold"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <h3 className="text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>Escribinos</h3>

                <div>
                  <label className="block text-foreground mb-1.5" style={{ fontSize: '0.875rem' }}>Nombre y apellido *</label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={handleChange('nombre')}
                    placeholder="María García"
                    className={`w-full px-4 py-3 rounded-xl border bg-input-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.nombre ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.nombre && <p className="mt-1 text-destructive" style={{ fontSize: '0.8rem' }}>{errors.nombre}</p>}
                </div>

                <div>
                  <label className="block text-foreground mb-1.5" style={{ fontSize: '0.875rem' }}>Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="maria@ejemplo.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-input-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.email ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.email && <p className="mt-1 text-destructive" style={{ fontSize: '0.8rem' }}>{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-foreground mb-1.5" style={{ fontSize: '0.875rem' }}>Me interesa…</label>
                  <select
                    value={form.tipo}
                    onChange={handleChange('tipo')}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input-background text-foreground outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="participar">Participar en un programa</option>
                    <option value="organizar">Vincular mi organización</option>
                    <option value="donar">Hacer una donación</option>
                    <option value="empleo">Ofrecer empleo para jóvenes</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground mb-1.5" style={{ fontSize: '0.875rem' }}>Mensaje *</label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange('mensaje')}
                    placeholder="Contanos en qué podemos ayudarte o cómo querés sumarte..."
                    className={`w-full px-4 py-3 rounded-xl border bg-input-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none ${errors.mensaje ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.mensaje && <p className="mt-1 text-destructive" style={{ fontSize: '0.8rem' }}>{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: 'var(--primary)', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
