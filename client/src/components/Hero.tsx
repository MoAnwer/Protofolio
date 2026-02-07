import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/portfolioData";

export default function Hero() {
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
      {/* Background Image */}\n      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/Ny27t386s4xhsuqbTLuLB0/sandbox/cVZjZCvgO53bKBCI9q0p4X-img-1_1770445076000_na1fn_aGVyby1iZy1saWdodA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTnkyN3QzODZzNHhoc3VxYlRMdUxCMC9zYW5kYm94L2NWWmpaQ3ZnTzUzYktCQ0k5cTBwNFgtaW1nLTFfMTc3MDQ0NTA3NjAwMF9uYTFmbl9hR1Z5YnkxaVp5MXNhV2RvZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XxfjashlyyKPGMEzPahgI5colYFFJxXo0GdQo1Okg~qf5ZadmwXVprII4YPXZXZEcqN6GEc-mF83VGeYgJPA5hM847gu9LFouJNppKNBIN893bVWodTUO~UXltZCzTShcpG-fC4nHiRd6ORXoF-NSAbUWHSJTYL~SwZuDLHBUqDv4Bp0Xh9DLOsIDy7LSgGWbf0t5-7A7FkhcNzlHvfMcyGaSvM8iWgZuADALKK9t45Bl32SSXnXkyRvSD0REOHm1HVQqrgEhSnMDyivWREbw0FiWwWud5p8p0gS2nnF~Kqibr83hPfrGsMcGOINZ8RBySeifxubkkUdxsmnKIIZlQ__')",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 inline-block">
            <span className="text-primary font-medium text-lg">
              {t("hero.greeting")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
            {isArabic ? personalInfo.nameAr : personalInfo.nameEn}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-display font-semibold text-primary mb-6">
            {isArabic ? personalInfo.titleAr : personalInfo.titleEn}
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            {isArabic ? personalInfo.summaryAr : personalInfo.summaryEn}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleScroll}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6"
            >
              {t("hero.cta")}
            </Button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-base px-8 py-6 w-full sm:w-auto"
              >
                GitHub
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
