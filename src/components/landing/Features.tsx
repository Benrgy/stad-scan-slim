import { Zap, Shield, Brain, Globe, ArrowUpRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Snelheid",
      subtitle: "2 minuten",
      description: "Van URL naar gerankte steden",
    },
    {
      icon: Shield,
      title: "Data-backed",
      subtitle: "100% feiten",
      description: "Geen guru-praat, alleen data",
    },
    {
      icon: Brain,
      title: "Self-learning",
      subtitle: "AI-powered",
      description: "Wordt slimmer met jouw feedback",
    },
    {
      icon: Globe,
      title: "Alle niches",
      subtitle: "Onbeperkt",
      description: "Van fitness tot SaaS",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Waarom LocalAffiliateOS
          </div>
          <h2 className="text-display-sm text-foreground mb-4">
            Alles wat je nodig hebt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop met gissen. Start met winnen.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-premium hover-lift cursor-pointer"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-medium text-accent mb-1">
                    {feature.subtitle}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big feature highlight */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card-dark p-10 lg:p-12">
            <div className="max-w-md">
              <div className="text-accent text-sm font-medium mb-4">
                ✨ Premium Feature
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">
                Self-learning algoritme
              </h3>
              <p className="text-background/70 mb-6">
                Onze AI leert van elke campagne die je draait. Hoe meer data, hoe
                slimmer de voorspellingen. Na 10 campagnes is de accuraatheid
                gemiddeld 40% hoger.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="text-sm text-background/60">
                  hogere accuraatheid
                  <br />
                  na 10 campagnes
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-2xl p-10 lg:p-12">
            <div className="max-w-md">
              <div className="text-accent text-sm font-medium mb-4">
                🎯 Precisie
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Stadscore™ technologie
              </h3>
              <p className="text-muted-foreground mb-6">
                Elke stad krijgt een score gebaseerd op 50+ datapunten:
                concurrentie, zoekvolume, koopkracht, en meer. Simpel te
                begrijpen, krachtig in resultaat.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Datapunten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">312</div>
                  <div className="text-sm text-muted-foreground">Steden NL/BE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;