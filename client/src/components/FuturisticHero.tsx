import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";
import { personalInfo } from "@/lib/portfolioData";

export default function FuturisticHero() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  const handleScroll = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Main Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/Ny27t386s4xhsuqbTLuLB0/sandbox/cVZjZCvgO53bKBCI9q0p4X-img-1_1770445076000_na1fn_aGVyby1iZy1saWdodA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTnkyN3QzODZzNHhoc3VxYlRMdUxCMC9zYW5kYm94L2NWWmpaQ3ZnTzUzYktCQ0k5cTBwNFgtaW1nLTFfMTc3MDQ0NTA3NjAwMF9uYTFmbl9hR1Z5YnkxaVp5MXNhV2RvZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XxfjashlyyKPGMEzPahgI5colYFFJxXo0GdQo1Okg~qf5ZadmwXVprII4YPXZXZEcqN6GEc-mF83VGeYgJPA5hM847gu9LFouJNppKNBIN893bVWodTUO~UXltZCzTShcpG-fC4nHiRd6ORXoF-NSAbUWHSJTYL~SwZuDLHBUqDv4Bp0Xh9DLOsIDy7LSgGWbf0t5-7A7FkhcNzlHvfMcyGaSvM8iWgZuADALKK9t45Bl32SSXnXkyRvSD0REOHm1HVQqrgEhSnMDyivWREbw0FiWwWud5p8p0gS2nnF~Kqibr83hPfrGsMcGOINZ8RBySeifxubkkUdxsmnKIIZlQ__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with Icon */}
          <div className="mb-8 inline-block">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 backdrop-blur-sm neon-border">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-medium text-sm">
                {isArabic ? "مهندس Backend متقدم" : "Advanced Backend Engineer"}
              </span>
            </div>
          </div>

          {/* Main Title with Gradient */}
          <div className="mb-6 slide-up">
            <div className="text-6xl md:text-8xl font-display font-bold mb-4 relative">
              <span className="block text-foreground">
                {isArabic ? personalInfo.nameAr : personalInfo.nameEn}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 blur-2xl -z-10" />
            </div>
          </div>

          {/* Subtitle with Neon Effect */}
          <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 neon-glow">
            {isArabic ? personalInfo.titleAr : personalInfo.titleEn}
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm">
            {isArabic ? personalInfo.summaryAr : personalInfo.summaryEn}
          </p>

          {/* CTA Buttons with Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleScroll}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                {t("hero.cta")}
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-base px-8 py-4 w-full sm:w-auto border-primary/50 hover:border-primary hover:bg-primary/5 hover-lift neon-border"
              >
                GitHub
              </Button>
            </a>
          </div>

          {/* Scroll Indicator with Animation */}
          <div className="flex justify-center animate-bounce">
            <div className="relative">
              <ArrowDown className="w-6 h-6 text-primary" />
              <ArrowDown className="w-6 h-6 text-primary absolute top-2 opacity-0 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}
