import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolioData";
import { Github, ExternalLink, X } from "lucide-react";
import { useState, useMemo } from "react";

export default function FilterableProjects() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // Get all unique technologies
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      selectedTechs.some((tech) => project.technologies.includes(tech))
    );
  }, [selectedTechs]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-foreground/60">{t("projects.description")}</p>
          </div>

          {/* Filter Section */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border/50 rounded-lg p-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {isArabic ? "تصفية حسب التقنية:" : "Filter by Technology:"}
                </h3>
                {selectedTechs.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    {isArabic ? "مسح الفلاتر" : "Clear Filters"}
                  </button>
                )}
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {allTechs.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTechs.includes(tech)
                        ? "bg-accent text-background border border-accent shadow-lg shadow-accent/30"
                        : "bg-secondary/50 text-foreground/70 border border-border/50 hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              {selectedTechs.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground/60">
                    {isArabic
                      ? `عرض ${filteredProjects.length} من ${projects.length} مشروع`
                      : `Showing ${filteredProjects.length} of ${projects.length} projects`}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative animate-fade-in-up"
                  style={{
                    animationDelay: `${(index + 1) * 0.1}s`,
                  }}
                >
                  {/* Card Background Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                  {/* Card */}
                  <div className="relative bg-card rounded-lg border border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-300">
                    {/* Animated Border Top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                          {isArabic ? project.titleAr : project.titleEn}
                        </h3>
                        <p className="text-foreground/60 text-sm line-clamp-2">
                          {isArabic ? project.descriptionAr : project.descriptionEn}
                        </p>
                      </div>

                      {/* Technologies with Highlighting */}
                      <div className="mb-6">
                        <p className="text-xs font-medium text-foreground/50 mb-3 uppercase tracking-wider">
                          {t("projects.technologies")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                                selectedTechs.includes(tech)
                                  ? "bg-accent text-background border border-accent"
                                  : "bg-secondary/50 text-foreground/70 border border-border/50"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 mb-6" />

                      {/* Actions */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <button className="w-full px-4 py-2 bg-secondary/50 text-foreground border border-border/50 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300 group/btn">
                            <Github className="w-4 h-4 group-hover/btn:text-accent transition-colors" />
                            <span className="group-hover/btn:text-accent transition-colors">
                              {t("projects.viewCode")}
                            </span>
                          </button>
                        </a>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="px-4 py-2 bg-secondary/50 text-foreground border border-border/50 rounded-lg hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Scan Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/60 text-lg">
                  {isArabic
                    ? "لا توجد مشاريع تطابق الفلتر المحدد"
                    : "No projects match the selected filter"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
