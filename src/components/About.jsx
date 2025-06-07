import { ABOUT_CONTENT } from "../constants"
import profilePic from "../assets/Jazmin.png"

const About = () => {
    return (
        <section className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-lg text-[#63e] mr-2">01.</span> About Me</p>
                <div className="flex-1 h-px bg-[#63e]"></div>
            </div>
            <div className="mb-16">
                <div className="flex gap-3 mb-8">
                </div>
                <p className="text-gray-700 flex justify-center text-lg">{ABOUT_CONTENT}</p>
            </div>
            <img src={profilePic} alt="Jazmin" className="border border-[#63e] 
            bg-[radial-gradient(125%_125%_at_50%_10%,_white_20%,_#6366f1_100%)] rounded-full" />
        </section>
    )
}

export default About