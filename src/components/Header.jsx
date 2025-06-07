import { HERO_TEXT, } from "../constants"
import { useTypewriter } from 'react-simple-typewriter'
import Nav from "./Nav"

const Header = () => {

    const [text] = useTypewriter({
        words: ['Digital Marketing.', 'Social Media.', 'Photography.', 'Event Planning.', 'Design.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <header className="flex flex-col min-h-screen w-full">
            <Nav />
            <hero className="flex flex-1 items-center md:px-15 lg:px-22 xl:px-30 2xl:px-44 -mt-10">
                <div>
                    <h1 className="text-[#6633ee] pb-3 sm:text-lg lg:text-xl font-mono">Hi, nice to meet you. My name is</h1>
                    <h2 className="pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                    tracking-tighter font-semibold text-gray-900">
                    Jazmin Buffington.
                    </h2>
                    <span className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text 
                    text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight 
                    text-transparent font-semibold">I excel in all things {text}</span>
                    <p className="my-2 max-w-3xl py-6 text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700">
                    {HERO_TEXT}</p>
                    <button class="group relative h-12 cursor-pointer overflow-hidden overflow-x-hidden rounded-md 
                    bg-gray-900 px-8 py-2 text-neutral-50"><span class="relative z-10">
                    Resume</span><span class="absolute inset-0 overflow-hidden rounded-md">
                    <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#63e] 
                    transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                </div>
            </hero>
        </header>

    )
}

export default Header