# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full-Stack Web Developer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, glassmorphism effects, and a unique dual-mode experience.

## 🌟 Features

### Dual Mode Experience
- **Human Mode** 👤: Original portfolio design - clean and simple
- **AI Mode** 🤖: Enhanced version with modern animations, effects, and interactions
- Switch between modes anytime using the mode switcher in the navbar
- Mode preference is saved in localStorage

### Modern UI/UX
- ✨ Smooth scroll-triggered animations using Framer Motion
- 🎨 Glassmorphism effects on navbar and components
- 🎯 Custom cursor trail (desktop only)
- 📊 Scroll progress indicator
- 🌈 Gradient text effects and animated backgrounds
- 💫 3D card transforms on hover
- 🎭 Magnetic button interactions
- 🌓 Dark/Light theme toggle with persistence

### Responsive Design
- 📱 Fully responsive across all devices
- 🎯 Mobile-first approach
- 💻 Optimized for tablets and desktops
- 🖱️ Touch-friendly interactions on mobile

### Sections
- **Hero**: Animated typing effect with gradient backgrounds
- **About**: Personal introduction with animated profile image
- **Skills**: Infinite scrolling skill icons with hover effects
- **Projects**: Interactive project cards with 3D transforms
- **Footer**: Contact links and social media integration

## 🚀 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Framer Motion** - Animation library
- **React Context API** - State management

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── me.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── me.webp
│   │   ├── projects/
│   │   └── skill-icons/
│   ├── components/
│   │   ├── original/          # Original components (Human mode)
│   │   │   ├── HeroOriginal.jsx
│   │   │   ├── AboutOriginal.jsx
│   │   │   ├── SkillsOriginal.jsx
│   │   │   ├── ProjectsOriginal.jsx
│   │   │   ├── FooterOriginal.jsx
│   │   │   └── NavbarOriginal.jsx
│   │   ├── ui/
│   │   │   ├── ThemeController.jsx
│   │   │   └── ModeSwitcher.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── CursorTrail.jsx
│   │   └── SectionDivider.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Updating Personal Information
- Edit `src/components/Hero.jsx` for name and title
- Edit `src/components/About.jsx` for bio
- Update project details in `src/components/Projects.jsx`
- Modify social links in `src/components/Hero.jsx` and `src/components/Footer.jsx`

### Changing Theme Colors
- Modify DaisyUI theme in `tailwind.config.js` or use CSS variables
- Update gradient colors in `src/index.css`

### Adding New Projects
- Add project images to `src/assets/projects/`
- Update the `projects` array in `src/components/Projects.jsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📝 Features Breakdown

### Mode Switcher
- Toggle between original (Human) and enhanced (AI) versions
- Located in the navbar
- Preference saved in localStorage
- Smooth transitions between modes

### Animations
- Scroll-triggered animations using Intersection Observer
- Staggered animations for sequential reveals
- Hover effects on interactive elements
- Smooth page transitions

### Performance
- Optimized animations with proper easing
- Lazy loading for images
- Efficient re-renders with React Context
- Minimal bundle size

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dattatray Mahindrakar**

- GitHub: [@Dattatray8](https://github.com/Dattatray8)
- LinkedIn: [Dattatray Mahindrakar](https://www.linkedin.com/in/dattatray-mahindrakar/)
- Email: dattatraymahindrakar@gmail.com

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS and DaisyUI
- Animations powered by Framer Motion
- Icons from various sources

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add more interactive animations
- [ ] Performance optimizations
- [ ] Add more project showcases
- [ ] Implement analytics

---

⭐ If you like this project, please give it a star!
