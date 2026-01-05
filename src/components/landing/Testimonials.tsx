const Testimonials = () => {
  const testimonials = [
    {
      name: "Mark de Vries",
      role: "Affiliate Marketeer",
      quote:
        "Ik gooide mijn budget weg in Amsterdam terwijl mijn niche veel beter scoorde in Brabant. Na 1 scan wist ik precies waar ik moest focussen.",
    },
    {
      name: "Lisa Jansen",
      role: "Founder, LocalLeads Agency",
      quote:
        "Als agency moeten we klanten overtuigen met data. Deze tool geeft ons de rapporten die we nodig hebben. Minder discussie, meer vertrouwen.",
    },
    {
      name: "Pieter Van den Berg",
      role: "Media Buyer",
      quote:
        "We valideren nu elke nieuwe niche voordat we een cent uitgeven aan ads. Het bespaart ons weken testwerk en duizenden euro's.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container-section">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-display-sm text-foreground mb-6">
            Wat anderen zeggen
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 hover-lift"
            >
              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-semibold text-muted-foreground">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;