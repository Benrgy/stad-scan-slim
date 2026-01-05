import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, TrendingUp, Zap, Users } from "lucide-react";

const Hero = () => {
  const badges = [
    { icon: Users, label: "Voor affiliates & agencies" },
    { icon: MapPin, label: "NL & BE" },
    { icon: Zap, label: "Datagedreven advies" },
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-full text-xs font-medium text-muted-foreground border border-border shadow-sm"
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Vind in 2 minuten de{" "}
              <span className="text-gradient">winstgevendste steden</span>{" "}
              voor jouw product
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Krijg eerlijk, datagedreven advies per stad in NL & BE – onze engine 
              leert mee met jouw campagnes, zodat elke volgende launch slimmer wordt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl">
                Doe nu je eerste scan
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Bekijk hoe het werkt
              </Button>
            </div>

            {/* Social proof teaser */}
            <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-foreground">500+</strong> affiliates en agencies
              </span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative lg:pl-8">
            <div className="relative bg-card rounded-2xl shadow-card border border-border p-6 animate-float">
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Top Steden Analyse</span>
                  <span className="text-xs text-muted-foreground">Live data</span>
                </div>
                
                {/* Chart bars */}
                <div className="space-y-3">
                  {[
                    { city: "Amsterdam", score: 94, trend: "+12%" },
                    { city: "Rotterdam", score: 87, trend: "+8%" },
                    { city: "Antwerpen", score: 82, trend: "+15%" },
                    { city: "Utrecht", score: 76, trend: "+5%" },
                    { city: "Gent", score: 71, trend: "+9%" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{item.city}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-success text-xs flex items-center gap-0.5">
                            <TrendingUp className="w-3 h-3" />
                            {item.trend}
                          </span>
                          <span className="text-muted-foreground">{item.score}%</span>
                        </div>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action hint */}
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-muted-foreground">
                      3 steden met hoog potentieel gevonden
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-glow text-sm font-medium">
                +23% conversie
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
