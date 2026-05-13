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

              <div className="about-education">
                <h3>EDUCATION</h3>
                <div className="education-list">
                  <div className="edu-item">
                    <span className="edu-date">2023 - PRESENT</span>
                    <p className="edu-name">Chettinad College of Engineering</p>
                    <p className="edu-degree">B.E. ECE — CGPA: 7.7</p>
                  </div>
                  <div className="edu-item">
                    <span className="edu-date">2022 - 2023</span>
                    <p className="edu-name">Karur Vetri Vinayaga School</p>
                    <p className="edu-degree">HSC — 75.2%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-skills-list">
              <h3>MY EXPERTISE</h3>
              <ul>
                <li>VFX & MOTION GRAPHICS</li>
                <li>CINEMATIC EDITING</li>
                <li>ALIGHT MOTION MASTERY</li>
                <li>ROBOTICS & UAV</li>
                <li>EMBEDDED SYSTEMS</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
