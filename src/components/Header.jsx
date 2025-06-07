import { HERO_TEXT, } from "../constants"
import { useTypewriter } from 'react-simple-typewriter'
import Nav from "./Nav"

const Header = () => {

    const [text] = useTypewriter({
        words: ['Digital Marketing.', 'Social Media.', 'Photography.', 'Event Planning.', 'Designing.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <header className="flex flex-col min-h-screen w-full">
            <Nav />
            <div className="flex flex-1 items-center md:px-15 lg:px-22 xl:px-30 2xl:px-44">
                <div>
                    <h1 className="text-[#6633ee] pb-3 sm:text-lg lg:text-xl font-mono">Hi, nice to meet you. My name is</h1>
                    <h2 className="pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                    tracking-tighter font-semibold text-gray-900">
                    Jazmin Buffington.
                    </h2>
                    <span className="bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text 
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight 
                    text-transparent font-semibold">I do {text}</span>
                    <p className="my-2 max-w-xl py-6 text-lg sm:text-xl leading-relaxed tracking-tight text-gray-700">
                    {HERO_TEXT}</p>
                    <button class="relative z-0 h-12 rounded-full font-semibold px-6 text-neutral-50 after:absolute 
                    after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-[#6633ee]
                    active:scale-95 active:transition active:after:scale-x-125 active:after:scale-y-150 active:after:opacity-0 
                    active:after:transition active:after:duration-500 cursor-pointer">Resume</button>
                </div>
            </div>
        </header>

    )
}

export default Header