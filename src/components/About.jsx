import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">A BIT ABOUT <br /> <span className="text-accent">MYSELF</span></h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Visual Creator and Engineer based in India. I specialize in merging technical precision with creative vision.
                As a specialized **VFX Editor** under the brand **MANICK.EFX**, I create high-energy motion graphics and cinematic
                visuals that have reached over **300K+ individuals** globally.
              </p>
              <p>
                My journey in ECE has given me the foundation to build complex hardware, while my passion for visual storytelling
                allows me to communicate those innovations effectively. I am also a proud member of the **Black Squad** editing collective.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-num">330K+</span>
                  <span className="highlight-label">VIRAL <br /> REACH</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-num">2.1K+</span>
                  <span className="highlight-label">CREATIVE <br /> FOLLOWERS</span>
                </div>
              </div>

            </div>

            <div className="about-image-wrap cinematic-frame">
              <div className="frame-accent top-left"></div>
              <div className="frame-accent bottom-right"></div>
              <img src="/profile.jpg" alt="MANICKAVASAGAM" className="about-image" loading="lazy" decoding="async" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
