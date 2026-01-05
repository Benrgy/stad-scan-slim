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
        "We combineren openbare zoekdata (zoekvolumes, trends), demografische gegevens per stad/regio, concurrentie-analyses en aggregated koopintentiesignalen. Alle bronnen zijn GDPR-compliant en we gebruiken nooit persoonsgegevens.",
    },
    {
      question: "Hoe vaak worden de gegevens bijgewerkt?",
      answer:
        "De kerndata wordt maandelijks geüpdatet. Zoektrends en intentiesignalen worden wekelijks ververst. Voor Pro-gebruikers zijn er real-time indicatoren beschikbaar bij grote marktveranderingen.",
    },
    {
      question: "Werkt het voor elk product of affiliate netwerk?",
      answer:
        "Ja, de tool is niche-agnostisch. Of je nu fysieke producten, digitale cursussen, lokale diensten of SaaS promoot – zolang er zoekintentie is, kunnen we de beste steden identificeren. We ondersteunen alle gangbare affiliate netwerken.",
    },
    {
      question: "Hoe zit het met privacy en tracking?",
      answer:
        "We tracken geen individuele gebruikers of klanten. Alle analyses zijn gebaseerd op geaggregeerde, geanonimiseerde data. Je campagne-feedback wordt versleuteld opgeslagen en alleen gebruikt om jouw eigen voorspellingen te verbeteren.",
    },
    {
      question: "Kan ik later upgraden of downgraden?",
      answer:
        "Absoluut. Je kunt op elk moment upgraden naar Pro of downgraden naar Free. Bij upgraden krijg je direct toegang tot alle features. Bij downgraden blijf je toegang houden tot het einde van je huidige factureringsperiode.",
    },
    {
      question: "Wat als de tool niet voor mij werkt?",
      answer:
        "We bieden een 14-dagen niet-goed-geld-terug garantie. Geen vragen, geen gedoe. Als je binnen 14 dagen na je Pro-upgrade niet tevreden bent, krijg je je geld volledig terug.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Veelgestelde{" "}
              <span className="text-gradient">vragen</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles wat je moet weten over LocalAffiliateOS.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
