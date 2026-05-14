import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import './FeaturedReel.css';

export default function FeaturedReel() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [inView]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="reel" className="reel-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="reel-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="reel-info">
            <span className="section-subtitle">Showcase</span>
            <h2 className="section-title">Cinematic <br /><span className="gradient-text">Masterreel</span></h2>
            <p className="reel-text">
              A high-impact cinematic showcase featuring advanced visual effects, 
              color grading, and rhythmic composition that defines my signature style.
            </p>
            
            <div className="reel-metadata glass-panel">
              <div className="meta-item">
                <span className="meta-val">4K</span>
                <span className="meta-lab">Resolution</span>
              </div>
              <div className="meta-item">
                <span className="meta-val">60 FPS</span>
                <span className="meta-lab">Framerate</span>
              </div>
            </div>

            <button className="sound-control glass-panel" onClick={toggleMute}>
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              <span>{muted ? 'Unmute Experience' : 'Mute Sound'}</span>
            </button>
          </div>

          <div className="reel-display">
            <div className="display-frame glass-panel">
              <div className="video-container">
                <video 
                  ref={videoRef}
                  className="reel-video" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1932&auto=format&fit=crop"
                >
                  <source src="reel.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="frame-glow" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
