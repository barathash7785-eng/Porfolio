import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import FeaturedReel from './components/FeaturedReel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
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
