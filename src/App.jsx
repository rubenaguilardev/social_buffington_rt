import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SideBars from "./components/SideBars"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-6">
        <Nav/>
        <Hero />
        <SideBars />
      </div>
      
    </div>
    
  )
}

export default App