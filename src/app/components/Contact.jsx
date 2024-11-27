import linked from '../../../public/linked.png';
import gt from '../../../public/gt.png';
import Image from "next/image"

export default function Contact() {
    return (
        <section className='p-20'id="contact">
            <h1 className='font-bold text-2xl pb-4 text-blue-600'>Contact</h1>
            <div className='flex flex-row'>
                <a href="https://www.linkedin.com/in/amine-hamdi-2842412b8/" target="_blank" rel="noopener noreferrer">
                    <Image src={linked} alt="logo" className="h-20 w-auto mr-5 rounded-lg" />
                </a>
                <a href="https://github.com/MEDamine-hamdi/" target="_blank" rel="noopener noreferrer">
                    <Image src={gt} alt="logo" className="h-20 w-auto mr-5 rounded-full" />
                </a>
            </div>
            <div className="w-[90%] sm:w-[40%] h-fit rounded-lg  p-2 mb-1 sm:mt-10 shadow-md">
            <form className="flex flex-col items-end gap-4" action="/api/submit" method="POST">
                <input
                type="text"
                id="username"
                name="username"
                placeholder="Full Name"
                className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Organization"
                className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                />
                <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                rows="4"
                className="w-full p-2 pl-5 border rounded-md bg-transparent focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
                <button
                type="submit"
                className="bg-blue-500 text-white text-sm sm:text-base font-medium w-full sm:w-32 mt-1 rounded-md h-9 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-blue-600"
                >
                Submit
                </button>
            </form>
            </div>
        </section>
    );
}