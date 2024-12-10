import img from "../../../public/img.png";
import Image from "next/image";

export default function Home() {
    return (
        <section
            className="z-10 w-full h-screen px-4 sm:px-8 md:px-7 pt-10 md:pt-5 flex flex-col md:flex-row items-center justify-center"
            id="home"
        >
            {/* Content Section */}
            <div className="w-full md:w-[70%] h-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-between">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">Welcome</h1>
                    <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 text-justify mt-4">
                        My name is Amine, a motivated computer sciences student with a passion for building creative and efficient applications. Skilled in technologies like React, Node.js, and MongoDB, I focus on delivering user-friendly and impactful solutions. With a strong commitment to learning and growth, I approache every project with dedication, simplicity, and precision.
                    </p>
                    <div className="w-full sm:w-[70%] flex flex-row items-center justify-between mt-6">
                        <button className="p-2 w-full sm:w-42 rounded-full bg-blue-700 text-sm sm:text-lg font-bold text-white">
                            <a href="/cv_Hamdi_Mohamed_Amine.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a>
                        </button>
                        <button className="p-2 w-full sm:w-40 rounded-full border-blue-900 border-2 text-blue-700 text-sm sm:text-lg font-bold">
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <Image
                    src={img}
                    alt="logo"
                    className="hidden md:block w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 backdrop-blur-lg bg-blue-900 rounded-full"
                />
            </div>
        </section>
    );
}
