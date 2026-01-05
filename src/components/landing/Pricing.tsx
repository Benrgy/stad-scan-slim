import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "/maand",
      description: "Perfect om te starten en de tool te ontdekken.",
      features: [
        "3 scans per maand",
        "Top 5 steden per scan",
        "Basis intentiedata",
        "Community support",
      ],
      cta: "Start gratis",
      variant: "heroOutline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "€49",
      period: "/maand",
      description: "Voor serieuze affiliates en agencies die willen groeien.",
      features: [
        "Onbeperkt producten & scans",
        "Alle steden in NL & BE",
        "Volledige intentie- en concurrentiedata",
        "Projectopslag & historie",
        "CSV & PDF exports",
        "Prioriteit support",
        "Self-learning feedback loop",
      ],
      cta: "Start met Pro",
      variant: "hero" as const,
      popular: true,
      badge: "Launch deal",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simpele, transparante{" "}
            <span className="text-gradient">prijzen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen verborgen kosten. Start gratis of upgrade wanneer je klaar bent om te groeien.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border shadow-card ${
                plan.popular
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-display font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ✨ 14 dagen niet-goed-geld-terug garantie · Geen creditcard nodig om te starten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
