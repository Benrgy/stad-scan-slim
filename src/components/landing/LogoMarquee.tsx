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
    <section className="py-16 border-y border-border overflow-hidden bg-secondary/30">
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set */}
          {logos.map((logo, i) => (
            <div
              key={`first-${i}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <span className="text-sm font-bold">{logo.charAt(0)}</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  {logo}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <div
              key={`second-${i}`}
              className="flex items-center justify-center min-w-[200px] px-8 group"
            >
              <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <span className="text-sm font-bold">{logo.charAt(0)}</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;