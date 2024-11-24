
import img from "../../../public/img.png"
import Image from "next/image"

export default function Home () {
    return (
        <section className="z-10 w-full h-[100vh] p-20 pt-40 flex flex-row items-center justify-center" id="home">
            
            <div className="w-[70%] h-96 flex flex-row items-center justify-center gap-20">
                <div className="w-full flex flex-col h-72 items-start justify-between">
                    <h1 className="font-bold text-8xl">Welcome</h1>
                    <p className="font-medium text-2xl text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corrupti eligendi fugiat sed incidunt perspiciatis assumenda repudiandae quibusdam, blanditiis distinctio,ciunt numquam.</p>
                    <div className="w-[70%] flex flex-row items-center justify-between ">
                        <button className="p-2 w-40 rounded-full bg-blue-700 text-lg font-bold">Download CV</button>
                        <button className="p-2 w-40 rounded-full border-blue-900 border-2 text-blue-700 text-lg font-bold">Hire Me</button>
                    </div>
                </div>

                <Image src={img} alt="logo" className="w-80 h-80 backdrop-blur-lg bg-blue-900    rounded-full"/>

                
            </div>


        </section>
    )
} 