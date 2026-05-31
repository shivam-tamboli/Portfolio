# Portfolio

Personal developer portfolio built with React and Vite. Sections: hero with animated title cycling, about, skills, education, experience, projects with case-study modals, and a contact form.

**Live:** <!-- TODO: add your Vercel URL here -->

## Tech stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Animation | Framer Motion (lazy-loaded sections, reduced-motion aware) |
| Contact | EmailJS |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Getting started

```bash
npm install
```

Create a `.env` file with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview build locally
```

## Project structure

```
src/
├── components/
│   ├── Hero.jsx          # Animated title cycling, social links
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx      # Project cards with case-study modals
│   ├── ProjectModal.jsx
│   ├── Contact.jsx       # EmailJS contact form
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   └── ParticleBackground.jsx
└── App.jsx               # Lazy loads all sections below the fold
```

## License

MIT
