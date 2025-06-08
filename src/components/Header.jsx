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
            <main className="flex flex-1 items-center md:px-15 lg:px-22 xl:px-30 2xl:px-44">
                <div>
                    <h1 className="text-[#6633ee] pb-2 text-md sm:text-xl lg:text-xl font-mono">Hi, nice to meet you. My name is</h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                    tracking-tighter font-semibold text-gray-900 pb-1">
                    Jazmin Buffington.
                    </h2>
                    <p className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text 
                    text-[1.65rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight py-1
                    text-transparent font-semibold">I excel in {text}</p>
                    <p className="my-2 max-w-3xl pt-1 pb-9 text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700">
                    {HERO_TEXT}</p>
                    <button class="group relative h-12 cursor-pointer overflow-hidden overflow-x-hidden rounded-md 
                    bg-gray-900 px-8 py-2 text-gray-300 font-semibold font-['Inter']"><span class="relative z-10">
                    Resume</span><span class="absolute inset-0 overflow-hidden rounded-md">
                    <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#63e] 
                    transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                </div>
            </main>
        </header>

    )
}

export default Header