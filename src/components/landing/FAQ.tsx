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
      question: "Hoe werkt de stadscore precies?",
      answer:
        "De stadscore is een getal van 0-100 dat de potentie van een stad voor jouw specifieke product weergeeft. We analyseren 50+ datapunten waaronder zoekvolume, concurrentiedichtheid, gemiddelde koopkracht, demografische data, en historische campagne-performance. Hoe hoger de score, hoe groter de kans op succes.",
    },
    {
      question: "Kan ik de tool gratis uitproberen?",
      answer:
        "Ja! Je kunt starten met ons Free plan dat 5 stadsscans per maand bevat. Geen creditcard nodig. Als je meer scans wilt of toegang tot geavanceerde features, kun je upgraden naar Pro met een 14-daagse gratis proefperiode.",
    },
    {
      question: "Hoe snel krijg ik resultaten?",
      answer:
        "Gemiddeld duurt een volledige stadsscan 2 minuten. Je plakt je URL, onze AI analyseert je product, en je krijgt direct een gerankte lijst van alle 312 steden in Nederland en België met hun scores.",
    },
    {
      question: "Wat maakt de self-learning AI bijzonder?",
      answer:
        "Onze AI leert van de campagnes die je draait. Als je terugkoppelt welke steden goed presteren, verbetert het algoritme de voorspellingen voor jouw specifieke niche. Na 10 campagnes is de accuraatheid gemiddeld 40% hoger.",
    },
    {
      question: "Voor welke niches werkt dit?",
      answer:
        "LocalAffiliateOS werkt voor vrijwel elke niche: van fitness en gezondheid tot SaaS, lokale diensten, e-commerce, en meer. Zolang je product of dienst geografisch relevant is, kunnen we je helpen de beste steden te vinden.",
    },
    {
      question: "Kan ik mijn team toegang geven?",
      answer:
        "Op dit moment is LocalAffiliateOS ontworpen voor individueel gebruik. We werken aan team-functionaliteit voor Q2 2024. Neem contact op als je interesse hebt in early access.",
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
            Heb je vragen?
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles wat je wilt weten over LocalAffiliateOS
          </p>
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
          <p className="text-muted-foreground mb-4">
            Vraag niet beantwoord?
          </p>
          <motion.a
            href="mailto:support@localaffiliateos.com"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
            whileHover={{ x: 5 }}
          >
            Neem contact op
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
