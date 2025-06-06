## 📌 Portfolio Website
A modern, responsive portfolio website built with HTML, CSS, and JavaScript — showcasing my projects, skills, and learning journey. This is a personal site designed to reflect my developer identity, UI/UX creativity, and commitment to continuous learning.
## 🔗 Live Demo
👉 View Portfolio Online (Add your hosted link here, e.g. GitHub Pages, Netlify, etc.)

## 📁 Project Structure

```graphql
portfolio/
│
├── index.html                  # Main landing page (SPA structure)
├── main.js                     # Entry script (initialization and component loading)
│
├── global/
│   ├── styles/
│   │   ├── base.css            # Reset and base typography
│   │   ├── variables.css       # CSS variables (colors, spacing, fonts)
│   │   └── themes.css          # Dark/Light theme support
│   └── utils/
│       ├── loader.js           # JS to dynamically load HTML components
│       └── router.js           # (Optional) SPA-like navigation handling
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Resume/
│   ├── Services/
│   ├── Portfolio/
│   ├── Courses/                # Replaces traditional testimonials
│   ├── Contact/
│   ├── Footer/
│   └── Chatbot/
│
├── data/
│   └── projects.json           # Project cards shown dynamically
│
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
└── README.md

```
## Portfolio Project Structure Overview

| Folder        | 	Purpose                                                               |
|---------------|------------------------------------------------------------------------|
| index.html    | 	The main HTML entry point of your portfolio website.                  |
| main.js       | 	The main JavaScript file that bootstraps the entire website.          |
| assets        | 	Contains all static media assets used across the website.             |
| fonts         | 	Custom fonts (e.g. .woff2, .ttf) used in the site.                    |
| images        | 	Images for hero section, projects, profile, etc.                      |
| icons         | 	SVG or PNG icons for social links, buttons, etc.                      |
| global        | 	Contains global styles and utility scripts.                           |
| styles        | 	CSS styles shared across all components.                              |
| variables.css | 	CSS custom properties (colors, spacing, etc.).                        |
| themes.css    | 	Dark/light theme definitions and toggles.                             |
| base.css      | 	Base styles (reset, typography, utility classes).                     |
| utils         | 	Utility JavaScript files.                                             |
| router.js     | 	(Optional) SPA routing logic for navigating between sections.         |
| loader.js     | 	Component loading logic (like your loadComponent() setup).            |
| components    | 	Each UI section is a self-contained component with HTML, CSS, and JS. |
| Header        | 	Top navigation or branding section.                                   |
| Hero          | 	Introduction area (name, title, CTA).                                 |
| About         | 	About me section.                                                     |
| Resume        | 	Timeline or experience section.                                       |                                
| Services      | 	What you offer (e.g., Web Dev, UI/UX).                                |
| Portfolio     | 	Project showcases (can fetch from data/projects.json).                |
| Contact       | 	Contact form + social links.                                          |
| Footer        | 	Bottom credits + links.                                               |
| Chatbot       | 	AI-powered assistant (using OpenAI or Web Speech API).                |
| data          | 	Contains structured data used in components.                          |
| projects.json | 	JSON file with your project details (title, desc, tech, link, etc.).  |                                                                        |

### 🌟 Extra Tips:
**Section	Tip**
- components/	Keep structure consistent: one folder per component with HTML, CSS, JS.
- global/	Use variables.css for color palette, spacing, and font scale.
- assets/	Compress images and SVGs to optimize performance.
- data/	Makes portfolio dynamic and easy to scale — add projects here only.                      





## ✨ Features
1. [x] ⚡ Fast, single-page experience with component loading
2. [x] 🌗 Light & Dark theme toggle
3. [x] 📚 “Courses” section instead of testimonials — honest reflection of my learning
4. [x] 💬 Chatbot UI (optional interaction)
5. [x] 🧩 Reusable HTML components with scoped JS/CSS
6. [x] 📱 Fully responsive design

## 🛠️ Technologies Used
1. [x] HTML5
2. [x] CSS3 (Custom properties, Flexbox, Grid)
3. [x] JavaScript (Vanilla)
4. [x] Swiper.js (for carousel in courses section)
5. [x] Git & GitHub

### 📦 Installation

```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
```

> [!NOTE] Then just open index.html in your browser, or use a local development server like VSCode Live Server.

 ### 📚 Courses Included
This portfolio features a "Top Courses" section showing some of my completed learning paths:
✅ JavaScript Mastery (includes GitHub repo)
✅ SQL & Relational Algebra
✅ PHP for Beginners
(More coming soon)

### 🧪 Future Improvements
Add animations with GSAP or Framer Motion (when migrating to React)
Convert components into a React/Next.js app
Use markdown or CMS for dynamic blog or article content
Deploy to Netlify or Vercel
🙌 Acknowledgments
Design inspired by modern portfolio trends
Thanks to open-source resources like SwiperJS

### 📬 Contact
Feel free to connect with me via LinkedIn or email.