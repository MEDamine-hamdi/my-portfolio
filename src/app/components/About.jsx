import Image from "next/image";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import node from "../../../public/node.png";
import exp from "../../../public/exp.png";
import php from "../../../public/php.png";
import py from "../../../public/py.png";
import c from "../../../public/c.png";
import java from "../../../public/java.png";
import mongo from "../../../public/mongo.png";
import sql from "../../../public/sql.png";
import android from "../../../public/andr.png";

export default function About() {
  return (
    <section className="w-full min-h-screen p-4 sm:p-6 md:p-10" id="about">

      {/* Skills Section */}
      <div className="mb-16">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-6 text-blue-600 text-left">
          Skills
        </h1>

        {/* Logos centered */}
        <div className="flex flex-col items-center">

          <div className="flex flex-wrap gap-4 justify-center">
            <Image src={js} alt="JavaScript" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={react} alt="React" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={node} alt="Node.js" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
            <Image src={exp} alt="Express" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={php} alt="PHP" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Image src={py} alt="Python" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={c} alt="C" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={java} alt="Java" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Image src={mongo} alt="MongoDB" className="w-12 h-12 sm:w-16 sm:h-16" />
            <Image src={sql} alt="SQL" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Image src={android} alt="Android" className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-6 text-blue-600 text-left">
          Projects
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              AI-Powered Textile Label Inspection System (Final Year Project)
            </h2>
            <p className="mt-2 text-sm">
              Designed and developed an AI-based system to detect and read textile
              labels using computer vision and OCR, integrating Node.js, Express,
              and FastAPI.
            </p>
          </div>

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">Real Estate Management Platform</h2>
            <p className="mt-2 text-sm">
              Full-stack MERN application for managing real estate listings with
              REST APIs and MongoDB.
            </p>
          </div>

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">Hotel Room Booking Platform</h2>
            <p className="mt-2 text-sm">
              Booking system for managing hotel rooms and reservations.
            </p>
          </div>

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">Employee Management System</h2>
            <p className="mt-2 text-sm">
              Full-stack CRUD application for managing employee records.
            </p>
          </div>

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">
              Telecom Contract Management System (Internship)
            </h2>
            <p className="mt-2 text-sm">
              Internal web application developed during internship.
            </p>
          </div>

          <div className="max-w-sm p-4 border-2 rounded-xl shadow-lg">
            <h2 className="font-bold text-lg">Todo List Application</h2>
            <p className="mt-2 text-sm">
              First full-stack MERN application with basic CRUD operations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
