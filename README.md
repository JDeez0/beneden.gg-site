# Beneden Website

Modern, spacious dark-themed website for Beneden - a revolutionary social platform.

## 🎯 About Beneden

Beneden is an alternative social platform that will **never monetize attention**. We're building a truly child-safe space that solves the addiction crisis through:

- **Shared Goals**: Every groupchat incorporates shared goals (like lowering screen time)
- **Visual Tokens**: Achievements that double as emojis - celebrating real progress
- **Casual Messaging**: Context-rich communication for planning events and staying connected
- **Child Safety**: Built from the ground up to be truly safe for children
- **Strava for Screen Time**: Gamified, goal-oriented approach to healthy digital habits

## 🎨 Design Features

- **Dark Theme**: Optimized for 2025 best practices
  - Background: `#121212` (reduces eye strain vs pure black)
  - Text: `#E0E0E0` (off-white, avoids halation effect)
  - Accent: Professional blue-violet `#8B5CF6`

- **Spacious Layout**: Increased 30-50% spacing for breathing room
- **Accessibility**: WCAG 2.1 compliant contrast ratios
- **Responsive**: Mobile-first design
- **Modern UI**: Elevation through color, smooth animations, hover effects

## 📁 Project Structure

```
beneden.gg-site/
├── _includes/
│   └── layout.njk      # Main layout with dark theme CSS
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions for auto-deployment
├── index.md            # Homepage (problem, solution, waitlist)
├── about.md            # About page (mission, values, vision)
├── contact.md          # Contact page (inquiries, partnerships)
├── README.md           # This file
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
git push  # Auto-deploys to GitHub Pages in ~30 seconds
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

## 📝 Pages

### Homepage (`/`)
- Hero with "A new world awaits" tagline
- Problem section (3 key issues with current social media)
- Approach section (6 key features of Beneden)
- Philosophy section (our vision)
- Waitlist signup form
- Final CTA

### About Page (`/about/`)
- Mission statement
- Company values (wellbeing, safety, privacy, achievement, community, sustainability)
- Vision for the future

### Contact Page (`/contact/`)
- Contact information (general, partnerships, press, careers)
- Waitlist signup
- Community call-to-action

## 🎨 Customizing Design

Edit CSS variables in `_includes/layout.njk`:

```css
:root {
    --accent-primary: #8B5CF6;  /* Change accent color */
    --bg-primary: #121212;       /* Change background */
    --text-primary: #E0E0E0;     /* Change text color */
    --spacing-lg: 3rem;          /* Adjust spacing */
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

- **General**: hello@beneden.gg
- **Partnerships**: partnerships@beneden.gg
- **Press**: press@beneden.gg
- **Careers**: careers@beneden.gg

## 🎯 Key Sections

### Waitlist Form
The waitlist form is ready for backend integration. Currently it's a placeholder form that will need to be connected to:
- Form service (Formspree, Netlify Forms, etc.)
- Custom backend
- Email service

### Social Links
Footer includes placeholder links for Twitter, LinkedIn, and Email. Update these in `_includes/layout.njk`.

---

**A new world awaits.** Join us in building better social media.
