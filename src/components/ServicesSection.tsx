import {
  Speaker,
  Mic,
  Ruler,
  Radio,
  Film,
  Podcast,
  Video,
  Music2,
  Headphones,
  MonitorSpeaker,
  Gauge,
  Building,
} from "lucide-react";

const services = [
  { icon: Speaker, label: "Sonido en Vivo" },
  { icon: Mic, label: "Producción Musical" },
  { icon: Ruler, label: "Acústica Arquitectónica" },
  { icon: Radio, label: "Streaming Profesional" },
  { icon: Film, label: "Producción Audiovisual" },
  { icon: Podcast, label: "Podcasts" },
  { icon: Video, label: "Contenido Publicitario" },
  { icon: Music2, label: "Branding Sonoro" },
  { icon: Headphones, label: "Mezcla & Master" },
  { icon: MonitorSpeaker, label: "Instalación de Sistemas" },
  { icon: Gauge, label: "Medición y Calibración" },
  { icon: Building, label: "Consultoría Corporativa" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Soluciones <span className="text-gradient-gold">de extremo a extremo</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 bg-card border border-border rounded-sm hover:border-primary/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm font-medium text-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
