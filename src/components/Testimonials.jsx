import { div } from "framer-motion/client"
import { TESTIMONIAL_CONTENT } from "../constants"
import { useState } from 'react'

const Testimonials = () => {

    const [current, setCurrent] = useState(0)

    const testimonials = TESTIMONIAL_CONTENT.map((test, index) => (index) === current && 
        <div key={index} 
        style={{backgroundImage: `url(${test.background})`}}
        className="bg-cover bg-center text-white m-5 rounded-xl">
            <div className="flex flex-col gap-2 bg-gray-900/70 p-8
            text-md rounded-xl">
                 <h3>{test.author}</h3>
                <h4 className="mb-5">{test.company}</h4>
                <p>{test.testimonial}</p>
            </div>
           
        </div>
        )
    

    return (
        <section className="flex">
            {testimonials}
        </section>
    )
}

export default Testimonials