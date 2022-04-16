import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import TopButton from "./TopButton";
import ParallaxBG from "./ParallaxBG";
import ThreejsBG from "./ThreejsBG";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <ThreejsBG />
      {/* <ParallaxBG /> */}
      <Nav />
      <TopButton />
      <Main />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
