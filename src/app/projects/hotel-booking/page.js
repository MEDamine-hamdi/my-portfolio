import ProjectLayout from '@/components/ProjectLayout'

const project = {
  num: '03',
  title: 'HOTEL ROOM\nBOOKING',
  tagline: 'A full-stack MERN booking platform for managing hotel rooms and reservations — handling real-time availability, room management, and user reservations.',
  category: 'Web Application',
  accent: '#f78166',
  github: 'https://github.com/MEDamine-hamdi/Hotel-Room-Booking-Platform-MERN-',
  tags: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API', 'JavaScript'],
  sections: [
    {
      label: 'Overview',
      title: 'What is this project?',
      body: [
        'The Hotel Room Booking Platform is a MERN stack web application that simulates a real hotel management system. It allows users to view available rooms, make reservations, and manage bookings through a clean interface.',
        'The backend handles reservation logic, room availability checks, and data persistence — while the React frontend provides a smooth booking experience.',
      ],
    },
    {
      label: 'Architecture',
      title: 'How it\'s built',
      body: 'Built with a standard MERN architecture — React on the frontend communicating with an Express API that handles room data, bookings, and availability logic. All data is persisted in MongoDB.',
      list: [
        'RESTful API with dedicated routes for rooms, bookings, and availability',
        'MongoDB collections for rooms and reservations with relational references',
        'React frontend with dynamic room listing and booking form',
        'Date-based availability logic on the backend to prevent double bookings',
      ],
    },
    {
      label: 'Features',
      title: 'Key functionality',
      list: [
        'Browse available hotel rooms with details (type, price, capacity)',
        'Book a room for specified check-in and check-out dates',
        'Room availability validation — prevents overlapping reservations',
        'Manage existing bookings (view, update, cancel)',
        'Admin-style room management (create, edit, delete rooms)',
      ],
    },
    {
      label: 'Tech Stack',
      title: 'Tools & technologies',
      list: [
        'React — dynamic UI with date pickers and real-time feedback',
        'Node.js + Express — REST API with booking and availability logic',
        'MongoDB + Mongoose — collections for rooms, users, and bookings',
        'JavaScript (ES6+) — consistent across client and server',
      ],
    },
    {
      label: 'Lessons',
      title: 'What I learned',
      body: [
        'This project pushed me to think about data relationships in MongoDB — specifically linking rooms to bookings and querying availability across date ranges.',
        'I also improved my understanding of state management in React for a multi-step booking flow, and practiced writing clean, modular Express controllers.',
      ],
    },
  ],
}

export default function HotelBookingPage() {
  return <ProjectLayout project={project} />
}

export const metadata = {
  title: 'Hotel Room Booking — Amine Hamdi',
  description: 'Full-stack MERN hotel room booking and reservation platform.',
}
