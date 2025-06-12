import { div } from 'framer-motion/client'
import { useState } from 'react'

const Work = ({work}) => {

    const [activeTab, setActiveTab] = useState(0)

    const renderContent = (content) => (
        <div>
            <h2>{content.title}</h2>
            <div>{content.media}</div>
        </div>
    )

    return (
        <section id='#work' className=''>
           <section id='about' className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44">
            <div className="flex items-center gap-3 mb-12">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] mr-2 text-custom">02.</span>My Work</p>
                <div className="flex-1 h-px bg-[#00519c]"></div>
            </div>
           
            
           
        </section>
        <div className='flex flex-wrap'>
            {work.map((type, index) => (
                <button 
                    key={index}
                    className={`py-3 px-6 font-medium text-sm duration-300 cursor-pointer ${activeTab === index ?
                    "border-b-2 border-custom text-gray-300 bg-gray-900" : 
                    "text-gray-400 hover:text-gray-300 hover:bg-custom hover:bg-opacity-10"} `}
                    onClick={() => setActiveTab(index)}>
                    {type.label}
                </button>
            ))}
        </div>
         
        <div>{renderContent(work[activeTab].content)}</div>
    </section>
    )
}

export default Work