import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, education, languages } from "@/lib/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const highlights = isArabic
    ? [
        "4 أنظمة إنتاجية مسلمة",
        "3+ سنوات من تطوير الويب",
        "خبير في Laravel و PHP",
        "متخصص في تحسين قواعد البيانات",
      ]
    : [
        "4 production systems delivered",
        "3+ years of web development",
        "Expert in Laravel & PHP",
        "Database optimization specialist",
      ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("about.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Description */}
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                {isArabic ? personalInfo.summaryAr : personalInfo.summaryEn}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Education & Languages */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {t("education.title")}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      {t("education.degree")}
                    </p>
                    <p className="text-foreground font-medium">
                      {isArabic ? education.degreeAr : education.degreeEn}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      {t("education.university")}
                    </p>
                    <p className="text-foreground font-medium">
                      {isArabic
                        ? education.universityAr
                        : education.universityEn}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      {t("education.status")}
                    </p>
                    <p className="text-foreground font-medium">
                      {education.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Languages
                </h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">
                        {isArabic ? lang.nameAr : lang.nameEn}
                      </span>
                      <span className="text-sm text-foreground/60 bg-muted px-3 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
