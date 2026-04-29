import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
  title: "Real Estate Platform — Amine Hamdi",
  description: "Full-stack MERN platform for listing and managing real estate properties.",
};

const project = {
  title: "Real Estate Management Platform",
  category: "full-stack web app",
  summary:
    "A complete MERN stack platform for managing real estate listings. Users can browse properties with advanced filters, agents can manage listings through a dashboard, and all data is served via a RESTful API backed by MongoDB.",
  meta: [
    { label: "Stack", value: "MERN" },
    { label: "Type", value: "Full-Stack App" },
    { label: "Year", value: "2024" },
  ],
  stack: [
    { name: "React", variant: "accent" },
    { name: "Node.js", variant: "blue" },
    { name: "Express", variant: "blue" },
    { name: "MongoDB", variant: "default" },
    { name: "REST API", variant: "default" },
    { name: "JavaScript", variant: "accent" },
  ],
  features: [
    {
      icon: "🏠",
      title: "Property Listings",
      desc: "Browse, search, and filter real estate properties by price, location, and type.",
    },
    {
      icon: "🔐",
      title: "Authentication",
      desc: "Secure user and agent authentication with JWT-based session management.",
    },
    {
      icon: "📊",
      title: "Agent Dashboard",
      desc: "Full CRUD dashboard for agents to create, update, and manage their listings.",
    },
    {
      icon: "⚡",
      title: "REST API",
      desc: "Clean RESTful API built with Express and connected to a MongoDB Atlas cluster.",
    },
  ],
  links: [],
};

export default function RealEstatePage() {
  return <ProjectLayout project={project} />;
}