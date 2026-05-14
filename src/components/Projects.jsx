import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Military Based Drone',
    category: 'Robotics / Surveillance',
    image: '/drone.png',
    description: 'An unmanned aerial vehicle designed for surveillance and security applications. Using the ESP32 microcontroller, I implemented precise movement control and real-time data transmission.',
    tech: ['ESP32', 'UAV Dynamics', 'Wireless Communication']
  },
  {
    id: 2,
    name: 'Robotic Fire Extinguisher',
    category: 'Automation / Safety',
    image: '/fire_robot.png',
    description: 'An autonomous robot engineered to detect and extinguish fires without human intervention. It integrates specialized flame and smoke sensors to pinpoint hazards.',
    tech: ['Sensor Fusion', 'Automated Safety', 'Robotics']
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Selected Work</span>
          <h2 className="section-title">Innovative <br /><span className="gradient-text">Ventures</span></h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-row"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="project-media glass-panel">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="media-overlay" />
                </div>

                <div className="project-details">
                  <span className="p-category">{project.category}</span>
                  <h3 className="p-title">{project.name}</h3>
                  <p className="p-desc">{project.description}</p>
                  
                  <div className="p-tech-list">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>


                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
