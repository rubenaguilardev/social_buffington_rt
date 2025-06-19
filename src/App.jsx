
import Header from "./components/Header"
import SideBars from "./components/SideBars"
import About from "./components/About"
import SkillSlides from "./components/SkillSlides"
import Work from "./components/Work"
import Gallery from "./components/Gallery"
import { MY_WORK, MY_WORK_TOP } from "./constants/index"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"


const App = () => {
  return (
    <div id="home" className="overflow-x-hidden antialiased scroll-smooth">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(125% 125% at 50% 90%, #fff 48%, #0080ff 100%)"}}/>
        </div>
      </div>
      <div className="sm:px-6">
        <Header />
        <SideBars />
        <About/>
        <SkillSlides/>
        <Work work={MY_WORK} workTop={MY_WORK_TOP}/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
      </div> 
    </div>
    
  )
}

export default App