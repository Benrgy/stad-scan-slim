import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability indicator */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">Beschikbaar voor NL & BE</span>
          </div>

          {/* Headline */}
          <h1 className="text-display text-foreground mb-8">
            Vind de{" "}
            <span className="text-highlight">winstgevendste steden</span>{" "}
            voor jouw product
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Datagedreven advies per stad in 2 minuten. Onze engine leert mee 
            met jouw campagnes, zodat elke launch slimmer wordt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="dark" size="xl">
              Start je eerste scan
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Bekijk hoe het werkt
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">500+ affiliates</div>
              <div className="text-sm text-muted-foreground">vertrouwen op ons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;