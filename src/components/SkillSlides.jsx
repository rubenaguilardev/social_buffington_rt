
import { div } from "framer-motion/client"
import { SKILL_SLIDES } from "../constants"
import { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const SkillSlides = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(autoplay)
    }, [currentIndex])

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === 0 ? SKILL_SLIDES.length - 1 : prevIndex - 1
        ))
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === SKILL_SLIDES.length - 1 ? 0 : prevIndex + 1
        ))
    }

    const Arrow = ({direction, onClick}) => (
        <div className="hidded group-hover:block absolute top-[50%] translate-x-0
        translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer"
        style={{[direction]: '20px'}}>
        { direction === 'left' ? (
            <BsFillArrowLeftCircleFill onClick={onClick} size={25}/>
        ) : (
            <BsFillArrowRightCircleFill onClick={onClick} size={25}/>
        )}
        </div>
    )

    return(
        <section className="max-w-full h-[780px] w-full m-auto py-16 relative group">
            <div style={{backgroundImage: `url(${SKILL_SLIDES[currentIndex].image})`}} 
            className="w-full h-full rounded-2xl shadow-2xl bg-center 
            bg-cover dureaction-500"></div>
            <Arrow direction="left" onClick={prevSlide}/>
            <Arrow direction="right" onClick={nextSlide}/>
        </section>
    )
}

export default SkillSlides