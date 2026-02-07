import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, education, languages } from "@/lib/portfolioData";

export default function ModernAbout() {
  const { isArabic } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "عني" : "About Me"}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-in-left">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {isArabic ? personalInfo.summaryAr : personalInfo.summaryEn}
              </p>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-accent mb-4">
                  {isArabic ? "التعليم" : "Education"}
                </h3>
                <div className="p-4 bg-card border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
                  <p className="font-semibold text-foreground">
                    {isArabic ? education.degreeAr : education.degreeEn}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {isArabic ? education.universityAr : education.universityEn}
                  </p>
                  <p className="text-foreground/40 text-xs mt-2">{education.status}</p>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-bold text-accent mb-4">
                  {isArabic ? "اللغات" : "Languages"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/30"
                    >
                      {isArabic ? lang.nameAr : lang.nameEn}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="animate-fade-in-right">
              <div
                className="relative h-96 rounded-lg overflow-hidden border border-border/50 group"
                style={{
                  backgroundImage:
                    "url('https://private-us-east-1.manuscdn.com/sessionFile/Ny27t386s4xhsuqbTLuLB0/sandbox/YVrxUPjSiwN9sQyT0STxA5-img-2_1770445909000_na1fn_c2VjdGlvbi1hY2NlbnQtMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTnkyN3QzODZzNHhoc3VxYlRMdUxCMC9zYW5kYm94L1lWcnhVUGpTaXdOOXNReVQwU1R4QTUtaW1nLTJfMTc3MDQ0NTkwOTAwMF9uYTFmbl9jMlZqZEdsdmJpMWhZMk5sYm5RdE1RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZbnnlJGa5MwlAX2~pql7NG-EEOh2nzBn5Ap1o9ERyvlJKgGET1sZmAtDOPOhYJUk1pWIUlhfvdKoNRJTScOHE4NTeoQ7h1LA4jY9-rei2exupZmkLcIu0uV3GbZyT-vLZWyTcy6IwbGIv6zsK8gG-hNc4q9Suz27Zo9LBzTvjgxucmlqYb~7-V9hq-1rGAN-UDiR-wlFPhJ47dcrqMRpKDU5qwnW9wSZqUBVafEoThxPpJYWgTShrHFWitmWWh811bEXkXV5c9QmU525j1VsVks3hVhw5vipZymoBkfnZ0wqYDc9vUySnfBPJ6UOUBJUbXerMCwzXtdxGq6cn6OcAw__')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
