import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, School } from 'lucide-react';
// Premium Transparent Galactic Timeline UI
import './Education.css';

const educationData = [
  {
    id: 1,
    institution: 'Chettinad College of Engineering and Technology',
    degree: 'Electronics and Communication Engineering',
    period: '2023 – Present',
    score: 'CGPA: 7.7',
    location: 'Karur, Tamil Nadu',
    icon: GraduationCap,
    align: 'right'
  },
  {
    id: 2,
    institution: 'Karur Vetri Vinayaga Matric Higher Secondary School',
    degree: 'HSC',
    period: '2022 – 2023',
    score: 'Percentage: 75.2%',
    location: 'Karur, Tamil Nadu',
    icon: School,
    align: 'left'
  },
  {
    id: 3,
    institution: 'Karur Vetri Vinayaga Matric Higher Secondary School',
    degree: 'SSLC',
    period: '2021 – 2022',
    score: 'Percentage: 60%',
    location: 'Karur, Tamil Nadu',
    icon: School,
    align: 'right'
  }
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="education-section galactic-mode">
      
      <div className="container">
        <div className="edu-header-center">
          <h2 className="section-title">Educational <span className="gradient-text">Journey</span></h2>
        </div>

        <div className="galactic-timeline" ref={ref}>
          {/* Central Path Line */}
          <div className="central-path" />

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`galactic-node ${item.align}`}
              initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Central Glowing Point */}
              <div className="point-anchor">
                <div className="point-glow" />
                <div className="point-inner" />
              </div>

              <div className="galactic-card glass-panel">
                <div className="card-meta">
                  <div className="meta-date">
                    <Calendar size={14} className="purple" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="card-main">
                  <h3 className="inst-name">{item.institution}</h3>
                  <p className="degree-name">{item.degree}</p>
                </div>

                <div className="card-footer">
                  <div className="score-pill">
                    {item.score}
                  </div>
                  <div className="loc-info">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
