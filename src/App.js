import "./App.scss";
import Ayurveda from "./components/Ayurveda/Ayurveda";
import BridalServices from "./components/BridalServices/BridalServices";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import Reopening from "./components/Reopening/Reopening";
import SalonServices from "./components/SalonServices/SalonServices";
import SaltServices from "./components/SaltServices/SaltServices";
import SpaServices from "./components/SpaServices/SpaServices";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Reopening />
      <OurStory />
      <SalonServices />
      <SpaServices />
      <BridalServices />
      <SaltServices />
      <Ayurveda />
    </div>
  );
}

export default App;
