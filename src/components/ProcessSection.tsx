import ScrollReveal from "@/components/ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

const ProcessSection = ({ title = "Nuestro Proceso", subtitle = "Metodología", steps }: ProcessSectionProps) => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {subtitle}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12} y={60}>
              <div className="relative h-full bg-card border border-border rounded-sm p-8 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 group">
                <span className="font-display text-6xl font-bold text-primary/10 absolute top-4 right-6 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-500 origin-top-right">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
