import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-cinematic">
      <div className="container">
        <div className="footer-content">
          {/* Main CTA Heading */}
          <motion.div 
            className="footer-cta-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="footer-cta-title">
              LET'S WORK <br />
              <span className="accent-text">TOGETHER</span>
            </h2>
            
            <a href="#contact" className="btn-contact-footer">
              GET IN TOUCH
            </a>
          </motion.div>

          <div className="footer-divider" />

          {/* Brand & Socials */}
          <div className="footer-brand-suite">
            <h3 className="footer-brand-name">MANICK</h3>
            
            <div className="footer-social-links">
              <a href="https://linkedin.com/in/manickavasagam-s-794174291" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="https://www.instagram.com/manick.efx/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>

            <p className="footer-copyright">
              © {year} Manickavasagam — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
