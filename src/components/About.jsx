import { ABOUT_CONTENT } from "../constants"
import profilePic from "../assets/Jazmin.png"

const About = () => {
    return (
        <section className="sm:ml-9 md:ml-18 lg:ml-26 xl:ml-27 lg:items-start
        justify-center ">
            <div className="flex gap-3 justify-center mb-8">
                <p className="text-3xl font-semibold text-gray-950"><span className="text-lg text-violet-700">01.</span> About Me</p>
                <div className="w-60 h-px bg-gray-500 mt-4"></div>
            </div>
            <p className="text-gray-700 flex justify-center pb-8">{ABOUT_CONTENT}</p>
            <img src={profilePic} alt="Jazmin" className="border border-gray-300 rounded-full" />
        </section>

    )
}

export default About