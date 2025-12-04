# ChatFlow CRM Portfolio

A modern, responsive SaaS portfolio website for ChatFlow CRM built with Next.js, Tailwind CSS, and TypeScript.

##  Features

-  Landing page with hero section & CTA buttons
-  Video modal for demos
-  Team & About page (SSG)
-  Contact form (Formspree integration)
-  Dashboard preview & analytics
-  Pricing section
-  Fully responsive & mobile-friendly
-  Smooth animations (Framer Motion)
-  SEO optimized
-  Accessible components

##  Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Zustand** (state management)
- **recharts** (analytics)
- **Cloudinary** (image hosting)

##  Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone repo
git clone <repo-url>
cd CRMport

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Project Structure

```
src/
+-- app/
�   +-- page.tsx              # Landing page
�   +-- layout.tsx
�   +-- globals.css
�   +-- aboutus/page.tsx      # About page
�   +-- contact/page.tsx      # Contact page
+-- components/
�   +-- common/               # Navbar, Footer, Modals
�   +-- landing/              # Hero, Features, Pricing
+-- store/
    +-- authStore.ts          # Auth state
```

##  Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production
npm run lint     # Lint code
```

##  Pages

| Page | Route | Details |
|------|-------|---------|
| Home | / | Hero, features, analytics, pricing |
| About | /aboutus | Company info & team |
| Contact | /contact | Contact form |

##  Styling

- Utility-first with **Tailwind CSS**
- Responsive mobile-first design
- CSS variables for consistency
- Dark mode ready

##  Images

Images are hosted on **Cloudinary** for optimal performance and CDN delivery.

##  Responsive

-  Mobile (320px+)
-  Tablet (768px+)
-  Desktop (1024px+)

##  Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)

##  Support

Questions Contact: info@chatflow.com

---

**Made with  by Taha Ibrahim**
