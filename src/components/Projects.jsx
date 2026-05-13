import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Military Drone System',
    category: 'Robotics / Surveillance',
    image: '/drone.png',
    description: 'Surveillance drone with real-time Wi-Fi/Bluetooth transmission.',
  },
  {
    id: 2,
    name: 'Fire Suppressor Bot',
    category: 'Automation / Safety',
    image: '/fire_robot.png',
    description: 'Autonomous robot detecting flame and navigating hazardous environments.',
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
        <a href="#contact" className="project-link">
          VIEW PROJECT 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
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
