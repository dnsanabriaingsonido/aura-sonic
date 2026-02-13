import { Volume2, Music, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import divEngineering from "@/assets/division-engineering.jpg";
import divMedia from "@/assets/division-media.jpg";
import divAdvertising from "@/assets/division-advertising.jpg";

const divisions = [
  {
    icon: Volume2,
    title: "Ingeniería & Producción Técnica",
    description:
      "Producción de eventos, sonido en vivo, crew técnico, alquiler de equipos, acústica arquitectónica, aislamiento, medición y consultoría normativa.",
    image: divEngineering,
    services: ["Eventos en vivo", "Acústica", "Consultoría", "Equipos"],
    href: "/ingenieria",
  },
  {
    icon: Music,
    title: "Media & Producción Creativa",
    description:
      "Producción musical, mezcla y masterización, diseño sonoro, postproducción audiovisual, podcast y streaming profesional.",
    image: divMedia,
    services: ["Producción", "Mezcla", "Diseño sonoro", "Streaming"],
    href: "/media",
  },
  {
    icon: Megaphone,
    title: "Publicidad & Comunicación",
    description:
      "Producción audiovisual publicitaria, jingles, branding sonoro, identidad de marca, activaciones y contenido empresarial.",
    image: divAdvertising,
    services: ["Branding sonoro", "Jingles", "Audiovisual", "Activaciones"],
    href: "/publicidad",
  },
];

const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Nuestras Divisiones
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tres pilares, una <span className="text-gradient-gold">visión integral</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={div.image}
                  alt={div.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary/20 rounded-sm flex items-center justify-center">
                  <div.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{div.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{div.description}</p>
                <div className="flex flex-wrap gap-2">
                  {div.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-body font-medium text-primary bg-primary/10 px-3 py-1 rounded-sm tracking-wide"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  to={div.href}
                  className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline mt-2"
                >
                  Ver más <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
