import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

const NavLinks = () => {
    return (
        <>
            <NavLink className="hover:text-[#6633ee] flex flex-col md:flex-row" to="/about">
            <span className="text-[#6633ee] text-center text-md font-mono mb-1 pr-2">01.</span>About</NavLink>
            <NavLink className="hover:text-[#6633ee] flex flex-col md:flex-row" to="/gallery">
            <span className="text-[#6633ee] text-center text-md font-mono mb-1 pr-2">02.</span>Photography</NavLink>
            <NavLink className="hover:text-[#6633ee] flex flex-col md:flex-row" to="/work">
            <span className="text-[#6633ee] text-center text-md font-mono mb-1 pr-2">03.</span>My Work</NavLink>
             <NavLink className="hover:text-[#6633ee] flex flex-col md:flex-row" to="/contact">
            <span className="text-[#6633ee] text-center text-md font-mono mb-1 pr-2">04.</span>Contact</NavLink>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="flex justify-between w-full items-center text-gray-900 mt-5">
            <img src={logo} alt="logo" className="z-41 h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18"/>
            <div className="items-center hidden md:flex space-x-8 font-mono text-md">
                <NavLinks/>
            </div>
            <div className="md:hidden">
                <button onClick={toogleNavBar} className="text-[#6633ee] p-2 cursor-pointer">
                    <Menu size={32}/>
                </button> 
            </div>
            
            {isOpen && (
                <div className="fixed inset-0 z-40 backdrop-blur-lg">
                    <div className="fixed top-0 right-0 w-[30vh] h-full 
                    bg-[radial-gradient(125% 125% at 70% 90%, #fff 35%, #6366f1 100%)] 
                    text-lg shadow-xl">
                        <div className="flex flex-col justify-end p-2">
                            <button onClick={toogleNavBar} className="text-[#6633ee] self-end pr-6 pt-7 mb-5">
                                <X size={32}/>
                            </button>
                            <div className="flex flex-1 flex-col items-center justify-center mt-8 text-xl 
                            space-y-7 font-semibold">
                                <NavLinks/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}


        </nav>
    )
}

export default Nav