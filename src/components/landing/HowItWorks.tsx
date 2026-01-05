import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, BarChart3, Target } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Voer je product of URL in",
      description:
        "Plak simpelweg de salespagina-URL of beschrijf je product. Onze AI analyseert de kenmerken, unique selling points en doelgroep.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Wij combineren de data",
      description:
        "De engine matcht jouw productprofiel met stadsdata: demografie, koopkracht, zoekintentie en concurrentieniveaus per regio.",
    },
    {
      number: "03",
      icon: Target,
      title: "Ontvang je actiegerichte shortlist",
      description:
        "Bekijk een gerankte lijst met de beste steden, inclusief potentieel-scores, risico-indicaties en concrete SEO/ads-tips per locatie.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/50">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Hoe het werkt
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Van productidee naar{" "}
            <span className="text-gradient">winnende steden</span> in 3 stappen
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen technische kennis nodig. Iedereen kan binnen minuten starten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full">
                {/* Step number and icon */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-display font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Start nu met je eerste analyse
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
