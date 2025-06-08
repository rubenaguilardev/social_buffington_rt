import { ABOUT_CONTENT } from "../constants"
import profilePic from "../assets/Jazmin.png"
import Skills from "./Skills"

const About = () => {
    return (
        <section className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44">
            <div className="flex items-center gap-3 mb-12">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] text-[#63e] mr-2 font-mono">01.</span>About Me</p>
                <div className="flex-1 h-px bg-[#63e]"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:pl-5 gap-4">
                <div className="mb-16 md:self-start">
                    <p className="text-gray-700 flex justify-center text-lg sm:text-xl">{ABOUT_CONTENT}</p>
                </div>
                <div className="w-full flex justify-center">
                    <img src={profilePic} alt="Jazmin" className="border border-[#63e]
                    bg-[radial-gradient(125%_125%_at_50%_10%,_white_20%,_#6366f1_100%)] rounded-full" />
                </div>
            </div>
             <Skills/>
        </section>
    )
}

export default About