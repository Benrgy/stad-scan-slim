import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Voer je product in",
      description:
        "Plak je salespagina-URL of beschrijf je product. Onze AI analyseert kenmerken en doelgroep.",
    },
    {
      number: "02",
      title: "Wij combineren de data",
      description:
        "Match met stadsdata: demografie, koopkracht, zoekintentie en concurrentieniveaus per regio.",
    },
    {
      number: "03",
      title: "Krijg je shortlist",
      description:
        "Gerankte lijst met beste steden, inclusief potentieel-scores en concrete tips per locatie.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary">
      <div className="container-section">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-display-sm text-foreground mb-6">
            Hoe het werkt
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen technische kennis nodig. Van productidee naar winnende steden in 3 stappen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <span className="block text-8xl font-display font-bold text-foreground/5 mb-4">
                {step.number}
              </span>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Button variant="dark" size="xl">
            Start nu met je analyse
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;