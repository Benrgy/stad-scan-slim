import { TrendingDown, Rocket, Users, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Minder weggegooid advertentiebudget",
      description:
        "Stop met adverteren in steden waar jouw product niet aanslaat. Investeer alleen daar waar de vraag echt is.",
    },
    {
      icon: Rocket,
      title: "Snellere productvalidatie",
      description:
        "Test nieuwe niches en producten in minuten in plaats van weken. Weet direct of iets kans maakt voordat je tijd investeert.",
    },
    {
      icon: Users,
      title: "Betere argumenten voor klanten",
      description:
        "Onderbouw je voorstellen met echte data. Overtuig partners en opdrachtgevers met heldere rapporten per regio.",
    },
    {
      icon: Target,
      title: "Meer focus op wat werkt",
      description:
        "Bouw alleen aan projecten met échte potentie. Minder versnippering, meer resultaat per uur die je investeert.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Header */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Waarom affiliates ons kiezen
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Geen giswerk meer.{" "}
              <span className="text-gradient">Concrete resultaten.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Of je nu een beginnende affiliate bent of een gevestigde agency runt: 
              datagedreven locatiekeuze maakt het verschil tussen winst en verlies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "67%", label: "minder verspilling" },
                { value: "3x", label: "snellere validatie" },
                { value: "89%", label: "tevreden gebruikers" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border shadow-card card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
