import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "voor altijd",
      description: "Perfect om te starten en de tool te ontdekken.",
      features: [
        "5 stadsscans per maand",
        "Basis stadscore",
        "Top 10 steden per scan",
        "Email support",
      ],
      cta: "Start gratis",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "€29",
      period: "per maand",
      description: "Voor serieuze affiliates die willen groeien.",
      features: [
        "Onbeperkt stadsscans",
        "Geavanceerde stadscore™",
        "Alle 312 steden per scan",
        "Self-learning AI",
        "Export naar CSV/PDF",
        "Prioriteit support",
        "Historische data",
      ],
      cta: "Start 14 dagen gratis",
      variant: "dark" as const,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Transparante prijzen
          </div>
          <h2 className="text-display-sm text-foreground mb-4">
            Simpel, eerlijk, schaalbaar
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start gratis en upgrade wanneer je klaar bent om te schalen.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 md:p-10 transition-all ${
                plan.popular
                  ? "bg-foreground text-background scale-[1.02] shadow-2xl shadow-foreground/20"
                  : "card-premium"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Meest gekozen
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <h3
                  className={`font-display text-xl font-bold mb-2 ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.popular ? "text-background/60" : "text-muted-foreground"
                    }
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-background/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "accent" : "outline"}
                size="lg"
                className="w-full group"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            14 dagen gratis proberen • Geen creditcard nodig • Cancel wanneer je
            wilt
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm">SSL beveiligd</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm">GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;