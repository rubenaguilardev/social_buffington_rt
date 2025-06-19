import { PHOTOS } from "../constants/photos.jsx"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {


    return (
        
        <section id='#work' className=''>
            <section id='about' className="flex flex-col md:px-15 lg:px-22 xl:px-30 2xl:px-44">
                <div className="flex items-center gap-3 mb-12">
                    <p className="text-3xl font-semibold text-gray-900">
                    <span className="text-[1.5rem] mr-2 text-custom">03.</span>Photography</p>
                    <div className="flex-1 h-px bg-[#00519c]"></div>
                </div>
            </section>
            <ImageGallery items={PHOTOS}
                showPlayButton={true}
                showIndex={true}
                slideOnThumbnailOver={true}
            />
        </section>
        
    )
}

export default Gallery



