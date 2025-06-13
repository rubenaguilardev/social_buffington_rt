import { useState } from 'react'
import { MY_WORK } from "../constants/index"
import { div } from 'framer-motion/client'


const Work = ({work}) => {

    const [activeTab, setActiveTab] = useState(0)

    const renderContent = section => {
        if (section.id === 0) {
            return section.content.map((instagram, index) => (
                <div key={index}>
                    <div>
                        <img src={instagram.image}/>
                        <p>{instagram.description}</p>
                    </div>
                </div>
            ))
        } else if (section.id === 1) {
            return section.content.map((img, index) => (
                <img key={index} src={img} className='w-2/3 rounded-2xl shadow-xl'/>)
        )} else {
            return (
                <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4">
                    {section.content.map((blog, index) => (
                    <div key={index} className="inline-flex flex-col w-[75vw] max-w-md shrink-0 rounded-b-lg
                    bg-white shadow-lg p-4 text-center">
                        <img src={blog.image} className="w-full h-auto object-cover rounded-md mb-3"
                        alt={`blog-${index}`}/>
                        <a href='#'><p className="text-gray-700 text-sm">{blog.description}</p></a>
                    </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <section id='#work' className=''>
           <section id='about' className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44">
            <div className="flex items-center gap-3 mb-12">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] mr-2 text-custom">02.</span>My Work</p>
                <div className="flex-1 h-px bg-[#00519c]"></div>
            </div>
        </section>
        <div className='flex justify-center border rounded-t-lg bg-gray-900'>
            <div className='flex flex-wrap'>
                {work.map((type, index) => (
                    <button 
                        key={index}
                        className={`py-3 px-6 font-medium text-sm duration-300 cursor-pointer ${activeTab === index ?
                        "border-b-4 border-custom text-gray-300 bg-gray-900" : 
                        "text-gray-500 hover:text-gray-300 hover:bg-custom hover:bg-opacity-10"} `}
                        onClick={() => setActiveTab(index)}>
                        {type.label}
                    </button>
                ))}
            </div>
        </div>
        <div className='flex flex items-center gap-12 overflow-visible pb-10'>{renderContent(work[activeTab])}</div>
        
    </section>
    )
}

export default Work