import Features from "./components/Features";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Conatct from "./components/Conatct";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Projects />
      <Pricing />
      <Team />
      <Blog />
      <Conatct />
      <Footer />
    </div>
  );
}

export default App;
