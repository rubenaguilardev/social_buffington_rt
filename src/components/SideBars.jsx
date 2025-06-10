import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa6';

const Sidebars = () => {
  const email = 'Jazmin.a.buffington@gmail.com';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden md:flex pointer-events-none">
      <div className="w-full px-8 flex justify-between">
        <div className="flex flex-col items-center justify-end text-[#00519c] pointer-events-auto">
          <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-[#413268] transition text-2xl">
            <FaLinkedin /></a>
          
          <div className="w-px h-30 bg-[#00519c] mt-4"></div>
        </div>
        <div className="flex flex-col items-center text-[#00519c] pointer-events-auto">
          <a href={`mailto:${email}`}
            className="mb-4 text-sm tracking-widest hover:text-[#413268] transition"
            style={{ writingMode: 'vertical-rl' }}>{email}</a>
          <div className="w-px h-30 bg-[#00519c] mt-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebars
