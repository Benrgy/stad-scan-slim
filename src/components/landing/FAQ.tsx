import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const FAQ = () => {
  const faqs = [
    {
      question: "Werkt dit voor elk product of alleen voor specifieke cursussen/netwerken?",
      answer:
        "Stad‑Scan Slim is product‑agnostisch. Zolang je een duidelijke product‑ of salespagina hebt, kunnen we een profiel maken en de beste steden bepalen.",
    },
    {
      question: "Welke data gebruiken jullie om steden te scoren?",
      answer:
        "We combineren openbare stadsdata (zoals inwoners, inkomen, demografie) met zoek‑ en intentiesignalen per niche. Op basis daarvan berekenen we een kansen‑score per stad.",
    },
    {
      question: "Hoe vaak worden de gegevens bijgewerkt?",
      answer:
        "Stadsdata wordt periodiek geüpdatet (wanneer bronnen vernieuwen), intentiesignalen en scores worden minimaal wekelijks ververst.",
    },
    {
      question: "Moet ik mijn resultaten delen?",
      answer:
        "Je kunt optioneel resultaten (kliks, leads, sales) invullen. Daarmee wordt de engine slimmer en krijg jij betere aanbevelingen. Deze data wordt niet gedeeld met andere gebruikers.",
    },
    {
      question: "Voor welke landen werkt het nu?",
      answer:
        "In de huidige versie focussen we op Nederland en België. Later breiden we uit naar andere landen.",
    },
    {
      question: "Kan ik later upgraden of downgraden?",
      answer:
        "Ja. Je kunt op elk moment van Free naar Pro (of terug) wisselen. Je data blijft bewaard.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Veelgestelde vragen
          </div>
          <h2 className="text-display-sm text-foreground mb-4">
            Veelgestelde vragen
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-premium px-6 py-2 border border-border data-[state=open]:border-foreground/20 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
