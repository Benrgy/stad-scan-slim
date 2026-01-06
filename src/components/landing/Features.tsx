import { Zap, Shield, Brain, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Product → Topsteden in 2 minuten",
      subtitle: "Snelheid",
      description: "Voer je productnaam of salespagina‑URL in en krijg direct een gerankte lijst met steden waar jouw aanbod de meeste kans maakt.",
    },
    {
      icon: Shield,
      title: "Eerlijk, datagedreven advies",
      subtitle: "Transparantie",
      description: "We combineren stadsprofielen, koopkracht en zoekintentie. Geen vage meningen, maar onderbouwde scores en heldere uitleg per stad.",
    },
    {
      icon: Brain,
      title: "Self‑learning engine",
      subtitle: "Intelligentie",
      description: "Jij vult resultaten in (kliks, leads, sales) en Stad‑Scan Slim leert mee. Elke nieuwe scan wordt slimmer en beter afgestemd op jouw type product.",
    },
    {
      icon: Globe,
      title: "Werkt met elke niche en elk netwerk",
      subtitle: "Flexibiliteit",
      description: "Van PayPro tot internationale netwerken: de tool kijkt naar jouw productprofiel, niet naar één specifiek programma. Perfect voor affiliates, media buyers en agencies.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-section">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-display-sm text-foreground mb-4 overflow-visible">
            Wat Stad‑Scan Slim
            <br className="hidden md:block" />
            voor je doet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eén plek waar product‑analyse, stadsdata en zoekintentie samenkomen.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group card-premium cursor-pointer overflow-visible"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full overflow-visible">
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-medium text-accent mb-1">
                    {feature.subtitle}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
