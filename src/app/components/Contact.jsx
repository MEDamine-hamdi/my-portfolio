import linked from '../../../public/linked.png';
import gt from '../../../public/gt.png';
import Image from "next/image";

export default function Contact() {
    return (
        <section className="p-4 sm:p-8 md:p-20" id="contact">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl pb-4 text-blue-600">Contact</h1>
            {/* Social Links Section */}
            <div className="flex flex-wrap gap-4 mb-8 items-center">
                <a
                    href="https://www.linkedin.com/in/amine-hamdi-2842412b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={linked}
                        alt="LinkedIn logo"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg"
                    />
                </a>
                <a
                    href="https://github.com/MEDamine-hamdi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={gt}
                        alt="GitHub logo"
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full"
                    />
                </a>
            </div>

            {/* Contact Form Section */}
            <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto rounded-lg p-4 shadow-md">
                <form
                    className="flex flex-col gap-4"
                    action="https://usebasin.com/f/6be6aad8ee4b"
                    method="POST"
                >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        placeholder="Organization"
                        className="w-full p-2 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here"
                        rows="4"
                        className="w-full p-2 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white text-sm sm:text-base font-medium w-full sm:w-32 h-10 rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
