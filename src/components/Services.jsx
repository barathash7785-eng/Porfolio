import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image, Camera, Video, Film, Smartphone, DollarSign, ArrowUpRight } from 'lucide-react';
import './Services.css';

const offerings = [
  {
    id: '01',
    title: 'Poster Editing',
    subtitle: 'High-Impact Cinematic Branding',
    desc: 'Crafting visually arresting digital posters and key art engineered to command attention across theatrical distributions and premiere campaigns.',
    icon: Image,
    accent: 'cyan-deck'
  },
  {
    id: '02',
    title: 'Picture Editing',
    subtitle: 'Advanced Retouching & Grading',
    desc: 'Professional color calibration, mood grading, and selective detail enhancements that bring static images into vivid cinematic life.',
    icon: Camera,
    accent: 'violet-deck'
  },
  {
    id: '03',
    title: 'Video Editing',
    subtitle: 'Fluid Narrative Assembly',
    desc: 'Seamless structural timing, high-energy beat editing, and customized transition mapping tailored for maximum narrative resonance.',
    icon: Video,
    accent: 'pink-deck'
  },
  {
    id: '04',
    title: 'Short Film Editing',
    subtitle: 'Dramatic Arc Construction',
    desc: 'Deep structural narrative editing focused on pacing, emotional rhythm, and sound envelope synchronization to elevate indie productions.',
    icon: Film,
    accent: 'violet-deck'
  },
  {
    id: '05',
    title: 'Reels Editing',
    subtitle: 'Viral Motion Mechanics',
    desc: 'Ultra fast-paced, retention-optimized shortform motion cuts integrated with spatial kinetic typography for explosive organic scaling.',
    icon: Smartphone,
    accent: 'cyan-deck'
  },
  {
    id: '06',
    title: 'Paid Editing',
    subtitle: 'Exclusive Studio Commisions',
    desc: 'Bespoke commercial visual architecture, white-label post-production, and elite consulting for multi-platform promotional rollouts.',
    icon: DollarSign,
    accent: 'pink-deck'
  }
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="offerings-header-container"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="offerings-cinematic-title">
            Creative <br />
            <span className="gradient-text">Offerings</span>
          </h2>
          <p className="offerings-subline">
            State-of-the-art post-production suites optimized for premium digital distribution.
          </p>
        </motion.div>

        <div className="offerings-deck-matrix">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`offering-module-card ${item.accent}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              {/* Massive subtle absolute studio watermark index */}
              <span className="o-watermark">{item.id}</span>

              {/* Dynamic top line bar indicator */}
              <div className="o-top-accent-bar" />

              <div className="o-card-header">
                <div className="o-icon-capsule">
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <span className="o-index-badge">{item.id}</span>
              </div>

              <div className="o-card-content">
                <span className="o-sub-label">{item.subtitle}</span>
                <h3 className="o-title">{item.title}</h3>
                <p className="o-description">{item.desc}</p>
              </div>

              <div className="o-card-footer">
                <a href="#contact" className="o-action-link">
                  <span>DISCUSS SUITE</span>
                  <ArrowUpRight size={16} className="o-action-arrow" />
                </a>
              </div>

              {/* Underlying hover ambient ambient layer */}
              <div className="o-card-ambient-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
