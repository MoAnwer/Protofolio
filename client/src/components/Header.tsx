import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "nav.about", href: "#about" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.experience", href: "#experience" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">
                MA
              </span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:inline">
              Mohamed Anwer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "ar"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium text-left py-2"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
