import ProjectLayout from '@/components/ProjectLayout'

const project = {
  num: '02',
  title: 'REAL ESTATE\nPLATFORM',
  tagline: 'A full-stack MERN application for managing real estate listings — built with clean architecture, reusable React components, and a scalable MongoDB backend.',
  category: 'Full-Stack App',
  accent: '#3fb950',
  github: 'https://github.com/MEDamine-hamdi/Real-Estate-Management-Platform-MERN-',
  tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API', 'JavaScript'],
  sections: [
    {
      label: 'Overview',
      title: 'What is this project?',
      body: [
        'This Real Estate Management Platform is a complete full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It enables users to browse, create, and manage real estate listings with a clean and intuitive interface.',
        'The project was built to demonstrate real-world business logic — from property listings and filtering to backend API design and database schema architecture.',
      ],
    },
    {
      label: 'Architecture',
      title: 'How it\'s built',
      body: 'The app follows a classic client-server architecture. The React frontend communicates with an Express REST API on the backend. MongoDB is used as the primary database with Mongoose schemas for structured data modeling.',
      list: [
        'RESTful API designed with Express — clean separation of routes, controllers, and models',
        'MongoDB schemas with Mongoose for structured real estate data (price, location, type, status)',
        'Reusable React components for listing cards, filters, and forms',
        'Environment-based configuration for easy deployment',
      ],
    },
    {
      label: 'Features',
      title: 'Key functionality',
      list: [
        'Browse and search real estate listings with filters',
        'Create, update, and delete property listings (full CRUD)',
        'Detailed property view with images, description, and metadata',
        'Backend validation and error handling on all API routes',
        'Clean, maintainable codebase with separation of concerns',
      ],
    },
    {
      label: 'Tech Stack',
      title: 'Tools & technologies',
      list: [
        'React — component-based UI with hooks and state management',
        'Node.js + Express — REST API server with modular routing',
        'MongoDB + Mongoose — NoSQL database with schema validation',
        'JavaScript (ES6+) — shared language across the full stack',
      ],
    },
    {
      label: 'Lessons',
      title: 'What I learned',
      body: [
        'This project reinforced my understanding of full-stack architecture — how the frontend, backend, and database each have distinct responsibilities and how to connect them cleanly.',
        'I focused heavily on API design patterns, MongoDB schema modeling for real-world entities, and building reusable UI components that scale.',
      ],
    },
  ],
}

export default function RealEstatePage() {
  return <ProjectLayout project={project} />
}

export const metadata = {
  title: 'Real Estate Platform — Amine Hamdi',
  description: 'Full-stack MERN application for managing real estate listings.',
}
