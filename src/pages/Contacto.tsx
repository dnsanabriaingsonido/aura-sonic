import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero simple */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 font-medium">Contacto</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hablemos de tu <span className="text-gradient-gold">próximo proyecto</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Cada gran proyecto comienza con una conversación. Cuéntanos qué necesitas y diseñamos la solución técnica ideal para ti.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contacto@audiumgroup.com" },
                { icon: Phone, label: "Teléfono", value: "+00 000 000 0000" },
                { icon: MapPin, label: "Ubicación", value: "Ciudad, País" },
                { icon: Clock, label: "Horario", value: "Lun - Vie: 9:00 - 18:00" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-sm p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="font-body text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-card border border-border rounded-sm p-6">
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  ¿No estás seguro de qué servicio necesitas? Explora nuestras divisiones:
                </p>
                <div className="space-y-2">
                  {[
                    { label: "Ingeniería & Producción", href: "/ingenieria" },
                    { label: "Media & Producción Creativa", href: "/media" },
                    { label: "Publicidad & Comunicación", href: "/publicidad" },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      className="flex items-center gap-2 text-primary font-body text-sm hover:underline"
                    >
                      <ArrowRight className="w-3.5 h-3.5" /> {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-sm p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Solicitar Propuesta</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Nombre completo</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Empresa</label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="+00 000 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">División de interés</label>
                  <select className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors">
                    <option value="">Seleccionar...</option>
                    <option value="ingenieria">Ingeniería & Producción Técnica</option>
                    <option value="media">Media & Producción Creativa</option>
                    <option value="publicidad">Publicidad & Comunicación</option>
                    <option value="integral">Proyecto integral (múltiples divisiones)</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    rows={6}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos, fechas estimadas y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-sm text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
                >
                  Enviar Solicitud
                </button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  Respondemos en menos de 24 horas hábiles. Tu información es confidencial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
