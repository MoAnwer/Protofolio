// Portfolio data for Mohamed Anwer - Backend Engineer
// This file contains all the content for the portfolio website

export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  technologies: string[];
  link: string;
  github: string;
  image?: string;
}

export interface Experience {
  id: string;
  titleEn: string;
  titleAr: string;
  company: string;
  period: string;
  descriptionEn: string[];
  descriptionAr: string[];
}

export interface Skill {
  categoryEn: string;
  categoryAr: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  positionEn: string;
  positionAr: string;
  company: string;
  contentEn: string;
  contentAr: string;
  rating: number;
}

export const projects: Project[] = [
  {
    id: "softstore",
    titleEn: "SoftStore - E-commerce Platform",
    titleAr: "SoftStore - منصة التجارة الإلكترونية",
    descriptionEn:
      "A modern full-stack e-commerce solution built on the TALL Stack (Laravel 12.x, Livewire v3, Alpine.js, Tailwind CSS) with FilamentPHP admin dashboard, Stripe payment integration, and real-time interactivity.",
    descriptionAr:
      "حل تجارة إلكترونية حديث مبني على TALL Stack مع لوحة تحكم FilamentPHP متقدمة وتكامل Stripe والتحديثات الفورية.",
    technologies: [
      "Laravel 12",
      "Livewire v3",
      "Alpine.js",
      "Tailwind CSS",
      "FilamentPHP",
      "Stripe",
      "SQLite",
    ],
    link: "https://github.com/MoAnwer/SoftStore",
    github: "MoAnwer/SoftStore",
  },
  {
    id: "alshahiid",
    titleEn: "Alshahiid Management System",
    titleAr: "نظام إدارة الشهداء",
    descriptionEn:
      "Complex database system with 45 tables designed for managing families, martyrs, and services. Features 200+ reporting screens, 20%+ performance optimization through indexing, and comprehensive backup/restore capabilities.",
    descriptionAr:
      "نظام قاعدة بيانات معقد يتضمن 45 جدول لإدارة الأسر والشهداء والخدمات مع أكثر من 200 شاشة تقرير وتحسينات أداء متقدمة.",
    technologies: [
      "Laravel",
      "MySQL",
      "Database Optimization",
      "Reporting",
      "Backup Systems",
    ],
    link: "https://github.com/MoAnwer/Alshahiid",
    github: "MoAnwer/Alshahiid",
  },
  {
    id: "lyman",
    titleEn: "Lyman Educational Platform",
    titleAr: "منصة ليمان التعليمية",
    descriptionEn:
      "Full-stack educational platform using Native PHP and MySQL with custom CMS, secure authentication, user engagement features, and asset management system for deploying large game files.",
    descriptionAr:
      "منصة تعليمية كاملة باستخدام PHP الأصلي وMySQL مع نظام إدارة محتوى مخصص وميزات تفاعل المستخدم.",
    technologies: ["Native PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/MoAnwer/Educational_lyman",
    github: "MoAnwer/Educational_lyman",
  },
  {
    id: "almirgani",
    titleEn: "AL-Mirgani School Accounts System",
    titleAr: "نظام حسابات مدرسة المرغني",
    descriptionEn:
      "Comprehensive 4-in-1 platform for managing student accounts across educational stages with financial automation, WhatsApp API integration, and advanced reporting capabilities.",
    descriptionAr:
      "منصة شاملة لإدارة حسابات الطلاب مع أتمتة مالية وتكامل WhatsApp وقدرات تقارير متقدمة.",
    technologies: [
      "Laravel",
      "MySQL",
      "WhatsApp API",
      "Financial Reporting",
      "Database Backup",
    ],
    link: "https://github.com/MoAnwer/AL-Mirgani",
    github: "MoAnwer/AL-Mirgani",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    titleEn: "TALL Stack Developer",
    titleAr: "مطور TALL Stack",
    company: "SoftStore Mini E-commerce",
    period: "03/2025 - 04/2025",
    descriptionEn: [
      "Built comprehensive admin dashboard using FilamentPHP for managing products, orders, and categories",
      "Implemented real-time interactivity using Livewire v3 with wire:navigate for enhanced page loading",
      "Integrated Stripe payment gateway for secure online payment processing",
      "Supported Dark and Light modes with real-time filtering and search capabilities",
    ],
    descriptionAr: [
      "بناء لوحة تحكم شاملة باستخدام FilamentPHP لإدارة المنتجات والطلبات والفئات",
      "تطبيق التفاعلية الفورية باستخدام Livewire v3 مع wire:navigate",
      "تكامل بوابة الدفع Stripe لمعالجة الدفع الآمنة عبر الإنترنت",
      "دعم الأوضاع الداكنة والفاتحة مع إمكانيات البحث والتصفية الفورية",
    ],
  },
  {
    id: "exp2",
    titleEn: "Backend Engineer & Solution Implementer",
    titleAr: "مهندس Backend ومنفذ الحلول",
    company: "Alshahiid Management System",
    period: "01/2025 - 02/2025",
    descriptionEn: [
      "Analyzed and designed complex database with 45 tables ensuring normalization and optimized relationships",
      "Improved main report search performance by 20%+ using Database Indexes and Eager Loading",
      "Implemented 200+ complex reporting screens with SQL Joins across up to 10 tables",
      "Designed and deployed backup & restore system ensuring 100% data reliability",
    ],
    descriptionAr: [
      "تحليل وتصميم قاعدة بيانات معقدة مع 45 جدول مع ضمان التطبيع والعلاقات المحسنة",
      "تحسين أداء البحث بنسبة 20%+ باستخدام فهارس قاعدة البيانات",
      "تطبيق أكثر من 200 شاشة تقرير معقدة مع SQL Joins",
      "تصميم ونشر نظام النسخ الاحتياطي والاستعادة",
    ],
  },
  {
    id: "exp3",
    titleEn: "Backend Engineer",
    titleAr: "مهندس Backend",
    company: "School Accounts Management System",
    period: "09/2024 - 10/2024",
    descriptionEn: [
      "Developed comprehensive system for managing student accounts across four educational stages",
      "Successfully integrated WhatsApp API for automated payment receipt delivery",
      "Implemented secure database backup, restore, and export to Excel capabilities",
      "Provided high customization through Admin Settings page",
    ],
    descriptionAr: [
      "تطوير نظام شامل لإدارة حسابات الطلاب عبر أربع مراحل تعليمية",
      "تكامل ناجح لـ WhatsApp API لتسليم الإيصالات الآلية",
      "تطبيق النسخ الاحتياطية الآمنة والاستعادة والتصدير إلى Excel",
      "توفير تخصيص عالي من خلال صفحة إعدادات المسؤول",
    ],
  },
  {
    id: "exp4",
    titleEn: "Full-Stack Developer",
    titleAr: "مطور Full-Stack",
    company: "Lyman Educational Platform",
    period: "10/2022 - 08/2024",
    descriptionEn: [
      "Engineered and deployed full-stack educational platform using Native PHP and MySQL",
      "Implemented secure Admin Panel for managing educational content",
      "Designed and coded entire frontend interface using raw HTML and CSS",
      "Developed Authentication (Sign-up/Login) and user feedback mechanisms",
    ],
    descriptionAr: [
      "تطوير ونشر منصة تعليمية كاملة باستخدام PHP الأصلي وMySQL",
      "تطبيق لوحة تحكم آمنة لإدارة المحتوى التعليمي",
      "تصميم وترميز واجهة المستخدم الكاملة باستخدام HTML و CSS",
      "تطوير آليات المصادقة وردود فعل المستخدم",
    ],
  },
];

export const skills: Skill[] = [
  {
    categoryEn: "Backend Development",
    categoryAr: "تطوير Backend",
    items: ["PHP 8.x", "Laravel (9x - 12x)", "RESTful APIs", "MVC Architecture"],
  },
  {
    categoryEn: "Database",
    categoryAr: "قواعد البيانات",
    items: [
      "MySQL",
      "SQLite",
      "Database Normalization",
      "Database Indexing",
      "Performance Optimization",
    ],
  },
  {
    categoryEn: "Frontend Development",
    categoryAr: "تطوير Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Livewire",
    ],
  },
  {
    categoryEn: "Tools & Practices",
    categoryAr: "الأدوات والممارسات",
    items: [
      "Git/GitHub",
      "SOLID Principles",
      "FilamentPHP",
      "Stripe Integration",
    ],
  },
];

