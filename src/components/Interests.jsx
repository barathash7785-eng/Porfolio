import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Video, Camera, Film, Disc } from 'lucide-react';
import './Interests.css';

const orbitalPursuits = [
  {
    id: '01',
    code: 'RENDER.01',
    title: 'Video Editing',
    desc: 'Temporal space calibration through rhythm cutting, color mapping pipelines, and absolute sound design layers.',
    icon: Film,
    ringAccent: 'ring-cyan'
  },
  {
    id: '02',
    code: 'CAPTURE.02',
    title: 'Videography',
    desc: 'Capturing dynamic kinetic energy through manual focal planes, spatial staging, and physical optical tracking.',
    icon: Video,
    ringAccent: 'ring-violet'
  },
  {
    id: '03',
    code: 'APERTURE.03',
    title: 'Photography',
    desc: 'Freezing dramatic geometric compositions and spatial light field contrast to isolate deep static visual layers.',
    icon: Camera,
    ringAccent: 'ring-pink'
  }
];

export default function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="interests" className="pursuits-orbital-section">
      <div className="container">
        {/* Widescreen Sleek Centered Header */}
        <motion.div
          ref={ref}
          className="orbital-header-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Aperture Architecture</span>
          <h2 className="orbital-cinematic-title">
            Creative <span className="gradient-text">Pursuits</span>
          </h2>
          <p className="orbital-subline">
            Precision engineering applied to professional visual capture workflows.
          </p>
        </motion.div>

        {/* Orbital Concentric Ring Cards Array */}
        <div className="orbital-matrix-deck">
          {orbitalPursuits.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`orbital-module-card ${item.ringAccent}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              {/* Rotated left vertical industrial metadata watermark */}
              <div className="vertical-edge-label">
                <span>{item.code}</span>
              </div>

              {/* Absolute Corner Micro-Beacon */}
              <div className="corner-beacon-sphere" />

              {/* Top Concentric Aperture Ring Box */}
              <div className="aperture-ring-wrapper">
                {/* Simulated spinning outer orbital stroke rings */}
                <div className="outer-orbital-ring" />
                <div className="inner-orbital-capsule">
                  <item.icon size={28} strokeWidth={1.5} className="orbital-icon" />
                </div>
                
                {/* Absolute status index ring tag */}
                <span className="ring-index-tag">{item.id}</span>
              </div>

              {/* Central Information Core */}
              <div className="orbital-card-content">
                <h3 className="orbital-name">{item.title}</h3>
                
                {/* Elegant hairline double borders bounding info text */}
                <div className="hairline-divider top-div" />
                <p className="orbital-desc">{item.desc}</p>
                <div className="hairline-divider bottom-div" />
              </div>

              {/* Bottom integrated status indicator loop */}
              <div className="orbital-status-loop">
                <Disc size={12} className="spin-disc-icon" />
                <span>OPTIC BUFFER STABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
