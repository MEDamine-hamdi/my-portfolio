export default function About() {
  return (
    <section className="w-full min-h-screen p-4 sm:p-6 md:p-10" id="about">

      {/* Skills Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">
          Skills
        </h1>

        <div className="text-center max-w-3xl space-y-2">
          <p><b>Frontend:</b> React, JavaScript, HTML, CSS</p>
          <p><b>Backend:</b> Node.js, Express, REST APIs</p>
          <p><b>Database:</b> MongoDB, SQL</p>
          <p><b>Languages:</b> JavaScript, Python, C, Java, PHP</p>
          <p><b>Tools:</b> Git, GitHub, Docker, Vercel</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-6 text-blue-600">
          Projects
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">

          {/* PFE / Final Year Project */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              AI-Powered Textile Label Inspection System (Final Year Project)
            </h2>
            <p className="mt-2 text-sm">
              Designed and developed an AI-based system to automatically detect
              and read textile labels using computer vision and OCR. Built backend
              services using Node.js, Express, and FastAPI, and trained object
              detection models on an augmented dataset to achieve high accuracy.
            </p>
            <a href="/inspectag" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

          {/* Real Estate */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Real Estate Management Platform
            </h2>
            <p className="mt-2 text-sm">
              Full-stack MERN application for managing real estate listings.
              Implemented RESTful APIs and MongoDB schemas with a focus on clean
              architecture and scalability.
            </p>
            <a href="/real-estate" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

          {/* Hotel Booking */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Hotel Room Booking Platform
            </h2>
            <p className="mt-2 text-sm">
              Developed a full-stack booking system to manage hotel rooms and
              reservations, focusing on backend logic, data consistency, and
              maintainability.
            </p>
            <a href="/hotel-booking" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

          {/* Employee Management */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Employee Management System
            </h2>
            <p className="mt-2 text-sm">
              Built a full-stack MERN application to manage employee records with
              complete CRUD functionality and structured database design.
            </p>
            <a href="/employee-management" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

          {/* Tuntel Internship */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Telecom Contract Management System (Internship)
            </h2>
            <p className="mt-2 text-sm">
              Developed an internal web application during internship to manage
              telecommunications contracts, implementing CRUD features and REST APIs.
            </p>
            <a href="/tuntel" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

          {/* Todo App */}
          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Todo List Application
            </h2>
            <p className="mt-2 text-sm">
              My first full-stack MERN application implementing basic CRUD
              operations and frontend-backend integration.
            </p>
            <a href="/todo-app" className="text-blue-600 mt-3 inline-block">
              View Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
