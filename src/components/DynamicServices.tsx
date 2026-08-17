import { LucideIcon, CheckCircle, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";


export interface DynamicServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface Props {
  title: string;
  accent: string;
  subtitle?: string;
  services: DynamicServiceItem[];
}

const DynamicServices = ({ title, accent, subtitle = "Servicios", services }: Props) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">{subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {title} <span className="text-gradient-gold">{accent}</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal key={i} y={48}>

              <div
                className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >

                {/* Image */}
                <div className={`relative ${reversed ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border group-hover:border-primary/50 transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110 animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />

                    {/* Giant number */}
                    <span className="absolute -top-6 -left-2 font-display text-[9rem] font-bold text-primary/20 leading-none group-hover:text-primary/40 transition-colors duration-500 pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Corner icon badge */}
                    <div className="absolute bottom-4 right-4 w-14 h-14 bg-background/70 backdrop-blur-md border border-primary/40 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:rotate-6">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 border-l-2 border-b-2 border-primary/60 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                </div>

                {/* Content */}
                <div className={`${reversed ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-primary" />
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-primary font-medium">
                      Servicio {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 group-hover:text-gradient-gold transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f, fi) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 bg-card/60 border border-border/60 rounded-sm px-3 py-2 hover:border-primary/40 hover:bg-card transition-all duration-300 hover:translate-x-1"
                        style={{ animationDelay: `${fi * 0.05}s` }}
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="font-body text-xs text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-primary opacity-70 group-hover:opacity-100 group-hover:gap-4 transition-all duration-500">
                    <span>Explorar</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              </ScrollReveal>
            );

          })}
        </div>
      </div>
    </section>
  );
};

export default DynamicServices;
