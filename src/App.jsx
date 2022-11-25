import About from "./components/About"
import Footer from "./components/Footer"
import GetInTouch from "./components/GetInTouch"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import OurValues from "./components/OurValues"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Team from "./components/Team"
import Workflow from "./components/Workflow"

function App() {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <Workflow />
            <Portfolio />
            <About />
            <Team />
            <OurValues />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default App
