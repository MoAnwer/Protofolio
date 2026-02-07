import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/lib/portfolioData";
import { ArrowRight, Github } from "lucide-react";

export default function ModernHero() {
  const { isArabic } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/Ny27t386s4xhsuqbTLuLB0/sandbox/YVrxUPjSiwN9sQyT0STxA5-img-1_1770445909000_na1fn_aGVyby1taW5pbWFsLWRhcms.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTnkyN3QzODZzNHhoc3VxYlRMdUxCMC9zYW5kYm94L1lWcnhVUGpTaXdOOXNReVQwU1R4QTUtaW1nLTFfMTc3MDQ0NTkwOTAwMF9uYTFmbl9hR1Z5YnkxdGFXNXBiV0ZzTFdSaGNtcy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G~nxj66oYklMTfpgngbw2wBT~5-Mf-tBJN0GgSLpLxvsYhLl5eiFq13j1KCUT2D6O6~FexJ8uY3omQr8TpkizmMRODOEvSKd58ezXbDmgBoIOmLiOHQVNu~3V0-J~Hw2hD5ymiccEEgD2QAYYVEUt1MNGBLys8ihZXz7aqJbtn~PbEP67q~Tq-66yaE7689l2fTzUzRBb2kGy4hnoz~bjQROBRxVJVYpzOvlBSy1IM3SIqlj0vUr0cUaN0kuct1KN5o22dlCLcFuukVVHEOPGuOY5Mv2IuN~SeAl~X4Es69h5NstnY12~A9eY6~RP0R70cax2yviY9bOjcchzEtnaw__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Subtitle */}
          <p className="text-accent font-semibold mb-4 text-sm uppercase tracking-widest">
            {isArabic ? "أهلاً وسهلاً" : "Welcome"}
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">
              {isArabic ? "مرحباً، أنا " : "Hi, I'm "}
            </span>
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              {isArabic ? personalInfo.nameAr : personalInfo.nameEn}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            {isArabic ? personalInfo.titleAr : personalInfo.titleEn}
          </p>

          {/* Description */}
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {isArabic ? personalInfo.summaryAr : personalInfo.summaryEn}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Primary Button */}
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent text-background rounded-lg font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              {isArabic ? "شاهد أعمالي" : "View My Work"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-card border border-border rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-accent/50 hover:bg-card/80 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-3xl font-bold text-accent">2+</p>
              <p className="text-foreground/60 text-sm mt-2">
                {isArabic ? "سنوات خبرة" : "Years Experience"}
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-3xl font-bold text-accent">4+</p>
              <p className="text-foreground/60 text-sm mt-2">
                {isArabic ? "مشاريع مكتملة" : "Projects Done"}
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-foreground/60 text-sm mt-2">
                {isArabic ? "التفاني" : "Dedication"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
