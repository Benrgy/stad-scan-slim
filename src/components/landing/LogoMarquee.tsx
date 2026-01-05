import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const LogoMarquee = () => {
  const logos = [
    "TechFlow",
    "DataPulse",
    "CloudNine",
    "MetricLab",
    "GrowthOS",
    "ScaleUp",
    "LaunchPad",
    "VelocityAI",
  ];

  return (
    <motion.section 
      className="py-16 border-y border-border overflow-hidden bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
    >
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set */}
          {logos.map((logo, i) => (
            <motion.div
              key={`first-${i}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                <motion.div 
                  className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-sm font-bold">{logo.charAt(0)}</span>
                </motion.div>
                <span className="text-lg font-semibold tracking-tight">
                  {logo}
                </span>
              </div>
            </motion.div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <motion.div
              key={`second-${i}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                <motion.div 
                  className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-sm font-bold">{logo.charAt(0)}</span>
                </motion.div>
                <span className="text-lg font-semibold tracking-tight">
                  {logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LogoMarquee;
