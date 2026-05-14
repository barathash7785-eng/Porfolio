import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Premium Transparent Hex Matrix UI
import './Skills.css';

const hexSkills = [
  { id: '01', name: 'ESP32', level: 90 },
  { id: '02', name: 'ARDUINO', level: 95 },
  { id: '03', name: 'VFX', level: 98 },
  { id: '04', name: 'PYTHON', level: 85 },
  { id: '05', name: 'REACT', level: 78 },
  { id: '06', name: 'EDITING', level: 92 },
  { id: '07', name: 'SENSORS', level: 88 },
  { id: '08', name: 'GIT', level: 82 },
  { id: '09', name: 'UI/UX', level: 75 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="mastery-grid-layout">
          {/* Left Column: Title & Domain Stats */}
          <motion.div 
            className="mastery-left-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mastery-subtitle">EXPERTISE</span>
            <h2 className="mastery-main-title">
              CORE <br />
              <span className="orange-glow-text">SKILLS</span>
            </h2>
            
            <p className="mastery-desc">
              Merging engineering precision with cinematic creativity. Hover over the technical nodes to explore proficiency levels.
            </p>

            <div className="mastery-footer-stats">
              <div className="m-stat-block">
                <span className="m-stat-val">09</span>
                <span className="m-stat-lbl">DOMAINS</span>
              </div>
              <div className="m-stat-block">
                <span className="m-stat-val text-master">MASTER</span>
                <span className="m-stat-lbl">LEVEL</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hexagonal Matrix Grid */}
          <motion.div 
            ref={ref}
            className="mastery-right-matrix"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hex-grid-container">
              {hexSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="hex-cell-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="hex-node-inner">
                    <span className="hex-id">{skill.id}</span>
                    <h3 className="hex-name">{skill.name}</h3>
                    
                    <div className="hex-progress-bar">
                      <div className="hex-track">
                        <motion.div 
                          className="hex-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.4 + idx * 0.08 }}
                        />
                      </div>
                    </div>
                    
                    <span className="hex-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
