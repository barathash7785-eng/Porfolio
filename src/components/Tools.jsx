import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Zap, Layers, Command } from 'lucide-react';
import './Tools.css';

const armoryTools = [
  {
    id: '01',
    name: 'Adobe After Effects',
    category: 'VFX & Motion Design',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
    accentColor: '#CF96FD',
    powerTag: 'NODE-LINK // COMPOSITING',
    loadState: 'OPTIMIZED'
  },
  {
    id: '02',
    name: 'Adobe Photoshop',
    category: 'Digital Retouching',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
    accentColor: '#31A8FF',
    powerTag: 'BIT-DEPTH // GRADING',
    loadState: 'MAXIMUM'
  },
  {
    id: '03',
    name: 'Canva Pro',
    category: 'Rapid UI & Keyboards',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    accentColor: '#00C4CC',
    powerTag: 'LAYOUT-SYNC // CLOUD',
    loadState: 'FLUID'
  },
  {
    id: '04',
    name: 'Alight Motion',
    category: 'Kinetic Typography',
    iconSrc: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzRCOTA4RSIvPjxwYXRoIGQ9Ik0zMCA3MCBMNTAgMzAgTDcwIDcwIE00MCA2MCBMNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
    accentColor: '#4B908E',
    powerTag: 'MOBILE-RIG // VECTOR',
    loadState: 'STABLE'
  },
  {
    id: '05',
    name: 'VN Studio Suite',
    category: 'Structural Timeline Assembly',
    iconSrc: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHg9IjUiIHk9IjUiIHJ4PSIyMCIgZmlsbD0iI0ZGRDIwMCIvPjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPlZOPC90ZXh0Pjwvc3ZnPg==',
    accentColor: '#FFD200',
    powerTag: 'TIMECODE // REALTIME',
    loadState: 'INSTANT'
  }
];

export default function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tools" className="armory-premium-section">
      <div className="container">
        {/* Superior Minimal Header without unneeded block masks */}
        <motion.div
          ref={ref}
          className="armory-header-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Core Infrastructure</span>
          <h2 className="armory-cinematic-title">
            Creative <span className="gradient-text">Armory</span>
          </h2>
          <p className="armory-subline">
            Professional multi-layer processing engines powering live video rendering and static graphics layouts.
          </p>
        </motion.div>

        {/* Studio Hardware Console Matrix Array */}
        <div className="armory-rack-matrix">
          {armoryTools.map((tool, idx) => (
            <motion.div
              key={tool.id}
              className="armory-unit-card"
              style={{ '--tool-glow': tool.accentColor }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Massive subtle absolute watermark tag inside card */}
              <span className="armory-watermark">{tool.id}</span>

              {/* Top Status Header Row */}
              <div className="unit-header-row">
                <div className="unit-icon-chamber">
                  <img src={tool.iconSrc} alt={tool.name} className="devicon-img" />
                </div>

                <div className="status-indicator-tag">
                  <span className="indicator-pulse-dot" style={{ background: tool.accentColor }} />
                  <span>{tool.loadState}</span>
                </div>
              </div>

              {/* Main Body Suite */}
              <div className="unit-body-core">
                <span className="unit-sub-category">{tool.category}</span>
                <h3 className="unit-primary-name">{tool.name}</h3>
              </div>

              {/* Advanced Parameter Footer HUD */}
              <div className="unit-footer-hud">
                <div className="hud-pill-box">
                  <Cpu size={12} className="hud-icon" />
                  <span>{tool.powerTag}</span>
                </div>

                <div className="hud-action-badge">
                  <Command size={12} />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Underlying dynamic glow ambient mask */}
              <div className="unit-ambient-floor" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
