import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, BarChart3, Rocket, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      tag: "Input",
      icon: Link2,
      title: "Plak je product-URL",
      description:
        "Of beschrijf je product in een paar woorden. Onze AI begrijpt direct waar je mee bezig bent.",
    },
    {
      number: "02",
      tag: "Analyse",
      icon: BarChart3,
      title: "AI analyseert 312 steden",
      description:
        "We scannen concurrentie, zoekvolume, koopkracht en 47 andere metrics per stad in Nederland en België.",
    },
    {
      number: "03",
      tag: "Resultaat",
      icon: TrendingUp,
      title: "Ontvang je stadsscore",
      description:
        "Elke stad krijgt een score van 0-100. Je ziet direct waar de grootste kansen liggen.",
    },
    {
      number: "04",
      tag: "Actie",
      icon: Rocket,
      title: "Launch met vertrouwen",
      description:
        "Start je campagnes in de top-steden en zie je ROI stijgen. Track resultaten en laat de AI bijleren.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
      <div className="container-section">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Zo werkt het
            </div>
            <h2 className="text-display-sm text-foreground max-w-xl">
              Van URL naar winst in 4 simpele stappen
            </h2>
          </div>
          <Button variant="dark" size="lg" className="group self-start lg:self-auto">
            Start nu gratis
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative">
                {/* Large number background */}
                <div className="step-number absolute -top-4 -left-2 select-none">
                  {step.number}
                </div>

                {/* Content card */}
                <div className="relative pt-16">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium mb-4">
                    <step.icon className="w-3 h-3" />
                    {step.tag}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual mockup placeholder */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-grid opacity-5" />
            
            <div className="relative">
              <div className="text-background/60 text-sm font-medium mb-2">
                Voorbeeld output
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-8">
                Top 5 steden voor jouw product
              </h3>

              {/* Mock results */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-3xl mx-auto">
                {[
                  { city: "Amsterdam", score: 94 },
                  { city: "Rotterdam", score: 87 },
                  { city: "Utrecht", score: 82 },
                  { city: "Antwerpen", score: 79 },
                  { city: "Den Haag", score: 76 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-background/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="text-xs text-background/60 mb-1">#{i + 1}</div>
                    <div className="font-semibold text-background mb-2">
                      {item.city}
                    </div>
                    <div className="inline-flex items-center gap-1 bg-accent/20 text-accent rounded-full px-2 py-0.5 text-sm font-bold">
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;