import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, BarChart3, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      tag: "Input",
      icon: Link2,
      title: "Product invoeren",
      description:
        "Vul de naam, URL en korte beschrijving van je product in. De engine herkent automatisch de niche, het ticket‑niveau en de doelgroep.",
    },
    {
      number: "02",
      tag: "Analyse",
      icon: BarChart3,
      title: "Data combineren",
      description:
        "We koppelen jouw productprofiel aan stadsdata (inwoners, inkomen, demografie) en zoekintentie‑signalen per stad in NL & BE.",
    },
    {
      number: "03",
      tag: "Resultaat",
      icon: TrendingUp,
      title: "Slimme stadenscore + advies",
      description:
        "Je krijgt een shortlist met beste steden, inclusief score, duidelijke uitleg en concrete adviezen waar je begint en waar je beter níet in investeert.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30">
      <div className="container-section">
        {/* Section header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-display-sm text-foreground max-w-xl mb-4">
              Zo werkt Stad‑Scan Slim
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Van product‑idee naar datagedreven stadenskeuze in drie simpele stappen.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="dark" size="lg" className="group self-start lg:self-auto">
              Start nu gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={staggerItem}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  style={{ originX: 0 }}
                />
              )}

              <motion.div 
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Large number background */}
                <motion.div 
                  className="step-number absolute -top-4 -left-2 select-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  {step.number}
                </motion.div>

                {/* Content card */}
                <div className="relative pt-16">
                  {/* Tag */}
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <step.icon className="w-3 h-3" />
                    {step.tag}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual mockup placeholder */}
        <motion.div 
          className="mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-grid opacity-5" />
            
            <div className="relative">
              <div className="text-background/60 text-sm font-medium mb-2">
                Voorbeeld output
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-8">
                Top 5 steden voor jouw product
              </h3>

              {/* Mock results */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  { city: "Amsterdam", score: 94 },
                  { city: "Rotterdam", score: 87 },
                  { city: "Utrecht", score: 82 },
                  { city: "Antwerpen", score: 79 },
                  { city: "Den Haag", score: 76 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-background/10 backdrop-blur-sm rounded-xl p-4"
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-xs text-background/60 mb-1">#{i + 1}</div>
                    <div className="font-semibold text-background mb-2">
                      {item.city}
                    </div>
                    <motion.div 
                      className="inline-flex items-center gap-1 bg-accent/20 text-accent rounded-full px-2 py-0.5 text-sm font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      {item.score}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
