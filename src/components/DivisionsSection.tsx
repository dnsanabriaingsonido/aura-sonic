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
              className="group relative block rounded-sm overflow-hidden border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {/* Full-bleed image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={div.image}
                  alt={div.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />

                {/* Number watermark */}
                <span className="absolute top-5 right-5 font-display text-6xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors duration-500">
                  {div.number}
                </span>

                {/* Icon badge */}
                <div className="absolute top-5 left-5 w-11 h-11 bg-primary/15 backdrop-blur-md border border-primary/30 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <div.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-1">{div.title}</h3>
                  <p className="font-body text-sm text-primary italic mb-4">{div.tagline}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {div.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-body font-medium text-foreground/80 border border-border/60 bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm tracking-wider uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/40">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                      Explorar
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-primary transition-transform duration-500 group-hover:rotate-45" />
                  </div>
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
