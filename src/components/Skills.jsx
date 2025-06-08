import { SKILLS } from "../constants/index"
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Skills = () => {

    const [index, setIndex] = useState(0)

    const getRandomNum = () => Math.floor(Math.random() * 40) -20

    const images = SKILLS.map((skill, i) => (
        <img key={i} src={skill.image} className={`w-full h-full absolute object-cover rounded-3xl
        transition-all duration-300 border border-[#63e] ${index === i ? 'activeImage' : 'inactiveImage'}`}
        style={{transform: `rotate(${index === i ? 0 : getRandomNum()}deg)`}}/>
    ))

    const descriptions = SKILLS.map((desc, i) => (
        <p key={i} className={`absolute text-center sm:text-xl text-gray-600 transition-all duration-300
            ${index === i ? 'activeDesc delay-200' : 'inactiveDesc'}`}>{desc.description}</p>
    ))

    const nextImage = () => setIndex(prev => prev === images.length -1 ? 0 : prev + 1)

    const prevImage = () => setIndex(prev => prev === 0 ? images.length - 1 : prev - 1)

    return (
        <section className="relative">
            <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
                <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative">
                    {images}
                </div>
                <div className="relative sm:w-[400px] w-[320px] mt-22 lg:mt-5">
                    {descriptions}
                </div>
            </div>
            <div className="absolute flex bottom-0 lg:-bottom-20 left-1/2 -translate-1/2 gap-x-5">
                <button className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600
                hover:bg-gray-200 transition-colors" onClick={prevImage}>
                    <ArrowLeft size={18}/>
                </button >
            </div>
            <div>
                <button className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600
                hover:bg-gray-200 transition-colors" onClick={nextImage}>
                    <ArrowRight size={18}/>
                </button>
            </div>
        </section>
    )
}

export default Skills