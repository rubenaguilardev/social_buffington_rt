import Navbar from "./components/Navbar"
import Socials from "./components/Socials"
import Hero from "./components/Hero"
import EmailSide from "./components/EmailSide"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Socials />
        <EmailSide />
      </div>
      
    </div>
    
  )
}

export default App