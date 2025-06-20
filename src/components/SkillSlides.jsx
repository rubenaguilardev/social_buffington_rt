import { SKILL_SLIDES } from "../constants"
import { useState, useEffect } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useSwipeable } from "react-swipeable"

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

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventScrollOnSwipe: true,
        trackMouse: true
    })

    const Arrow = ({direction, onClick}) => (
        <div className="hidden sm:flex group-hover:block absolute top-[50%] translate-x-0
        translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer text-gray-300"
        style={{[direction]: '120px'}}>
        { direction === 'left' ? (
            <BsFillArrowLeftCircleFill onClick={onClick} size={30}/>
        ) : (
            <BsFillArrowRightCircleFill onClick={onClick} size={30}/>
        )}
        </div>
    )

    return(
        <section className="max-w-full h-[680px] w-full m-auto py-12 relative group md:px-15 lg:px-22 xl:px-30 2xl:px-44" 
        {...swipeHandlers}>
            <div style={{backgroundImage: `url(${SKILL_SLIDES[currentIndex].image})`}} 
            className="w-full h-full shadow-2xl bg-center 
            bg-cover duration-500">
                <div className="flex flex-col justify-center items-center h-full w-full text-white">
                    <h2 className="text-2xl font-semibold">{SKILL_SLIDES[currentIndex].title}</h2>
                    <p className="w-1/2 self-center text-center">{SKILL_SLIDES[currentIndex].description}</p>
                </div>
                
            </div>
            <Arrow direction="left" onClick={prevSlide}/>
            <Arrow direction="right" onClick={nextSlide}/>
        </section>
    )
}

export default SkillSlides