export const personalInfo = {
  nameEn: "Mohamed Anwer",
  nameAr: "محمد أنور",
  titleEn: "Backend Engineer",
  titleAr: "مهندس Backend",
  emailEn: "mo7anwer26@gmail.com",
  emailAr: "mo7anwer26@gmail.com",
  phone: "+249118848745",
  location: "Sudan, Kassala",
  github: "https://github.com/MoAnwer",
  summaryEn:
    "A highly resilient Software Engineering student with 3 years of proven practical experience in web development, specializing in Backend Engineering using Laravel, Native PHP, and MySQL. Successfully designed and delivered four complex production systems, building exceptional resilience in solving complex problems under tight operational constraints.",
  summaryAr:
    "طالب هندسة برمجيات متمكن مع 3 سنوات من الخبرة العملية المثبتة في تطوير الويب، متخصص في هندسة Backend باستخدام Laravel و PHP الأصلي و MySQL. صمم وسلم بنجاح أربعة أنظمة إنتاجية معقدة.",
};

export const education = {
  degreeEn: "B.Sc. Software Engineering",
  degreeAr: "بكالوريوس هندسة برمجيات",
  universityEn: "Sudan University of Science and Technology (SUST)",
  universityAr: "جامعة السودان للعلوم والتكنولوجيا",
  startDate: "02/2023",
  status: "4th Semester",
};

