import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import TopButton from "./TopButton";
import ParallaxBG from "./ParallaxBG";

function App() {
  return (
    <div className="App">
      <ParallaxBG />
      <TopButton />
      <Main />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
