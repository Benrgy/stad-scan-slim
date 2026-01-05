import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "/maand",
      description: "Perfect om te starten",
      features: [
        "3 scans per maand",
        "Top 5 steden per scan",
        "Basis intentiedata",
        "Community support",
      ],
      cta: "Start gratis",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "€49",
      period: "/maand",
      description: "Voor serieuze affiliates",
      features: [
        "Onbeperkt scans",
        "Alle steden in NL & BE",
        "Volledige data & exports",
        "Self-learning feedback",
        "Prioriteit support",
      ],
      cta: "Start met Pro",
      variant: "dark" as const,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-display-sm text-foreground mb-6">
            Simpele prijzen
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen verborgen kosten. Start gratis of upgrade wanneer je klaar bent.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-foreground text-background"
                  : "bg-secondary"
              }`}
            >
              {/* Popular indicator */}
              {plan.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-block px-4 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                    Populair
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold mb-1">
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-display font-bold">
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-background/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${plan.popular ? "text-background/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "secondary" : "dark"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            14 dagen niet-goed-geld-terug garantie · Geen creditcard nodig
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;