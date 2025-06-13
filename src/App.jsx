
import Header from "./components/Header"
import SideBars from "./components/SideBars"
import About from "./components/About"
import Work from "./components/Work"
import Gallery from "./components/Gallery"
import { MY_WORK, MY_WORK_TOP } from "./constants/index"


const App = () => {
  return (
    <div id="home" className="overflow-x-hidden antialiased scroll-smooth">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(125% 125% at 50% 90%, #fff 48%, #0080ff 100%)"}}/>
        </div>
      </div>
      <div className="px-4">
        <Header />
        <SideBars />
        <About/>
        <Work work={MY_WORK} workTop={MY_WORK_TOP}/>
        <Gallery/>
      </div> 
    </div>
    
  )
}

export default App