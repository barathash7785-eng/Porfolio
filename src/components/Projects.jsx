import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Military Based Drone',
    category: 'Robotics / Surveillance',
    image: '/drone.png',
    description: 'An unmanned aerial vehicle designed for surveillance and security applications. Using the ESP32 microcontroller, I implemented precise movement control and real-time data transmission via Wi-Fi and Bluetooth protocols.',
    tech: 'ESP32, UAV Dynamics, Wireless Communication'
  },
  {
    id: 2,
    name: 'Robotic Fire Extinguisher',
    category: 'Automation / Safety',
    image: '/fire_robot.png',
    description: 'An autonomous robot engineered to detect and extinguish fires without human intervention. It integrates specialized flame and smoke sensors to pinpoint hazards and activates a high-precision chemical spraying system.',
    tech: 'Sensor Fusion, Automated Safety, Robotics'
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={`project-card ${index % 2 !== 0 ? 'card-alt' : ''}`}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="project-image-wrap">
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-overlay">
          <div className="project-category">{project.category}</div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          <span className="tech-label">CORE TECH:</span> {project.tech}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="section-title">SELECTED <br /> <span className="text-accent">PROJECTS</span></h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
