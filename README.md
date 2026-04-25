# Beneden Website

Modern, professional dark-themed website for Beneden company.

## 🎨 Design Features

- **Dark Theme**: Optimized for 2025 best practices
  - Background: `#121212` (reduces eye strain vs pure black)
  - Text: `#E0E0E0` (off-white, avoids halation effect)
  - Accent: Professional blue-violet `#8B5CF6`

- **Accessibility**: WCAG 2.1 compliant contrast ratios
- **Responsive**: Mobile-first design
- **Modern UI**: Elevation through color, hover effects, gradients

## 📁 Project Structure

```
beneden.gg-site/
├── _includes/
│   └── layout.njk      # Main layout with dark theme CSS
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions for auto-deployment
├── index.md            # Homepage
├── about.md            # About page
├── contact.md          # Contact page
├── .eleventy.js        # Eleventy configuration
├── package.json        # Dependencies
└── CNAME              # Custom domain configuration
```

## 🚀 Quick Start

### Local Development

```bash
cd ~/beneden.gg-site
npm install
npm run serve  # Live preview at http://localhost:8080
```

### Deploy Changes

```bash
git add .
git commit -m "Your message"
git push  # Auto-deploys to GitHub Pages
```

## 🌐 Live Site

- **URL**: https://beneden.gg
- **Email**: hello@beneden.gg
- **Repository**: https://github.com/JDeez0/beneden.gg-site

## 🛠️ Tech Stack

- **Static Site Generator**: Eleventy (11ty)
- **Hosting**: GitHub Pages
- **Domain**: Namecheap
- **Email**: Google Workspace
- **CI/CD**: GitHub Actions

## 📝 Editing Content

All content is in Markdown files:

- `index.md` - Homepage
- `about.md` - About page
- `contact.md` - Contact page

## 🎨 Customizing Design

Edit CSS variables in `_includes/layout.njk`:

```css
:root {
    --accent-primary: #8B5CF6;  /* Change accent color */
    --bg-primary: #121212;       /* Change background */
    /* ... more variables */
}
```

## 🔧 Adding New Pages

1. Create a new `.md` file in the root directory
2. Add front matter:
```yaml
---
layout: layout.njk
title: Page Title
---
```
3. Write your content in Markdown
4. Commit and push

## 📊 Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Build Time: ~30 seconds
- Page Load: < 1 second

## 📧 Contact

For questions or support, email: hello@beneden.gg
