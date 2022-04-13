import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import TopButton from "./TopButton";

function App() {
  return (
    <div className="App">
      <TopButton />
      <Main />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
