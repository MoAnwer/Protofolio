import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: personalInfo.emailEn,
      type: "email",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: personalInfo.phone,
      type: "phone",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: personalInfo.location,
      type: "location",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-foreground/60">
              {t("contact.message")}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground/60 mb-1">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium break-all">
                        {item.value}
                      </p>
                      {item.type !== "location" && (
                        <button
                          onClick={() => handleCopy(item.value, item.type)}
                          className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                        >
                          {copied === item.type ? (
                            <>
                              <Check className="w-3 h-3" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copy
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* GitHub Card */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    {t("contact.github")}
                  </p>
                  <p className="text-foreground font-medium mb-3">
                    MoAnwer
                  </p>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Visit Profile
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              {isArabic ? "هل تريد التعاون؟" : "Interested in working together?"}
            </h3>
            <p className="text-foreground/70 mb-6">
              {isArabic
                ? "لا تتردد في التواصل معي عبر البريد الإلكتروني أو أي من قنوات التواصل الأخرى"
                : "Feel free to reach out via email or any of the contact methods above"}
            </p>
            <a href={`mailto:${personalInfo.emailEn}`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {isArabic ? "أرسل بريد إلكتروني" : "Send Email"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
