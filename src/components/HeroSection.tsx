import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional audio mixing console" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Ingeniería · Producción · Estrategia
          </p>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="text-foreground">Donde el sonido</span>
          <br />
          <span className="text-gradient-gold">se convierte en poder</span>
        </h1>

        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Firma técnica integral especializada en ingeniería de audio, producción audiovisual y comunicación estratégica para marcas, eventos y espacios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#divisions"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
          >
            Explorar Divisiones
          </a>
          <a
            href="#contact"
            className="border border-primary/40 text-primary font-body font-semibold px-8 py-4 rounded-sm text-sm tracking-wider uppercase hover:bg-primary/10 transition-colors"
          >
            Solicitar Propuesta
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
