import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/lib/portfolioData";
import { Briefcase, Zap } from "lucide-react";

export default function FuturisticExperience() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                {t("experience.title")}
              </h2>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-20 md:pl-24"
                style={{
                  animation: `slide-in-left 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-0 md:left-2 top-2 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center pulse-ring">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className="group relative">
                  {/* Card Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                  {/* Card */}
                  <div className="relative bg-card rounded-lg p-6 border border-primary/20 hover-lift">
                    {/* Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-2">
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {isArabic ? exp.titleAr : exp.titleEn}
                        </h3>
                        <p className="text-foreground/60 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-foreground/50 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap group-hover:border-primary/50 transition-colors">
                        {exp.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 mb-4" />

                    {/* Responsibilities */}
                    <div>
                      <p className="text-sm font-medium text-foreground/70 mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        {t("experience.responsibilities")}
                      </p>
                      <ul className="space-y-2">
                        {(isArabic
                          ? exp.descriptionAr
                          : exp.descriptionEn
                        ).map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-foreground/70 flex items-start gap-3"
                            style={{
                              animation: `float-up 0.6s ease-out ${itemIndex * 0.1}s both`,
                            }}
                          >
                            <span className="text-primary mt-1.5 flex-shrink-0 font-bold">
                              ›
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
