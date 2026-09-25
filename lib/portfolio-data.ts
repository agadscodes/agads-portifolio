export const profile = {
  name: "Agada Elija",
  monogram: "AE",
  role: "Front-End Developer",
  email: "elijaagada@gmail.com",
  github: "https://github.com/agadscodes",
  linkedin: "https://www.linkedin.com/in/agada-elija-owoicho-227825375/",
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
    title: "Record Label Website",
    description:
      "A modern website for a record label, showcasing artists and releases.",
    image: "/projects/Record.jpg",
    tags: ["React", "Css"],
    github: "https://github.com/agadscodes/Music-Label-Website",
    demo: "https://example.com",
  },
  {
    title: "E-commerce Store",
    description:
      "A modern e-commerce website for selling products online.",
    image: "/projects/SharedScreenshot.jpg",
    tags: ["JavaScript", "Css", "REST API", "Google Authentication"],
    github: "https://github.com/agadscodes/ShopEase",
    demo: "https://example.com",
  },
  {
    title: "Expense Tracker",
    description:
      "A simple expense tracking application to manage personal finances.",
    image: "/projects/Expense.jpg",
    tags: ["React", "Css", "Vite"],
    github: "https://github.com/agadscodes/expense-app",
    demo: "https://example.com",
  },
  {
    title: "Todo App",
    description:
      "A simple todo application built with React and TypeScript.",
    image: "/projects/Todo.jpg",
    tags: ["React", "TypeScript", "Vite"],
    github: "https://github.com/agadscodes/Todo-app-first-react-project",
    demo: "https://example.com",
  },
]
