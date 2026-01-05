import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary-foreground text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start vandaag nog
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Klaar om te ontdekken waar jouw{" "}
            <span className="text-accent">winst</span> ligt?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Stop met gissen. Doe nu je eerste gratis scan en zie binnen 2 minuten 
            in welke steden jouw product de meeste kans van slagen heeft.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="xl"
              className="bg-primary-foreground text-navy hover:bg-primary-foreground/90"
            >
              Doe nu je eerste scan
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-primary-foreground/60">
            <span>✓ Gratis te starten</span>
            <span>✓ Geen creditcard nodig</span>
            <span>✓ Resultaat in 2 minuten</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
