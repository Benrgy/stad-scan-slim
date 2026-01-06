import { Target, Zap, FileText, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Minder weggegooid budget",
      description: "Stop met campagnes in steden waar bijna niemand klaar is voor jouw aanbod. Richt je budget op regio's met echte vraag.",
    },
    {
      icon: Zap,
      title: "Snellere validatie van nieuwe producten",
      description: "Test niet lukraak: zie vooraf in welke steden jouw nieuwe product het meeste potentieel heeft.",
    },
    {
      icon: FileText,
      title: "Meer focus in je content & SEO",
      description: "Kies eerst de beste steden en bouw daarna pas je affiliate‑sites, contentclusters en funnels.",
    },
    {
      icon: TrendingUp,
      title: "Sterke rapporten voor klanten",
      description: "Agencies krijgen direct onderbouwing per stad: ideaal voor proposals, strategie‑decks en performance‑reviews.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
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
            Waarom slimme affiliates
            <br className="hidden md:block" />
            voor Stad‑Scan Slim kiezen
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-premium p-6 group cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <benefit.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
