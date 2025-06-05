import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa6'

export default function Socials() {
  return (
    <div className="fixed bottom-0 left-8 z-50 hidden lg:flex flex-col items-center text-gray-950 text-2xl">
      <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-[#AD6DF4] transition">
        <FaLinkedin/>
      </a>
      <a href="https://instagram.com" className="mb-4 hover:text-[#AD6DF4] transition">
        <FaInstagram/>
      </a>
      <a href="https://facebook.com" className="mb-4 hover:text-[#AD6DF4] transition">
        <FaFacebook/>
      </a>
      <div className="w-px h-24 bg-gray-500 mt-4"></div>
    </div>
  )
}