import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  image: string;
  subtitle: string;
  title: string;
  titleAccent: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
}

const PageHero = ({ image, subtitle, title, titleAccent, description, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
              <Link
                to={crumb.href}
                className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>

        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 font-medium animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          {subtitle}
        </p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <span className="text-foreground">{title}</span>
          <br />
          <span className="text-gradient-gold">{titleAccent}</span>
        </h1>

        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default PageHero;
