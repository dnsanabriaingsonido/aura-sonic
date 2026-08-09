import { Volume2, Music, Megaphone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import divEngineering from "@/assets/division-engineering.jpg";
import divMedia from "@/assets/division-media.jpg";
import divAdvertising from "@/assets/division-advertising.jpg";

const divisions = [
  {
    icon: Volume2,
    number: "01",
    title: "Ingeniería & Producción Técnica",
    description:
      "Producción de eventos, sonido en vivo, crew técnico, alquiler de equipos, acústica arquitectónica, aislamiento, medición y consultoría normativa.",
    image: divEngineering,
    tags: ["Eventos en vivo", "Acústica", "Consultoría", "Equipos"],
    href: "/ingenieria",
  },
  {
    icon: Music,
    number: "02",
    title: "Media & Producción Creativa",
    description:
      "Producción musical, mezcla y masterización, diseño sonoro, postproducción audiovisual, podcast y streaming profesional.",
    image: divMedia,
    tags: ["Producción", "Mezcla", "Diseño sonoro", "Streaming"],
    href: "/media",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Publicidad & Comunicación",
    description:
      "Producción audiovisual publicitaria, jingles, branding sonoro, identidad de marca, activaciones y contenido empresarial.",
    image: divAdvertising,
    tags: ["Branding sonoro", "Jingles", "Audiovisual", "Activaciones"],
    href: "/publicidad",
  },
];


const DivisionsSection = () => {
  return (
    <section id="divisions" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
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
            <Link
              key={i}
              to={div.href}
              className="group relative flex flex-col rounded-sm overflow-hidden border border-border bg-card hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={div.image}
                  alt={div.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <div.icon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-display text-5xl font-bold text-primary/20 group-hover:text-primary/50 transition-colors duration-500 leading-none">
                  {div.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-500">
                  {div.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {div.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {div.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-body font-medium text-primary border border-primary/30 bg-primary/10 px-2.5 py-1 rounded-sm transition-colors duration-300 group-hover:border-primary/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                    Explorar
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
