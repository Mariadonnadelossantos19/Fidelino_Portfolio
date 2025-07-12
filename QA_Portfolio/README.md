# QA Engineer & Web Developer Portfolio

A modern, interactive, and professional portfolio built with **React** and **Vite**. This project showcases the skills, certifications, and projects of a QA Engineer & Web Developer, with a focus on beautiful design, accessibility, and automation.

## ✨ Features

- **Modern Glassmorphism UI**: Elegant, techy look with purple-pink gradients, soft shadows, and rounded corners.
- **Responsive Navigation Bar**: Sticky, glassy navbar with active link highlighting, hamburger menu, and smooth scroll.
- **Professional Hero Section**: Includes a headline, subheading, call-to-action, and professional image.
- **Sectioned Layout**: Clean separation for About, Education, Certificates, Projects, and Contact.
- **Carousel Sliders**: Interactive, swipeable carousels for certificates and projects, with autoplay, arrows, dots, and progress bar.
- **Auto-Generated PDF Certificates**: All PDF certificates in `/src/assets/pdf` are automatically listed as cards with embedded previews and view buttons.
- **Social Media Bar**: Floating, animated icons for LinkedIn, GitHub, and Facebook.
- **Accessibility**: High-contrast, keyboard navigable, and WCAG-AA compliant.
- **Mobile-First Responsive Design**: Looks great on all devices.

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Heroicons](https://heroicons.com/) and custom SVGs
- [ESLint](https://eslint.org/) for code quality

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd QA_Portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## 📁 Adding Certificates

- Place your PDF certificates in `src/assets/pdf/`.
- They will automatically appear in the Certificates section as cards with embedded previews and "View Full Certificate" buttons.
- You can also add custom certificates by editing the `certificates` array in `CertificatesSection.jsx`.

## 🎨 Customization

- **Colors & Gradients:** Easily adjust in `tailwind.config.js` or component classes.
- **Sections:** Add, remove, or reorder sections in `App.jsx`.
- **Social Links:** Edit `src/components/SocialMediaBar.jsx` for your own profiles.

## 📦 Build for Production

```bash
npm run build
```

## 🙏 Credits

- Inspired by modern tech portfolios and glassmorphism UI trends.
- Built with love by Ma. Donna Fidelino.

---

**Feel free to fork, customize, and use this portfolio as your own!**
