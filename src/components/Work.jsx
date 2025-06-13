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
                <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 scroll-smooth hide-scrollbar">
                    {section.content.map((blog, index) => (
                    <a href={blog.url}><div key={index} 
                    className="snap-center shrink-0 flex flex-col w-[75vw] max-w-md rounded-lg bg-white 
                    shadow-md p-4 text-center">
                        <img src={blog.image} className="w-full h-full object-cover rounded-md mb-4"
                        alt={`blog-${index}`}/>
                        <p className="text-gray-700 text-sm">{blog.description}</p>
                    </div></a> ))}
                </div>
                )
            }
    }

    return (
        <section id='#work' className='md:px-15 lg:px-22 xl:px-30 2xl:px-44 mb-12'>
           <section id='about' className="flex flex-col">
            <div className="flex items-center gap-3 mb-12">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] mr-2 text-custom">02.</span>My Work</p>
                <div className="flex-1 h-px bg-[#00519c]"></div>
            </div>
        </section>
        <div className='flex justify-center border border-custom rounded-t-2xl bg-gray-900'>
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
        <div className='flex flex items-center overflow-visible pt-4 pl-4 rounded-b-2xl bg-gray-900'>
            {renderContent(work[activeTab])}
        </div>
        
    </section>
    )
}

export default Work