import { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'


const Work = ({work, workTop}) => {

    const [activeTab, setActiveTab] = useState(0)

    const renderContent = section => {
        if (section.id === 0) {
            return section.content.map((instagram, index) => (
                <div key={index}>
                    <div>
                        <InstagramEmbed url={instagram} width='100%'/>
                    </div>
                </div>
            ))
        } else if (section.id === 1) {
            return (
                <div className="flex snap-x snap-mandatory overflow-x-auto gap-2 pb-4 scroll-smooth 
                hide-scrollbar items-start">
                    
                    <img key={'one'} src={section.content[0]}
                        className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
                    <img key={'two'} src={section.content[1]}
                    className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
                    <div className='flex flex-col gap-[.6rem]'>
                        <img key={'three'} src={section.content[2]}
                        className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
                        <img key={'four'} src={section.content[5]}
                     
                        className="snap-center max-w-md rounded-lg object-cover w-[50%]"/>
                    </div>
                    <div className='flex flex-col gap-[.6rem]'>
                        <img key={'five'} src={section.content[3]}
                        className="snap-center shrink-0 w-[83.5vw] max-w-md rounded-lg object-cover"/>
                        <img key={'six'} src={section.content[4]}
                     
                        className="snap-center shrink-0 w-[83.5vw] max-w-md rounded-lg object-cover"/>
                    </div>
                     
                </div>
            )
        } else {
            return (
                <div className="flex snap-x snap-mandatory overflow-x-auto gap-2 pb-4 scroll-smooth hide-scrollbar">
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
        <section id='#work' className='md:px-15 lg:px-22 xl:px-30 2xl:px-44 mb-10'>
           <section id='about' className="flex flex-col">
            <div className="flex items-center gap-3 mb-10">
                <p className="text-3xl font-semibold text-gray-900">
                <span className="text-[1.5rem] mr-2 text-custom">02.</span>My Work</p>
                <div className="flex-1 h-px bg-[#00519c]"></div>
            </div>
        </section>
        <div>
            <p>{workTop[0].description}</p>
            <img src={workTop[0].image} alt="" />
        </div>
        <div>
            <p>{workTop[1].description}</p>
            <img src={workTop[1].image} alt="" />
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-wrap'>
                {work.map((type, index) => (
                    <button 
                        key={index}
                        className={`py-3 px-6 font-medium text-sm duration-300 cursor-pointer rounded-t-lg
                        ${activeTab === index ? "text-gray-300 bg-gray-800" : 
                        "text-gray-500 hover:text-gray-300 hover:bg-custom hover:bg-opacity-10"} `}
                        onClick={() => setActiveTab(index)}>
                        {type.label}
                    </button>
                ))}
            </div>
        </div>
    
        <div className='flex flex items-center overflow-visible pt-4 pl-4 rounded-2xl bg-gray-800 pr-4'>
            {renderContent(work[activeTab])}
        </div>
        
    </section>
    )
}

export default Work