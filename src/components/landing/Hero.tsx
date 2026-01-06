import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <motion.div 
        className="gradient-blob w-[600px] h-[600px] -top-40 -right-40 opacity-20"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="gradient-blob w-[400px] h-[400px] top-1/2 -left-40 opacity-15"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-section relative">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Headline */}
          <motion.h1 
            className="text-display text-foreground text-center mb-8 overflow-visible"
            variants={staggerItem}
          >
            Vind in 2 minuten de{" "}
            <span className="text-highlight inline-block">winstgevendste steden</span>
            <br />
            voor jouw product
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={staggerItem}
          >
            Stad‑Scan Slim analyseert jouw product en koppelt het aan data per stad in NL & BE. Je krijgt eerlijk, datagedreven advies waar je campagnes het meeste kans maken – zonder gokwerk of guru‑praat.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={staggerItem}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="dark" size="xl" className="group">
                Doe nu je eerste scan
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="xl">
                Bekijk hoe het werkt
              </Button>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={staggerItem}
          >
            {[
              "Voor affiliates & agencies",
              "Nederland & België",
              "Datagedreven, self‑learning engine"
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full px-4 py-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm font-medium text-foreground">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
            variants={staggerItem}
          >
            {/* Avatar stack */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "bg-gradient-to-br from-accent to-accent/60",
                  "bg-gradient-to-br from-foreground to-foreground/60",
                  "bg-gradient-to-br from-muted-foreground to-muted-foreground/60",
                  "bg-gradient-to-br from-accent to-accent/60",
                  "bg-gradient-to-br from-foreground to-foreground/60",
                ].map((bg, i) => (
                  <motion.div
                    key={i}
                    className={`w-10 h-10 rounded-full ${bg} border-2 border-background flex items-center justify-center text-xs font-bold text-background`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -3, zIndex: 10 }}
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9/5</span>{" "}
                  van 500+ affiliates
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-px h-12 bg-border" />

            {/* Quick stats */}
            <div className="flex items-center gap-6 text-center sm:text-left">
              {[
                { value: "50K+", label: "Scans" },
                { value: "2 min", label: "Per scan" },
                { value: "98%", label: "Tevreden" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="flex justify-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#features"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              whileHover={{ y: 3 }}
            >
              <span className="text-xs font-medium uppercase tracking-wider">
                Scroll om te ontdekken
              </span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-2 bg-current rounded-full"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
