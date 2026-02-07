import { useTranslation } from "@/hooks/useTranslation";
import { personalInfo } from "@/lib/portfolioData";
import { Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">
                    MA
                  </span>
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  Mohamed Anwer
                </span>
              </div>
              <p className="text-foreground/60 text-sm">
                Backend Engineer & Full-Stack Developer
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">
                {t("nav.about")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("about.title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("skills.title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("experience.title")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("projects.title")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">
                {t("contact.title")}
              </h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.emailEn}`}
                  className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <p>
              {t("footer.copyright").replace("2025", currentYear.toString())}
            </p>
            <p>
              {t("footer.madeWith")} ❤️ {t("contact.title")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
