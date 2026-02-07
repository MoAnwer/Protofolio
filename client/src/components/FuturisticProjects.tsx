import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Zap } from "lucide-react";

export default function FuturisticProjects() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                {t("projects.title")}
              </h2>
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg text-foreground/60">{t("projects.description")}</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                style={{
                  animation: `float-up 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Card Background Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                {/* Card */}
                <div className="relative bg-card rounded-lg border border-primary/20 overflow-hidden hover-lift group">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {isArabic ? project.titleAr : project.titleEn}
                        </h3>
                        <p className="text-foreground/60 text-sm line-clamp-2">
                          {isArabic ? project.descriptionAr : project.descriptionEn}
                        </p>
                      </div>
                      <div className="ml-4 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Technologies with Gradient Tags */}
                    <div className="mb-6">
                      <p className="text-xs font-medium text-foreground/50 mb-3 uppercase tracking-wider">
                        {t("projects.technologies")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 mb-6" />

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2 border-primary/30 hover:border-primary hover:bg-primary/5 group/btn"
                        >
                          <Github className="w-4 h-4 group-hover/btn:text-primary transition-colors" />
                          <span className="group-hover/btn:text-primary transition-colors">
                            {t("projects.viewCode")}
                          </span>
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
                            className="border-primary/30 hover:border-primary hover:bg-primary/5"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
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
