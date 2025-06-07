
import Header from "./components/Header"
import SideBars from "./components/SideBars"
import About from "./components/About"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen w-full relative">
        <div className="absolute inset-0 z-0"
          style={{background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)"}}/>
        </div>
      </div>
      <div className="px-6">
        <Header />
        <SideBars />
        <About/>
      </div> 
    </div>
    
  )
}

export default App