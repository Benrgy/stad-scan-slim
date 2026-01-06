import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Werkwijze", href: "#how-it-works" },
    { label: "Prijzen", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container-section">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "glass rounded-full px-6 py-3"
              : "bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">SS</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:block">
              Stad‑Scan Slim
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-secondary/80 rounded-full px-2 py-1.5">
              {navLinks.map((link, index) => (
                <div key={link.label} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors px-4 py-1.5 rounded-full hover:bg-background"
                  >
                    {link.label}
                  </a>
                  {index < navLinks.length - 1 && (
                    <span className="text-border text-xs">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </a>
            <Button variant="dark" size="sm" className="group">
              Start gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 glass rounded-2xl p-6 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary font-medium py-3 px-4 rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-border">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 px-4"
                >
                  Login
                </a>
                <Button variant="dark" className="w-full group">
                  Start gratis
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;