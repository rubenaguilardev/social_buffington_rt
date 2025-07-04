import { ABOUT_CONTENT } from "../constants"
import profilePic from "../assets/Jazmin.png"

const About = () => {
    return (
        <section id='about' className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44 px-4">
            <div className="flex items-center gap-3 mb-12">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] mr-2 text-custom">01.</span>About Me</p>
                <div className="flex-1 h-px bg-[#00519c]"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:pl-7 gap-4">
                <div className="w-full flex justify-center sm:pr-5 mb-10">
                    <img src={profilePic} alt="Jazmin" className="rounded-2xl shadow-xl" />
                </div>
                <div className="md:self-start sm:pr-5">
                    <p className="text-gray-700 flex justify-center text-lg sm:text-xl">{ABOUT_CONTENT}</p>
                </div>
            </div>
        </section>
    )
}

export default About