import { Check, X } from "lucide-react";

const Benefits = () => {
  const comparison = [
    {
      feature: "Tijd per analyse",
      us: "2 minuten",
      them: "3-5 uur",
    },
    {
      feature: "Steden geanalyseerd",
      us: "312 steden",
      them: "10-20 steden",
    },
    {
      feature: "Datapunten per stad",
      us: "50+ metrics",
      them: "3-5 metrics",
    },
    {
      feature: "Self-learning AI",
      us: true,
      them: false,
    },
    {
      feature: "Actuele data",
      us: true,
      them: false,
    },
    {
      feature: "Kosten",
      us: "Vanaf €0",
      them: "€500+ per analyse",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Vergelijk
            </div>
            <h2 className="text-display-sm text-foreground mb-6">
              Stop met handmatig onderzoek
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Traditioneel marktonderzoek kost uren en levert vaak verouderde
              data op. LocalAffiliateOS automatiseert het hele proces met
              real-time data en AI.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  60x
                </div>
                <div className="text-sm text-muted-foreground">
                  Sneller dan handmatig
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  10x
                </div>
                <div className="text-sm text-muted-foreground">
                  Meer datapunten
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">
                  €0
                </div>
                <div className="text-sm text-muted-foreground">
                  Om te starten
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Comparison table */}
          <div className="card-premium p-0 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-5 font-medium text-muted-foreground text-sm">
                Feature
              </div>
              <div className="p-5 font-medium text-foreground text-sm text-center border-x border-border">
                LocalAffiliateOS
              </div>
              <div className="p-5 font-medium text-muted-foreground text-sm text-center">
                Handmatig
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-t border-border"
              >
                <div className="p-5 text-sm text-foreground">
                  {row.feature}
                </div>
                <div className="p-5 text-sm text-center border-x border-border bg-accent/5">
                  {typeof row.us === "boolean" ? (
                    row.us ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )
                  ) : (
                    <span className="font-semibold text-accent">{row.us}</span>
                  )}
                </div>
                <div className="p-5 text-sm text-center text-muted-foreground">
                  {typeof row.them === "boolean" ? (
                    row.them ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )
                  ) : (
                    <span>{row.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;