export const languages = [
  { nameEn: "English", nameAr: "الإنجليزية", level: "Intermediate" },
  { nameEn: "Arabic", nameAr: "العربية", level: "Native" },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    nameEn: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    positionEn: "Project Manager",
    positionAr: "مدير المشروع",
    company: "SoftStore",
    contentEn:
      "Mohamed demonstrated exceptional backend engineering skills and delivered the e-commerce platform ahead of schedule. His attention to detail and problem-solving abilities are outstanding. Highly recommended!",
    contentAr:
      "أظهر محمد مهارات استثنائية في هندسة Backend وسلم منصة التجارة الإلكترونية قبل الموعد المحدد. اهتمامه بالتفاصيل وقدرات حل المشاكل رائعة جداً. أوصي به بشدة!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    nameEn: "Fatima Mohammed",
    nameAr: "فاطمة محمد",
    positionEn: "Technical Lead",
    positionAr: "قائد فني",
    company: "Alshahiid Management System",
    contentEn:
      "Working with Mohamed on the Alshahiid project was a pleasure. He designed a complex database with 45 tables and optimized queries that improved performance by 20%. His technical expertise is remarkable.",
    contentAr:
      "كان العمل مع محمد على مشروع الشهيد متعة. قام بتصميم قاعدة بيانات معقدة بـ 45 جدول وحسّن الاستعلامات بنسبة 20%. خبرته التقنية رائعة جداً.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    nameEn: "Ibrahim Ali",
    nameAr: "إبراهيم علي",
    positionEn: "System Administrator",
    positionAr: "مسؤول النظام",
    company: "School Accounts Management System",
    contentEn:
      "Mohamed integrated WhatsApp API seamlessly and implemented a robust backup system. His code is clean, well-documented, and maintainable. A true professional!",
    contentAr:
      "قام محمد بدمج WhatsApp API بسلاسة وتطبيق نظام نسخ احتياطي قوي. كوده نظيف وموثق جيداً وسهل الصيانة. محترف حقيقي!",
    rating: 5,
  },
  {
    id: "testimonial-4",
    nameEn: "Zainab Saeed",
    nameAr: "زينب سعيد",
    positionEn: "Educational Coordinator",
    positionAr: "منسقة تعليمية",
    company: "Lyman Educational Platform",
    contentEn:
      "Mohamed built the entire Lyman platform from scratch with Native PHP and MySQL. His full-stack capabilities and ability to work independently are impressive. Excellent communication skills!",
    contentAr:
      "بنى محمد منصة Lyman بالكامل من الصفر باستخدام PHP الأصلي و MySQL. قدراته في Full-Stack وقدرته على العمل بشكل مستقل مثيرة للإعجاب. مهارات تواصل ممتازة!",
    rating: 5,
  },
];
