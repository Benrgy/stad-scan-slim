import { Zap, Shield, Brain, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Topsteden in 2 minuten",
      description:
        "Voer je product of URL in en ontvang direct een gerankte lijst met de meest kansrijke steden in Nederland en België.",
    },
    {
      icon: Shield,
      title: "Eerlijk, onderbouwd advies",
      description:
        "Geen vage guru-claims. Elke aanbeveling is gebaseerd op echte data: zoekvolumes, concurrentie en intentiesignalen.",
    },
    {
      icon: Brain,
      title: "Self-learning engine",
      description:
        "Rapporteer je campagne-resultaten terug en onze AI wordt met elke feedback slimmer – betere voorspellingen voor jou.",
    },
    {
      icon: Globe,
      title: "Werkt met elke niche",
      description:
        "Of je nu fitness promoot, lokale diensten of e-commerce producten: de tool past zich aan jouw markt aan.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Alles wat je nodig hebt voor{" "}
            <span className="text-gradient">slimmere campagnes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop met gissen. Start met datagedreven beslissingen voor je affiliate 
            en lokale marketing campagnes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border shadow-card card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
