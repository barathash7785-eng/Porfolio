import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './FeaturedReel.css';

export default function FeaturedReel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reel" className="section reel-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="reel-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="reel-content">
            <h2 className="section-title">CINEMATIC <br /> <span className="text-accent">WORK SHOWCASE</span></h2>
            <p className="reel-description">
              A high-impact cinematic showcase featuring advanced visual effects, 
              color grading, and rhythmic composition.
            </p>
            <div className="reel-stats">
              <div className="stat">
                <span className="stat-value">30s</span>
                <span className="stat-label">DURATION</span>
              </div>
              <div className="stat">
                <span className="stat-value">16:9</span>
                <span className="stat-label">RATIO</span>
              </div>
            </div>
          </div>

          <div className="reel-video-wrapper">
            <div className="phone-frame">
              {/* Replace 'reel.mp4' with your actual video path in the public folder */}
              <video 
                className="reel-video" 
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1932&auto=format&fit=crop"
              >
                <source src="/reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="phone-reflection"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
