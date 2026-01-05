import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "In 3 maanden tijd heb ik mijn affiliate omzet verdrievoudigd. De stadsscore is echt een gamechanger - ik weet nu exact waar ik moet adverteren.",
      author: "Mark de Vries",
      role: "Affiliate Marketeer",
      company: "SolarLeads.nl",
      avatar: "M",
      rating: 5,
    },
    {
      quote:
        "Voorheen besteedde ik uren aan marktonderzoek. Nu heb ik in 2 minuten een complete analyse. De ROI is ongelooflijk.",
      author: "Lisa Janssen",
      role: "Founder",
      company: "FitLocal",
      avatar: "L",
      rating: 5,
    },
    {
      quote:
        "De self-learning feature is briljant. Hoe meer campagnes ik draai, hoe beter de voorspellingen worden. Mijn CTR is met 40% gestegen.",
      author: "Tom Bakker",
      role: "Performance Marketeer",
      company: "GrowthHub",
      avatar: "T",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-background/10 text-background rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-display-sm mb-4">
            Wat anderen zeggen
          </h2>
          <p className="text-lg text-background/60 max-w-xl mx-auto">
            500+ affiliates gebruiken LocalAffiliateOS om slimmer te adverteren
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent mb-6 opacity-80" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-background/90 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-background">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-background/60">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-16 border-t border-background/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-background/60">Actieve gebruikers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-background mb-2">
                50K+
              </div>
              <div className="text-background/60">Scans uitgevoerd</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-background mb-2">
                312
              </div>
              <div className="text-background/60">Steden geanalyseerd</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                4.9
              </div>
              <div className="text-background/60">Gemiddelde rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;