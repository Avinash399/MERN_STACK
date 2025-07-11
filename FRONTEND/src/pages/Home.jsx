import About from "../Components/About"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Menu from "../Components/Menu"
import Qualities from "../Components/Qualities"
import Reservation from "../Components/Reservation"
import Services from "../Components/Services"
import Team from "../Components/Team"

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <Services />
            <Team />
            <Reservation />
            <Footer />
        </>
    )
}

export default Home