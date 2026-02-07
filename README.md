# Mohamed Anwer - Portfolio Website

A modern, bilingual (Arabic/English) portfolio website built with React 19, TypeScript, and Tailwind CSS. Featuring a dark theme with cyan accents, interactive project filtering, testimonials carousel, and responsive design.

## 🎨 Features

- **Bilingual Support**: Full Arabic/English language switching
- **Dark Modern Theme**: Sleek dark mode with cyan (#00d4ff) accents
- **Interactive Project Filtering**: Filter projects by technologies used
- **Testimonials Carousel**: Professional recommendations from colleagues and managers
- **Responsive Design**: Works seamlessly on all devices
- **Smooth Animations**: Fade-in effects and smooth transitions throughout
- **Modern UI Components**: Built with shadcn/ui and Radix UI
- **Fast Performance**: Optimized with Vite and React 19

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About** - Personal background, education, and languages
3. **Skills** - Technical skills organized by category
4. **Experience** - Professional work experience timeline
5. **Projects** - Portfolio projects with technology filtering
6. **Testimonials** - Professional recommendations carousel
7. **Contact** - Contact information and social links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI, Lucide Icons
- **Build Tool**: Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom animations
- **Internationalization**: Custom i18n context

## 📁 Project Structure

```
client/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── contexts/         # React contexts (Language)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and data
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── index.html           # HTML template
```

## 🎯 Key Components

### ModernHero
Main hero section with introduction and CTA buttons

### FilterableProjects
Interactive project showcase with technology-based filtering

### Testimonials
Carousel component displaying professional recommendations

### Header
Navigation with language switcher

## 🌐 Language Support

The website supports both Arabic and English with:
- Automatic text direction (RTL for Arabic, LTR for English)
- Complete translation of all content
- Language persistence across sections

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- **Background**: #0a0e27 (Dark Navy)
- **Foreground**: #e8ecf1 (Light Gray)
- **Accent**: #00d4ff (Cyan)
- **Card**: #1a1f3a (Dark Blue)
- **Border**: #2a3250 (Muted Blue)

## 📝 Content Management

All content is managed in `/client/src/lib/portfolioData.ts`:
- Personal information
- Projects with technologies
- Skills by category
- Work experience
- Education details
- Languages
- Testimonials

## 🔧 Customization

### Adding a New Project

Edit `portfolioData.ts`:

```typescript
{
  id: "project-id",
  titleEn: "Project Title",
  titleAr: "عنوان المشروع",
  descriptionEn: "Description...",
  descriptionAr: "الوصف...",
  technologies: ["Tech1", "Tech2"],
  link: "https://github.com/...",
  github: "https://github.com/..."
}
```

### Adding Testimonials

Edit the `testimonials` array in `portfolioData.ts`:

```typescript
{
  id: "testimonial-id",
  nameEn: "Name",
  nameAr: "الاسم",
  positionEn: "Position",
  positionAr: "الموقع",
  company: "Company",
  contentEn: "Testimonial...",
  contentAr: "الشهادة...",
  rating: 5
}
```

## 📦 Build & Deploy

The project is optimized for deployment with:
- Static site generation
- Minimal bundle size
- Optimized images and assets
- Production-ready build

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mohamed Anwer**
- Backend Engineer
- 2+ years of experience
- Specializing in Laravel, PHP, and MySQL

---

Built with ❤️ using modern web technologies
