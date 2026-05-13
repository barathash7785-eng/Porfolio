import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Code2, Palette, Zap } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: 'ESP32', group: 'hardware', level: 90, icon: '01' },
  { name: 'Arduino', group: 'hardware', level: 95, icon: '02' },
  { name: 'VFX', group: 'creative', level: 98, icon: '03' },
  { name: 'Python', group: 'software', level: 85, icon: '04' },
  { name: 'React', group: 'software', level: 78, icon: '05' },
  { name: 'Editing', group: 'creative', level: 92, icon: '06' },
  { name: 'Sensors', group: 'hardware', level: 88, icon: '07' },
  { name: 'Git', group: 'software', level: 82, icon: '08' },
  { name: 'UI/UX', group: 'creative', level: 75, icon: '09' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const hexVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="skills-layout-modern">
            <div className="skills-sidebar">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">CORE <br /><span className="text-accent">SKILLS</span></h2>
              <p className="skills-desc">
                Merging engineering precision with cinematic creativity. 
                Hover over the technical nodes to explore proficiency levels.
              </p>
              
              <div className="skills-stats-mini">
                <div className="stat-box">
                  <span className="stat-val">09</span>
                  <span className="stat-label">DOMAINS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-val">Master</span>
                  <span className="stat-label">LEVEL</span>
                </div>
              </div>
            </div>

            <div className="hex-grid-wrap">
              <div className="hex-grid">
                {skillsData.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className={`hex-item ${skill.group}`}
                    variants={hexVariants}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="hex-content">
                      <span className="hex-num">{skill.icon}</span>
                      <h4 className="hex-name">{skill.name}</h4>
                      <div className="hex-progress-wrap">
                        <div className="hex-progress-track">
                          <motion.div 
                            className="hex-progress-fill"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </div>
                        <span className="hex-pct">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="hex-bg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
