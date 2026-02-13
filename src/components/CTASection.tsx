import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  accent?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection = ({
  title = "¿Listo para elevar",
  accent = "tu proyecto?",
  description = "Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos con soluciones técnicas de clase mundial.",
  buttonText = "Solicitar Propuesta",
  buttonHref = "/contacto",
}: CTASectionProps) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title} <span className="text-gradient-gold">{accent}</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          {description}
        </p>
        <Link
          to={buttonHref}
          className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-4 rounded-sm text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
