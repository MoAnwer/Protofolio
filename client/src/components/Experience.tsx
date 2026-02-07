import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/lib/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("experience.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />

                {/* Content */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-2">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {isArabic ? exp.titleAr : exp.titleEn}
                        </h3>
                        <p className="text-foreground/60 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-foreground/50 bg-muted px-3 py-1 rounded whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <p className="text-sm font-medium text-foreground/70 mb-3">
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
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
