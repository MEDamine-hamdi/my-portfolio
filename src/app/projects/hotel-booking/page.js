import ProjectLayout from "@/components/ProjectLayout";

export const metadata = {
  title: "Hotel Booking Platform — Amine Hamdi",
  description: "End-to-end hotel room booking system with reservations and admin dashboard.",
};

const project = {
  title: "Hotel Room Booking Platform",
  category: "full-stack web app",
  summary:
    "An end-to-end hotel management and booking system. Guests can browse available rooms, check availability, and make reservations. Hotel staff get a full admin dashboard for managing rooms, bookings, and guest records.",
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
      icon: "🛏️",
      title: "Room Availability",
      desc: "Real-time room availability tracking with date-based filtering for check-in and check-out.",
    },
    {
      icon: "📅",
      title: "Reservation System",
      desc: "Full reservation flow — guests can book, modify, and cancel their stays.",
    },
    {
      icon: "🗂️",
      title: "Admin Dashboard",
      desc: "Hotel staff can manage rooms, view all bookings, and handle guest records from one place.",
    },
    {
      icon: "🔐",
      title: "Role-Based Auth",
      desc: "Separate access for guests and admins, secured with JWT authentication.",
    },
  ],
  links: [],
};

export default function HotelBookingPage() {
  return <ProjectLayout project={project} />;
}