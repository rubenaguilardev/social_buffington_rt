import { div } from "framer-motion/client"
import { TESTIMONIAL_CONTENT } from "../constants"

const Testimonials = () => {

    const testimonials = TESTIMONIAL_CONTENT.map(test => {
        return (
            <div>
                <h3>{test.author}</h3>
                <h4>{test.company}</h4>
                <p>{test.testimonial}</p>
            </div>)
    })

    return (
        <section className="flex">
            {testimonials}
        </section>
    )
}

export default Testimonials