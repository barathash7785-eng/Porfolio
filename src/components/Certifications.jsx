import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: 'ASTRANOVA 2K26 Technical Symposium',
    issuer: 'Coimbatore Institute of Technology',
    date: '2026',
    description: 'Participation Certificate for the National Level Technical Symposium.',
  },
  {
    title: 'II Prize – Paper Presentation',
    issuer: 'Sri Sai Ranganathan Engineering College',
    date: '2025',
    description: 'Secured II Prize in Paper Presentation at the National Level Technical Symposium.',
  },
  {
    title: 'Character Recognition Using ML',
    issuer: 'Indian Info Techo',
    date: '2025',
    description: 'Certification in Machine Learning based Character Recognition.',
  },
  {
    title: 'RBI@90 Nationwide Online Quiz 2024',
    issuer: 'Reserve Bank of India',
    date: '2024',
    description: 'Participation Certificate for the nationwide online quiz organized by RBI.',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="cert-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">Milestones of <br /> <span className="gradient-text">Excellence</span></h2>
        </motion.div>
        
        <div className="cert-timeline">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>
              
              <div className="timeline-card glass-panel">
                <div className="card-header">
                  <span className="cert-year">{cert.date}</span>
                  <h3 className="cert-name">{cert.title}</h3>
                </div>
                <p className="cert-org">{cert.issuer}</p>
                <p className="cert-detail">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
