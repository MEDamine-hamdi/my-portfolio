import php from '../../../public/php.png';
import exp from '../../../public/exp.png';
import js from '../../../public/js.png';
import react from '../../../public/react.png';
import node from '../../../public/node.png';
import py from '../../../public/py.png';
import c from '../../../public/c.png';
import java from '../../../public/java.png';
import heart from '../../../public/heart.jpg';
import tuntel from '../../../public/tuntel.png'; // Import the image
import sql from '../../../public/sql.png';
import mongo from '../../../public/mongo.png';
import android from '../../../public/andr.png';
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full min-h-screen p-4 sm:p-6 md:p-10" id="about">
            {/* Skills Section */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">Skills</h1>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    <Image src={js} alt="JavaScript Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={react} alt="React Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={node} alt="Node.js Logo" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
                    <Image src={exp} alt="Express Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={php} alt="PHP Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <Image src={py} alt="Python Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={c} alt="C Language Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={java} alt="Java Logo" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <Image src={mongo} alt="MongoDB Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={sql} alt="SQL Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
                    <Image src={android} alt="MongoDB Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
            </div>

            {/* Projects Section */}
            <div className="mt-8">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">Projects</h1>
                <div className="flex flex-wrap gap-8 justify-center">
                    {/* Tuntel Website Project */}
                    <div className="max-w-xs p-4 border-2 rounded-xl text-center shadow-lg">
                        <Image src={tuntel} alt="Tuntel Logo" className="w-full h-auto rounded-xl mb-4" />
                        <h2 className="font-bold text-lg">Tuntel Website</h2>
                        <p className="mt-2">A contract management application for Tuntel, aimed at improving telecommunications contract management and user engagement.</p>
                        <a href="/tuntel" className="text-blue-600 mt-4 block">View Project</a>
                    </div>

                    {/* Heart Disease Detection AI Project */}
                    <div className="max-w-xs p-4 border-2 rounded-xl text-center shadow-lg">
                        <Image src={heart} alt="Tuntel Logo" className="w-full h-auto rounded-xl mb-4" />
                        <h2 className="font-bold text-lg">Heart Disease Detection with AI</h2>
                        <p className="mt-2">Using machine learning to predict and detect heart disease based on medical data, providing health insights.</p>
                        <a href="/heart-disease-ai" className="text-blue-600 mt-4 block">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
