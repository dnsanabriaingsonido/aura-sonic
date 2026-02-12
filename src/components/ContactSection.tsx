import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Contacto
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hablemos de tu <span className="text-gradient-gold">proyecto</span>
            </h2>
            <p className="font-body text-muted-foreground">
              Cada proyecto comienza con una conversación. Cuéntanos qué necesitas y diseñamos la solución ideal.
            </p>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Mail, label: "contacto@audiumgroup.com" },
              { icon: Phone, label: "+00 000 000 0000" },
              { icon: MapPin, label: "Ciudad, País" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-sm p-4">
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={5}
              className="w-full bg-card border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 rounded-sm text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              Enviar Propuesta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
