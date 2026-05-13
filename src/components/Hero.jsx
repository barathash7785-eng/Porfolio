import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner container">
        <div className="hero-content">
          <motion.div 
            className="hero-bg-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {"MANICKAVASAGAM".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </motion.div>

          <motion.h2 
            className="hero-tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Graphic Designer & Visual Creator
          </motion.h2>
          
          <motion.h1 
            className="hero-main-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I CREATE <span className="text-accent">IMPACTFUL</span> <br />
            VISUAL STORIES
          </motion.h1>

          <motion.div 
            className="hero-ctas"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className="btn btn-primary">VIEW WORK</a>
            <a href="#contact" className="btn btn-outline">LET'S CONNECT</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
