import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import FeaturedReel from './components/FeaturedReel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <StarField />
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Education />
        <Interests />
        <Tools />
        <Projects />
        <FeaturedReel />
        <Certifications />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
