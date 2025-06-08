
import Header from "./components/Header"
import SideBars from "./components/SideBars"
import About from "./components/About"
import Skills from "./components/SKills"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(125% 125% at 50% 90%, #fff 35%, #6366f1 100%)"}}/>
        </div>
      </div>
      <div className="px-6">
        <Header />
        <SideBars />
        <About/>
        <Skills/>
      </div> 
    </div>
    
  )
}

export default App