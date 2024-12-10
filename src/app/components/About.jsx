import php from '../../../public/php.png';
import exp from '../../../public/exp.png';
import js from '../../../public/js.png';
import react from '../../../public/react.png';
import node from '../../../public/node.png';
import py from '../../../public/py.png';
import c from '../../../public/c.png';
import java from '../../../public/java.png';

import sql from '../../../public/sql.png';
import mongo from '../../../public/mongo.png';

import Image from "next/image";

export default function About() {
    return (
        <section className="w-full min-h-screen p-4 sm:p-6 md:p-10" id="about">
            {/* Skills Section */}
            <div>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">Skills</h1>
                <div className="flex flex-wrap gap-4 items-center justify-start">
                    <Image src={js} alt="JavaScript Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={react} alt="React Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={node} alt="Node.js Logo" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
                    <Image src={exp} alt="Express Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={php} alt="PHP Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-start mt-4">
                    <Image src={py} alt="Python Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={c} alt="C Language Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={java} alt="Java Logo" className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-300 rounded-xl" />
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-start mt-4">
                    <Image src={mongo} alt="MongoDB Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <Image src={sql} alt="SQL Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
            </div>

            {/* Projects Section */}
            <div className="mt-8">
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">Projects</h1>
                <div>
                    {/* Add project-related content */}
                </div>
            </div>
        </section>
    );
}
