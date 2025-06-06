import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo-v.png"

const NavLinks = () => {
    return (
        <>
            <NavLink className="hover:text-violet-700 text-sm" to="/about"><span className="text-violet-700">01.</span> About</NavLink>
            <NavLink className="hover:text-violet-700" to="/gallery"><span className="text-violet-700">02. </span>Photography</NavLink>
            <NavLink className="hover:text-violet-700" to="/work"><span className="text-violet-700">03. </span>My Work</NavLink>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleNavBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="flex justify-between items-center w-full flex-wrap text-gray-950 mt-5 px-4">
            <div className="logo h-16 w-16 mb-4">
                <img src={logo} alt="logo" />
            </div>
            <div className="hidden md:flex space-x-8 font-mono text-sm">
                <NavLinks/>
            </div>
            <div className="md:hidden">
                <button onClick={toogleNavBar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            
            {isOpen && (
                <div className="flex basis-full flex-col items-center space-y-4 mt-4 font-mono text-sm">
                    <NavLinks/>
                </div>
            )}
        </nav>
    )
}

export default Nav