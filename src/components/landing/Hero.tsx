import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="gradient-blob w-[600px] h-[600px] -top-40 -right-40 opacity-20" />
      <div className="gradient-blob w-[400px] h-[400px] top-1/2 -left-40 opacity-15" />

      <div className="container-section relative">
        <div className="max-w-5xl mx-auto">
          {/* Availability badge */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 bg-secondary/80 backdrop-blur-sm border border-border rounded-full px-5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Beschikbaar voor NL & BE
              </span>
            </div>
          </div>

          {/* Headline with icons */}
          <h1 className="text-display text-foreground text-center mb-8 animate-fade-up delay-100">
            <span className="inline-flex items-center gap-3">
              Vind de
              <Target className="w-12 h-12 md:w-16 md:h-16 text-accent inline-block" />
            </span>
            <br />
            <span className="text-highlight">winstgevendste steden</span>
            <br />
            <span className="inline-flex items-center gap-3">
              voor jouw product
              <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-accent inline-block" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
            Datagedreven advies per stad in 2 minuten. Onze engine leert mee met
            jouw campagnes, zodat elke launch slimmer wordt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-300">
            <Button variant="dark" size="xl" className="group">
              Start je eerste scan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Bekijk demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-up delay-400">
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
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${bg} border-2 border-background flex items-center justify-center text-xs font-bold text-background`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
              <div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-xs text-muted-foreground">Scans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2 min</div>
                <div className="text-xs text-muted-foreground">Per scan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground">Tevreden</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-20 animate-fade-up delay-500">
            <a
              href="#features"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-xs font-medium uppercase tracking-wider">
                Scroll om te ontdekken
              </span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;