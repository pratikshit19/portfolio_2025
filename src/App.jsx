import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="bg-gradient-blobs min-h-screen bg-white">
      
      <Navbar />
      <main className="overflow-y-auto">
        <Element name="home"><Home /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="about"><About /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
      
    </div>
    
  );
}

export default App;
