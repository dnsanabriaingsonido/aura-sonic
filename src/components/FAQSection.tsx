import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-medium">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-sm px-6">
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
