import { ABOUT_CONTENT } from "../constants"
import profilePic from "../assets/Jazmin.png"

const About = () => {
    return (
        <section className="flex flex-col">
            <div className="flex items-center gap-3 mb-5 md:mb-13 md:px-19 lg:px-24 xl:px-38 2xl:px-42">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-lg text-[#63e] mr-2">01.</span> About Me</p>
                <div className="flex-1 h-px bg-[#63e]"></div>
            </div>
            <div className="md:flex items-center md:pl-16 md:pr-9 gap-4 lg:pl-22 lg:pr-15 xl:px-38 2xl:px-42">
                <div className="mb-16 md:self-start">
                    <p className="text-gray-700 flex justify-center text-lg sm:text-xl">{ABOUT_CONTENT}</p>
                </div>
                <img src={profilePic} alt="Jazmin" className="border border-[#63e] md:w-1/2 md:self-start 
                mt-9 md:mt-0 mr-5 bg-[radial-gradient(125%_125%_at_50%_10%,_white_20%,_#6366f1_100%)] rounded-full" />
                </div>
                
        </section>
    )
}

export default About