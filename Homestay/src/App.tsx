import { Footer } from "./component/Footer"
import { Navbar } from "./component/Navbar"
import HomepageSections from "./component/homepageSections"

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
