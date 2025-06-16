import { PHOTOS } from "../constants/photos.jsx"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {

    const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    originalAlt: 'Hi'
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  
  
];

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
            />;
        </section>
        
    )
}

export default Gallery



