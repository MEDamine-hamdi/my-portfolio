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

import Image from "next/image"

export default function About () {
    return (
        <section className="w-full h-[80vh] p-20" id="about">
            <div>
                <h1 className='font-bold text-2xl pb-4 text-blue-600'>Skills</h1>
                <div className='flex flex-row item-center pb-8'>
                    <Image src={js} alt="logo" className='h-20 w-auto mr-2' />
                    <Image src={react} alt="logo" className='h-20 w-auto mr-2' />
                    <Image src={node} alt="logo" className="h-20 w-auto bg-slate-300 rounded-xl mr-3"/>
                    <Image src={exp} alt="logo" className='h-20 w-auto mr-3'  />
                    <Image src={php} alt="logo" className='h-20 w-auto mr-3'  />
                </div>
                <div className='flex flex-row item-center pb-8'>
                    <Image src={py} alt="logo" className='h-20 w-auto mr-2' />
                    <Image src={c} alt="logo" className='h-20 w-auto mr-2' />
                    <Image src={java} alt="logo" className="h-20 w-auto bg-slate-300 rounded-xl mr-3"/>
                </div>
                <div className='flex flex-row item-center pb-8'>
                    <Image src={mongo} alt="logo" className='h-20 w-auto mr-2' />
                    <Image src={sql} alt="logo" className='h-20 w-auto mr-2' />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-2xl pb-4 text-blue-600'>Projects</h1>
                <div>
                    
                </div>
            </div>
        </section>
    )
}