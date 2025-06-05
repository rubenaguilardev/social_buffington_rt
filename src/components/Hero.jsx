import profilePic from "../assets/Jazmin.png"
import { HERO_CONTENT } from "../constants"

const Hero = () => {
    return (
        <div className="pb-4 mt-16">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePic} alt="Profile picture" className="border border-stone-300 rounded-3xl"/>
                    </div> 
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-6xl text-gray-950">Jazmin Buffington</h2>
                        <span className="bg-gradient-to-r from-gray-950 to-gray-500 bg-clip-text 
                        text-3xl tracking-tight text-transparent">Digital Marketing</span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-gray-700">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero