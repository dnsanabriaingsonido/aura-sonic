import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Preguntas Frecuentes", items }: FAQSectionProps) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08} y={30} blur={false}>
              <AccordionItem value={`item-${i}`} className="bg-card border border-border rounded-sm px-6 transition-colors duration-500 hover:border-primary/40">
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
