import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import Start from "../components/Start.jsx";
import Info from "../components/Info.jsx";
import About from "../components/About.jsx";
import FundAndOrg from "../components/FundAndOrg.jsx";
import Contact from "../components/Contact.jsx";
import StartHelp from "../components/StartHelp.jsx";

export default function Home() {
    return (
        <div className="home-section-style">
            <div className="home-section-img">
                <div className="home-section-background"/>
                <div className="home-section-navi">
                    <Navigation/>
                    <StartHelp/>
                </div>
            </div>
            <div>
                <Start/>
                <Info/>
                <About/>
                <FundAndOrg/>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}