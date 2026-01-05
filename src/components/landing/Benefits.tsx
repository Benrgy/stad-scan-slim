const Benefits = () => {
  const stats = [
    { value: "67%", label: "minder verspilling" },
    { value: "3x", label: "snellere validatie" },
    { value: "89%", label: "tevreden gebruikers" },
  ];

  const benefits = [
    "Minder weggegooid advertentiebudget",
    "Snellere validatie van nieuwe niches",
    "Betere argumenten richting klanten",
    "Meer focus op wat écht werkt",
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Stats */}
          <div>
            <h2 className="text-display-sm text-foreground mb-12">
              Waarom affiliates ons kiezen
            </h2>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-secondary rounded-2xl"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-sm">{index + 1}</span>
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;