import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { skills } from "@/lib/portfolioData";
import { Zap } from "lucide-react";

export default function FuturisticSkills() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("skills.title")}
            </h2>
            <p className="text-lg text-foreground/60">{t("skills.description")}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `float-up 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Glow Background */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                {/* Card */}
                <div className="relative bg-card rounded-lg p-8 border border-primary/20 hover-lift group/card">
                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover/card:bg-primary/20 transition-colors">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground group-hover/card:text-primary transition-colors">
                      {isArabic ? skillGroup.categoryAr : skillGroup.categoryEn}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/tag relative"
                        style={{
                          animation: `float-up 0.6s ease-out ${skillIndex * 0.05}s both`,
                        }}
                      >
                        {/* Tag Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 blur" />

                        {/* Tag */}
                        <span className="relative block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/5 to-primary/10 text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default hover:scale-105 transform">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
