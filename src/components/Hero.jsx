import { motion } from 'framer-motion';
import './Hero.css';

// Transparent Premium Hero Section
export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow" />
      <div className="hero-inner container">
        <div className="hero-content">
          <motion.div 
            className="hero-subtitle-wrapper"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tagline">Graphic Designer & Visual Creator</span>
            <div className="tagline-line" />
          </motion.div>
          
          <motion.h1 
            className="hero-main-title"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            CRAFTING <span className="gradient-text">DIGITAL</span> <br />
            EXPERIENCES
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Specializing in high-impact visual storytelling and modern design aesthetics 
            that elevate brands to the next level.
          </motion.p>

          <motion.div 
            className="hero-ctas"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn-premium">GET IN TOUCH</a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
