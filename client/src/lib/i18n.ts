// Internationalization (i18n) configuration for Arabic and English

export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      title: "Backend Engineer",
      subtitle:
        "Crafting robust, scalable solutions with 3 years of proven expertise",
      cta: "View My Work",
    },
    // About Section
    about: {
      title: "About Me",
      description:
        "I'm a Software Engineering student with 3 years of practical experience in web development. I specialize in backend engineering using Laravel, PHP, and MySQL, with a proven track record of delivering complex production systems under challenging constraints.",
      highlights: [
        "4 production systems delivered",
        "3+ years of web development",
        "Expert in Laravel & PHP",
        "Database optimization specialist",
      ],
    },
    // Skills Section
    skills: {
      title: "Skills & Expertise",
      description: "Technologies and tools I work with",
    },
    // Experience Section
    experience: {
      title: "Professional Experience",
      period: "Period",
      responsibilities: "Key Responsibilities",
    },
    // Projects Section
    projects: {
      title: "Featured Projects",
      description: "A selection of my recent work",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies",
    },
    // Education Section
    education: {
      title: "Education",
      degree: "Degree",
      university: "University",
      status: "Status",
    },
    // Contact Section
    contact: {
      title: "Get In Touch",
      email: "Email",
      phone: "Phone",
      location: "Location",
      github: "GitHub",
      message: "Feel free to reach out to me for any inquiries or opportunities",
    },
    // Footer
    footer: {
      copyright: "© 2025 Mohamed Anwer. All rights reserved.",
      madeWith: "Made with passion",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error loading content",
      backToTop: "Back to Top",
    },
  },
  ar: {
    // Navigation
    nav: {
      about: "عني",
      skills: "المهارات",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    // Hero Section
    hero: {
      greeting: "مرحباً، أنا",
      title: "مهندس Backend",
      subtitle:
        "بناء حلول قوية وقابلة للتوسع مع 3 سنوات من الخبرة المثبتة",
      cta: "عرض أعمالي",
    },
    // About Section
    about: {
      title: "عني",
      description:
        "أنا طالب هندسة برمجيات مع 3 سنوات من الخبرة العملية في تطوير الويب. أتخصص في هندسة Backend باستخدام Laravel و PHP و MySQL، مع سجل حافل بتسليم الأنظمة الإنتاجية المعقدة.",
      highlights: [
        "4 أنظمة إنتاجية مسلمة",
        "3+ سنوات من تطوير الويب",
        "خبير في Laravel و PHP",
        "متخصص في تحسين قواعد البيانات",
      ],
    },
    // Skills Section
    skills: {
      title: "المهارات والخبرات",
      description: "التقنيات والأدوات التي أعمل معها",
    },
    // Experience Section
    experience: {
      title: "الخبرة المهنية",
      period: "الفترة",
      responsibilities: "المسؤوليات الرئيسية",
    },
    // Projects Section
    projects: {
      title: "المشاريع المميزة",
      description: "مختار من أعمالي الحديثة",
      viewProject: "عرض المشروع",
      viewCode: "عرض الكود",
      technologies: "التقنيات",
    },
    // Education Section
    education: {
      title: "التعليم",
      degree: "الدرجة العلمية",
      university: "الجامعة",
      status: "الحالة",
    },
    // Contact Section
    contact: {
      title: "تواصل معي",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      github: "GitHub",
      message:
        "لا تتردد في التواصل معي لأي استفسارات أو فرص عمل",
    },
    // Footer
    footer: {
      copyright: "© 2025 محمد أنور. جميع الحقوق محفوظة.",
      madeWith: "صُنع بشغف",
    },
    // Common
    common: {
      loading: "جاري التحميل...",
      error: "خطأ في تحميل المحتوى",
      backToTop: "العودة للأعلى",
    },
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
