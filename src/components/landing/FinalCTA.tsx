import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/10" />
      <motion.div 
        className="gradient-blob w-[800px] h-[800px] -bottom-1/2 left-1/2 -translate-x-1/2 opacity-30"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-section relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Start vandaag nog
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-display-sm md:text-display text-foreground mb-6 overflow-visible"
            variants={staggerItem}
          >
            Klaar om slimmer te adverteren?
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            variants={staggerItem}
          >
            Stop met gissen welke steden werken. Laat data je leiden naar hogere
            conversies en betere ROI.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={staggerItem}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="dark" size="xl" className="group" onClick={() => navigate("/auth")}>
                Start je eerste scan gratis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="xl" onClick={() => scrollToSection("#how-it-works")}>
                Bekijk demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            variants={staggerItem}
          >
            {[
              "Gratis te starten",
              "Geen creditcard nodig",
              "Resultaten in 2 minuten"
            ].map((text, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
