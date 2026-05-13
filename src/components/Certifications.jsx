import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: 'RBI@90 Nationwide Online Quiz 2024',
    issuer: 'Reserve Bank of India',
    date: '2024',
    description: 'Participation Certificate for the nationwide online quiz organized by RBI.',
  },
  {
    title: 'ASTRANOVA 2K26 Technical Symposium',
    issuer: 'Coimbatore Institute of Technology',
    date: '2026',
    description: 'Participation Certificate for the National Level Technical Symposium.',
  },
  {
    title: 'Character Recognition Using ML',
    issuer: 'Indian Info Techo',
    date: '2025',
    description: 'Certification in Machine Learning based Character Recognition.',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">AWARDS & <br /> <span className="text-accent">CERTIFICATIONS</span></h2>
          
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="cert-card"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="cert-info">
                  <span className="cert-date">{cert.date}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <p className="cert-description">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
