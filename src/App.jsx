import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import "./App.css";

function App() {
  return (
    <>
      <MyNavbar />

      {/* GLOBAL BACKGROUND */}
      <div className="main-background">
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
