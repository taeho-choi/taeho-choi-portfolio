import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import TopButton from "./TopButton";
import ParallaxBG from "./ParallaxBG";
import ThreejsBG from "./ThreejsBG";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <div className="App">
      {/* <ThreejsBG /> */}
      {/* <ParallaxBG /> */}
      <Nav
        portfolioActive={portfolioActive}
        aboutActive={aboutActive}
        homeActive={homeActive}
        contactActive={contactActive}
      />
      <TopButton />
      <Main setHomeActive={setHomeActive} />
      <About setAboutActive={setAboutActive} />
      <Portfolio setPortfolioActive={setPortfolioActive} />
      <Contact setContactActive={setContactActive} />
      <Footer />
    </div>
  );
}

export default App;
