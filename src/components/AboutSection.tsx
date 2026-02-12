import { Target, Users, Zap, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Precisión Técnica", desc: "Cada proyecto ejecutado con estándares de ingeniería profesional." },
  { icon: Users, title: "Talento Híbrido", desc: "Red de expertos senior y talento joven altamente capacitado." },
  { icon: Zap, title: "Agilidad Operativa", desc: "Estructura flexible que se adapta a la escala de cada proyecto." },
  { icon: Shield, title: "Excelencia Corporativa", desc: "Procesos, certificaciones y entregables de nivel empresarial." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Sobre Nosotros
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Una firma construida por <span className="text-gradient-gold">ingenieros</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              AUDIUM GROUP nace de la visión de Dilan, ingeniero de sonido con experiencia en producción técnica, acústica y comunicación estratégica. No somos una empresa de sonido convencional: somos una firma integral que une ciencia, creatividad y estrategia.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Nuestro modelo híbrido combina profesionales experimentados con talento emergente de alto nivel, permitiéndonos ofrecer soluciones premium con estructura ágil y competitiva.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="font-display text-4xl font-bold text-gradient-gold">50+</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Proyectos ejecutados</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gradient-gold">3</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Divisiones especializadas</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-gradient-gold">100%</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Satisfacción garantizada</p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
