import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

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
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 bg-background/10 text-background rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-display-sm mb-4 overflow-visible">
            Wat anderen zeggen
          </h2>
          <p className="text-lg text-background/60 max-w-xl mx-auto">
            500+ affiliates gebruiken Stad‑Scan Slim om slimmer te adverteren
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 transition-colors"
              variants={staggerItem}
              whileHover={{ 
                y: -8, 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.2 } 
              }}
            >
              {/* Quote icon */}
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Quote className="w-10 h-10 text-accent mb-6" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-background/90 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-foreground font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-background">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-background/60">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div 
          className="mt-16 pt-16 border-t border-background/10"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Actieve gebruikers", accent: true },
              { value: "50K+", label: "Scans uitgevoerd", accent: false },
              { value: "312", label: "Steden geanalyseerd", accent: false },
              { value: "4.9", label: "Gemiddelde rating", accent: true }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.accent ? 'text-accent' : 'text-background'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-background/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
