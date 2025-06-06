
import profilePic from "../assets/Jazmin.png"
import { HERO_TEXT, } from "../constants"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Digital Marketing.', 'Social Media.', 'Photography.', 'Event Planning.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <header className="flex items-center min-h-[80vh]">  
            <div className="ml-5 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-25 lg:items-start">
                <h1 className="text-violet-700 pb-3">Hi, nice to meet you. My name is</h1>
                <h2 className="pb-3 text-4xl tracking-tighter lg:text-7xl md:text-5xl
                text-gray-950 font-semibold">Jazmin Buffington.</h2>
                <span className="bg-gradient-to-r from-gray-950 to-gray-500 bg-clip-text 
                text-3xl lg:text-7xl md:text-4xl tracking-tight text-transparent font-semibold">
                    I excel at {text}</span>
                <p className="my-2 max-w-xl py-6 text-xl leading-relaxed tracking-tight 
                text-gray-700">{HERO_TEXT}</p>
            </div>
        </header>
    )
}

export default Hero