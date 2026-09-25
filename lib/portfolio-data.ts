export const profile = {
  name: "Alex Rivera",
  monogram: "AR",
  role: "Front-End Developer",
  email: "hello@alexrivera.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "/resume.pdf",
}

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export type TechName =
  | "HTML5"
  | "CSS3"
  | "JavaScript"
  | "React"
  | "TypeScript"
  | "Git"
  | "Vite"
  | "Tailwind"

export const techStack: {
  category: string
  items: { name: string; icon: TechName; label: string }[]
}[] = [
  {
    category: "Languages",
    items: [
      { name: "HTML5", icon: "HTML5", label: "HTML5" },
      { name: "CSS3", icon: "CSS3", label: "CSS3" },
      { name: "JavaScript", icon: "JavaScript", label: "JavaScript (ES6+)" },
      { name: "TypeScript", icon: "TypeScript", label: "TypeScript" },
    ],
  },
  {
    category: "Frameworks & Styling",
    items: [
      { name: "React", icon: "React", label: "React" },
      { name: "Tailwind", icon: "Tailwind", label: "Tailwind CSS" },
    ],
  },
  {
    category: "Tooling",
    items: [
      { name: "Vite", icon: "Vite", label: "Vite" },
      { name: "Git", icon: "Git", label: "Git / GitHub" },
    ],
  },
]

export const projects = [
  {
    title: "Insight Analytics",
    description:
      "A real-time analytics dashboard that turns raw event streams into clear, actionable KPIs. Solved slow initial loads with server-driven data and optimistic UI.",
    image: "/projects/analytics-dashboard.png",
    tags: ["React", "TypeScript", "REST API", "Recharts"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Nimbus Store",
    description:
      "A headless e-commerce storefront with a snappy product grid and cart. Reduced bundle size 40% by code-splitting routes and lazy-loading imagery.",
    image: "/projects/ecommerce-store.png",
    tags: ["React", "TypeScript", "Tailwind", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Flowboard",
    description:
      "A collaborative kanban board with drag-and-drop and live updates. Tackled state complexity with a normalized store and accessible keyboard interactions.",
    image: "/projects/task-manager.png",
    tags: ["React", "TypeScript", "WebSocket", "Vite"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Skyward",
    description:
      "A weather forecast app with a glassmorphic UI and location search. Built a resilient fetch layer with caching to gracefully handle flaky networks.",
    image: "/projects/weather-app.png",
    tags: ["React", "REST API", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]
