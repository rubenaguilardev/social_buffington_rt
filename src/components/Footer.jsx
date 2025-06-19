import { section } from 'framer-motion/client';
import { FaLinkedin, FaEnvelope} from 'react-icons/fa6';

const Footer = () => {
    return (
        <section className='ml-3'>
            <div className='flex gap-8 mb-5'>
                <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-[#413268] 
                transition text-4xl text-blue-500 ">
                <FaLinkedin />
            
                </a>
                <a href='#' className='transition text-4xl text-blue-500'>
                <FaEnvelope/>
                </a>
            </div>
            
            
            <h4 className='text-center mb-4 text-xs'>© 2025 Social Buffington. All rights reserved.</h4>
        </section>
        
    )
}

export default Footer