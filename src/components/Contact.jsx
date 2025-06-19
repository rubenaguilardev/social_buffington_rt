import { section } from "framer-motion/client"
import emailjs from 'emailjs-com'
import { useState } from 'react'
import {FAMILY }from '../constants/photos'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const SERVICE_ID = 'service_sxadgqs'
    const TEMPLATE_ID = 'template_2v3s2dq'
    const PUBLIC_KEY = 'TjiFoy8zhupcvv7ez'
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert('Message Sent!')
            setFormData({name: '', email: '', message: ''})
        }).catch(() => alert('Oops! Something went wrong. Please try again.'))
    }
    return (
        <>
        <section id='contact' className='flex items-center justify-center py-20'>
            <div className="px-4 w-150">
                <h2>Get In Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} 
                        className="w-full bg-white/5 border border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none 
                        focus:border-blue-900 focus:bg-blue-900/5" placeholder="Name..."
                        onChange={e => setFormData({...formData, name: e.target.value})}/>
                    </div>
                    <div className="relative">
                        <input type="email" id='email' name="email" required value={formData.email}
                        className="w-full bg-white/5 border
                        border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none 
                        focus:border-blue-900 focus:bg-blue-900/5" placeholder="example@gmail.com"
                        onChange={e => setFormData({...formData, email: e.target.value})}/>
                    </div>
                     <div className="relative">
                        <textarea
                            type="email" id='message' name="message" required rows={5} value={formData.message}
                            className="w-full bg-white/5 border
                            border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none 
                            focus:border-blue-900 focus:bg-blue-900/5" placeholder="Your Message..."
                            onChange={e => setFormData({...formData, message: e.target.value})}/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium
                    transition relative overflow-hidden hover: translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
            
        </section>
        <div className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44 px-4">
            <img src={FAMILY} alt="" className="rounded-2xl shadow-xl"  />
        </div>
        
        </>
    )
}

export default Contact