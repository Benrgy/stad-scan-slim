import { Zap, Shield, Brain, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "2 minuten",
      description: "Van URL naar gerankte steden",
    },
    {
      icon: Shield,
      title: "Data-backed",
      description: "Geen guru-praat, alleen feiten",
    },
    {
      icon: Brain,
      title: "Self-learning",
      description: "Wordt slimmer met jouw feedback",
    },
    {
      icon: Globe,
      title: "Alle niches",
      description: "Van fitness tot SaaS tot lokale diensten",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 border-t border-border">
      <div className="container-section">
        {/* Feature bar - horizontal layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary mb-4">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
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