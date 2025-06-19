import { TESTIMONIAL_CONTENT } from "../constants"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'


const Testimonials = () => {

    return (
        <section className="flex items-center justify-center flex-col mt-40 mb-20">
            <h2 className="text-4xl font-semibold mb-10 text-gray-900 text-center">Check out what my colleagues have to say</h2>
            <Swiper
                slidesPerView="auto"
                spaceBetween={15}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="w-[90%] lg:max-w-[90%]"
            >
                {TESTIMONIAL_CONTENT.map((test, index) => (
                    <SwiperSlide key={index} className="!w-[415px] lg:!w-[450px]">
                        <div className="flex flex-col group relative shadow-lg text-white rounded-xl px-5 py-8
                        h-[450px] lg:h-[500px] cursor-pointer mb-20">
                            <div className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${test.background})` }} />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <h2 className="text-xl lg:text-2xl">{test.author}</h2>
                                <h3 className="text-lg lg:text-xl">{test.company}</h3>
                                <p className="lg:text-[18px]">{test.testimonial}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
        </section>
    )
}

export default Testimonials