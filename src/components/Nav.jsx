import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"

const NavLinks = () => {
    return (
        <>
            <a href="#about" className="hover:text-[#00519c] flex flex-col md:flex-row">
            <span className="text-[#00519c] mb-1 pr-1">01.</span>About</a>
            <a href="#Photography" className="hover:text-[#00519c] flex flex-col md:flex-row" to="/gallery">
            <span className="text-[#00519c] mb-1 pr-1">02.</span>Photography</a>
            <a href="#work"className="hover:text-[#00519c] flex flex-col md:flex-row" to="/work">
            <span className="text-[#00519c] mb-1 pr-1">03.</span>My Work</a>
             <a href="#contact" className="hover:text-[#00519c] flex flex-col md:flex-row" to="/contact">
            <span className="text-[#00519c] mb-1 pr-1">04.</span>Contact</a>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="flex justify-between w-full items-center text-gray-900 mt-6">
          <a href="#home"><img src={logo} alt="logo" className="z-41 h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18"/></a> 
            <div className="items-center hidden md:flex space-x-8 text-sm font-medium pr-4">
                <NavLinks/>
            </div>
            <div className="md:hidden">
                <button onClick={toogleNavBar} className="text-custom p-2 cursor-pointer">
                    <Menu size={32}/>
                </button> 
            </div>
            
            {isOpen && (
                <div className="fixed inset-0 z-40 backdrop-blur-sm">
                    <div className="fixed top-0 right-0 w-[35vh] h-full bg-white text-lg shadow-md">
                        <div className="flex flex-col justify-end p-2">
                            <button onClick={toogleNavBar} className="text-custom self-end pr-6 pt-7 mb-5">
                                <X size={32}/>
                            </button>
                            <div className="flex flex-1 flex-col items-center justify-center mt-8 text-xl 
                            text-center space-y-6">
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