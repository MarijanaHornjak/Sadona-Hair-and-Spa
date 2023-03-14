import "./App.scss";
import Ayurveda from "./components/Ayurveda/Ayurveda";
import BridalServices from "./components/BridalServices/BridalServices";
import Contact from "./components/Contact/Contact";
import Help from "./components/FAQs/Help";
import GiftCard from "./components/GiftCard/GiftCard";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import OurStory from "./components/OurStory/OurStory";
import Products from "./components/Products/Products";
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
      <Products />
      <Help />
      <News />
      <GiftCard />
      <Contact />
    </div>
  );
}

export default App;
