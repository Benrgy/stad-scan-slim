import { Zap, Shield, Brain, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

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
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
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
              className="group card-premium cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full">
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
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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

        {/* Big feature highlight */}
        <motion.div 
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div 
            className="card-dark p-10 lg:p-12"
            variants={staggerItem}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="max-w-md">
              <motion.div 
                className="text-accent text-sm font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                ✨ Premium Feature
              </motion.div>
              <h3 className="font-display text-3xl font-bold mb-4">
                Self-learning algoritme
              </h3>
              <p className="text-background/70 mb-6">
                Onze AI leert van elke campagne die je draait. Hoe meer data, hoe
                slimmer de voorspellingen. Na 10 campagnes is de accuraatheid
                gemiddeld 40% hoger.
              </p>
              <div className="flex items-center gap-4">
                <motion.div 
                  className="text-3xl font-bold text-accent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  40%
                </motion.div>
                <div className="text-sm text-background/60">
                  hogere accuraatheid
                  <br />
                  na 10 campagnes
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-2xl p-10 lg:p-12"
            variants={staggerItem}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="max-w-md">
              <motion.div 
                className="text-accent text-sm font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                🎯 Precisie
              </motion.div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Stadscore™ technologie
              </h3>
              <p className="text-muted-foreground mb-6">
                Elke stad krijgt een score gebaseerd op 50+ datapunten:
                concurrentie, zoekvolume, koopkracht, en meer. Simpel te
                begrijpen, krachtig in resultaat.
              </p>
              <div className="flex items-center gap-6">
                {[
                  { value: "50+", label: "Datapunten" },
                  { value: "312", label: "Steden NL/BE" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
