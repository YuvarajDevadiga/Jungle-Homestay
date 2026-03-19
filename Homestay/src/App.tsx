import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import HomepageSections from "./components/HomepageSections"

function App() {
  return (
    <div className="min-h-screen bg-[#f7f3d8] text-[#18210d] antialiased">
      <Navbar />
      <HomepageSections/>
      <Footer />
    </div>
  )
}

export default App
