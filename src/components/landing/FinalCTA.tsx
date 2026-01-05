import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-section">
        <div className="bg-foreground rounded-3xl p-12 md:p-20 text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background mb-6">
            Klaar om te ontdekken waar jouw winst ligt?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
            Stop met gissen. Doe nu je eerste gratis scan en zie binnen 2 minuten 
            in welke steden jouw product de meeste kans heeft.
          </p>

          {/* CTA */}
          <Button
            variant="secondary"
            size="xl"
          >
            Start je eerste scan
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-background/50">
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