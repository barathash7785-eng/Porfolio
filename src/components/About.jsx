import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="about-content-left">
            <span className="section-subtitle" style={{ display: 'block', marginBottom: '12px', textAlign: 'left' }}>Introduction</span>
            {/* Striking State-of-the-art Main Heading */}
            <h2 className="intro-cinematic-title">
              Engineering <br />
              <span className="gradient-text">Cinematic</span> Reality
            </h2>

            {/* Stacked Bio Nodes replacing standard paragraph box */}
            <div className="bio-nodes-container">
              <div className="bio-node-item">
                <div className="node-glow-bar violet-bar"></div>
                <div className="node-content">
                  <span className="node-header">VISUAL CREATION & ENGINEERING</span>
                  <p className="node-desc">
                    Merging strict embedded systems mechanics with vibrant digital media architecture. Dedicated to building high-fidelity interactive applications, tailored interfaces, and immersive visual storytelling.
                  </p>
                </div>
              </div>

              <div className="bio-node-item">
                <div className="node-glow-bar cyan-bar"></div>
                <div className="node-content">
                  <span className="node-header">GLOBAL AUDIENCE ARCHITECT</span>
                  <p className="node-desc">
                    Directing complex VFX pipelines and precision editing workflows under the banner <span className="highlight-tag">MANICK.EFX</span>, commanding an organic subscriber base scaling past <span className="highlight-tag">330K+</span> across premier global distributions.
                  </p>
                </div>
              </div>
            </div>

            {/* Holographic Stat Modules Matrix */}
            <div className="intro-matrix-stats">
              <div className="matrix-stat-module">
                <div className="stat-top-line cyan-line"></div>
                <span className="matrix-num">330K+</span>
                <span className="matrix-lbl">GLOBAL AUDIENCE REACH</span>
              </div>

              <div className="matrix-stat-module">
                <div className="stat-top-line violet-line"></div>
                <span className="matrix-num">2.1K+</span>
                <span className="matrix-lbl">VERIFIED CREATIVES</span>
              </div>
            </div>
          </div>

          <div className="about-content-right">
            <div className="about-image-container">
              <div className="image-border-glow" />
              <div className="about-image-wrapper glass-panel">
                <img src="/profile.jpg" alt="Profile" className="about-image" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
