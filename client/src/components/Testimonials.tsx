import { useLanguage } from "@/contexts/LanguageContext";
import { testimonials } from "@/lib/portfolioData";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const { isArabic } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isArabic ? "التوصيات والشهادات" : "Testimonials & Recommendations"}
            </h2>
            <p className="text-foreground/60">
              {isArabic
                ? "ما يقوله زملائي ومديري عني"
                : "What my colleagues and managers say about me"}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mx-auto mt-4" />
          </div>

          {/* Testimonial Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border/50 rounded-lg p-8 md:p-12 relative group hover:border-accent/50 transition-all duration-300">
              {/* Animated Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 bg-accent/20 p-4 rounded-lg group-hover:bg-accent/30 transition-colors">
                <Quote className="w-8 h-8 text-accent" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  )
                )}
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
                "{isArabic ? currentTestimonial.contentAr : currentTestimonial.contentEn}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                {/* Avatar */}
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-background font-bold text-lg">
                    {(isArabic
                      ? currentTestimonial.nameAr
                      : currentTestimonial.nameEn
                    ).charAt(0)}
                  </span>
                </div>

                {/* Author Details */}
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {isArabic
                      ? currentTestimonial.nameAr
                      : currentTestimonial.nameEn}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {isArabic
                      ? currentTestimonial.positionAr
                      : currentTestimonial.positionEn}{" "}
                    • {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-foreground/60 group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-border hover:bg-border/80"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-foreground/60 group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-foreground/60 text-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {activeIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
