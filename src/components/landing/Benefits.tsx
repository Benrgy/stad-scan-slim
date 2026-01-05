import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight, defaultViewport } from "@/lib/animations";

const Benefits = () => {
  const comparison = [
    {
      feature: "Tijd per analyse",
      us: "2 minuten",
      them: "3-5 uur",
    },
    {
      feature: "Steden geanalyseerd",
      us: "312 steden",
      them: "10-20 steden",
    },
    {
      feature: "Datapunten per stad",
      us: "50+ metrics",
      them: "3-5 metrics",
    },
    {
      feature: "Self-learning AI",
      us: true,
      them: false,
    },
    {
      feature: "Actuele data",
      us: true,
      them: false,
    },
    {
      feature: "Kosten",
      us: "Vanaf €0",
      them: "€500+ per analyse",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideInLeft}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Vergelijk
            </div>
            <h2 className="text-display-sm text-foreground mb-6">
              Stop met handmatig onderzoek
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Traditioneel marktonderzoek kost uren en levert vaak verouderde
              data op. LocalAffiliateOS automatiseert het hele proces met
              real-time data en AI.
            </p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "60x", label: "Sneller dan handmatig", accent: false },
                { value: "10x", label: "Meer datapunten", accent: false },
                { value: "€0", label: "Om te starten", accent: true }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`text-4xl font-bold mb-1 ${stat.accent ? 'text-accent' : 'text-foreground'}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Comparison table */}
          <motion.div 
            className="card-premium p-0 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={slideInRight}
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-5 font-medium text-muted-foreground text-sm">
                Feature
              </div>
              <div className="p-5 font-medium text-foreground text-sm text-center border-x border-border">
                LocalAffiliateOS
              </div>
              <div className="p-5 font-medium text-muted-foreground text-sm text-center">
                Handmatig
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 border-t border-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "hsl(var(--secondary) / 0.3)" }}
              >
                <div className="p-5 text-sm text-foreground">
                  {row.feature}
                </div>
                <div className="p-5 text-sm text-center border-x border-border bg-accent/5">
                  {typeof row.us === "boolean" ? (
                    row.us ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.1 }}
                      >
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      </motion.div>
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )
                  ) : (
                    <span className="font-semibold text-accent">{row.us}</span>
                  )}
                </div>
                <div className="p-5 text-sm text-center text-muted-foreground">
                  {typeof row.them === "boolean" ? (
                    row.them ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )
                  ) : (
                    <span>{row.them}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
