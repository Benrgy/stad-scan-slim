import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mark de Vries",
      role: "Affiliate Marketeer",
      company: "Solo affiliate",
      avatar: "MV",
      rating: 5,
      quote:
        "Ik gooide mijn budget weg in Amsterdam terwijl mijn niche veel beter scoorde in Brabant. Na 1 scan wist ik precies waar ik moest focussen. ROI verdrievoudigd.",
    },
    {
      name: "Lisa Jansen",
      role: "Founder",
      company: "LocalLeads Agency",
      avatar: "LJ",
      rating: 5,
      quote:
        "Als agency moeten we klanten overtuigen met data. Deze tool geeft ons de rapporten die we nodig hebben. Minder discussie, meer vertrouwen.",
    },
    {
      name: "Pieter Van den Berg",
      role: "Media Buyer",
      company: "Performance Studio",
      avatar: "PB",
      rating: 5,
      quote:
        "We valideren nu elke nieuwe niche voordat we een cent uitgeven aan ads. Het bespaart ons weken testwerk en duizenden euro's aan mislukte campagnes.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wat andere affiliates{" "}
            <span className="text-gradient">zeggen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek hoe andere marketeers hun campagnes optimaliseren met onze tool.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-card card-hover"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-warm text-warm"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
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
