import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Werkwijze", href: "#how-it-works" },
    { label: "Prijzen", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@stadscanslim.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">SS</span>
            </div>
            <span className="font-display font-bold text-foreground">
              Stad‑Scan Slim
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stad‑Scan Slim. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;