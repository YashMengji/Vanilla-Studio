import Navbar from '../components/LandingPageCompo/Navbar/Navbar';
import Hero from '../components/LandingPageCompo/Hero/Hero';
import Feature from '../components/LandingPageCompo/Feature/Feature';
import Team from '../components/LandingPageCompo/Team/Team';
import HeroVideo from '../components/LandingPageCompo/HeroVideo/HeroVideo';
import Footer from '../components/LandingPageCompo/Footer/Footer';
import ModalProvider from '../components/LandingPageCompo/Form/ModalProvider';

export default function LandingPage() {
    return (
    <>
    <div 
        style={{
            height: "100vh",
            overflowY: "scroll",
            scrollSnapType: "y proximity",
            scrollBehavior: "smooth"
        }}
        >
      
        {/* <ModalProvider> */}
            <div style={{ scrollSnapAlign: "start" }} id="hero-section">
            <Navbar />
            <Hero />
            </div>
            
            <div style={{ scrollSnapAlign: "start" }} id="hero-video-section">
            <HeroVideo />
            </div>

            <div style={{ scrollSnapAlign: "start" }} id="feature-section">
            <Feature />
            </div>

            <div style={{ scrollSnapAlign: "start" }} id="team-section">
            <Team />
            </div>

            <div style={{ scrollSnapAlign: "start" }} id="footer-section">
            <Footer />
            </div>
        {/* </ModalProvider> */}
    </div> 
    </>
    )
}