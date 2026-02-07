import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { skills } from "@/lib/portfolioData";

export default function Skills() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("skills.title")}
            </h2>
            <p className="text-lg text-foreground/60">
              {t("skills.description")}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  {isArabic ? skillGroup.categoryAr : skillGroup.categoryEn}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
