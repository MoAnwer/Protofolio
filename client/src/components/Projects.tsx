import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-foreground/60">
              {t("projects.description")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {isArabic ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {isArabic ? project.descriptionAr : project.descriptionEn}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 py-4 border-b border-border">
                  <p className="text-sm font-medium text-foreground/70 mb-3">
                    {t("projects.technologies")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      {t("projects.viewCode")}
                    </Button>
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
