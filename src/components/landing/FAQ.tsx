import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Welke data gebruikt de tool?",
      answer:
        "We combineren openbare zoekdata, demografische gegevens per stad, concurrentie-analyses en koopintentiesignalen. Alle bronnen zijn GDPR-compliant.",
    },
    {
      question: "Hoe vaak worden de gegevens bijgewerkt?",
      answer:
        "Kerndata wordt maandelijks geüpdatet. Zoektrends en intentiesignalen worden wekelijks ververst.",
    },
    {
      question: "Werkt het voor elk product of niche?",
      answer:
        "Ja. Of je fysieke producten, digitale cursussen, lokale diensten of SaaS promoot – zolang er zoekintentie is, kunnen we de beste steden identificeren.",
    },
    {
      question: "Kan ik later upgraden of downgraden?",
      answer:
        "Absoluut. Je kunt op elk moment upgraden of downgraden. Bij upgraden krijg je direct toegang tot alle features.",
    },
    {
      question: "Wat als de tool niet voor mij werkt?",
      answer:
        "We bieden een 14-dagen niet-goed-geld-terug garantie. Geen vragen, geen gedoe.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-sm text-foreground mb-6">
            Veelgestelde vragen
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;