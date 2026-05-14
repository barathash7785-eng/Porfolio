import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
// Premium Transparent Widescreen Anthology UI
import './Gallery.css';

const photos = [
  { id: 1,  src: '/gallery/IMG-20240204-WA0023.jpg',       title: 'Candid Moments',      category: 'Photography' },
  { id: 10, src: '/gallery/project_main.png',              title: 'Visual Concept',      category: 'Creative' },
  { id: 2,  src: '/gallery/IMG_20240619_184422.jpeg',      title: 'Urban Exploration',   category: 'Photography' },
  { id: 11, src: '/gallery/project_422.png',               title: 'Motion Edit 422',     category: 'Editing' },
  { id: 3,  src: '/gallery/IMG_20240617_103600.jpg',       title: 'Aerial View',         category: 'Photography' },
  { id: 12, src: '/gallery/project_698.png',               title: 'VFX Composition',     category: 'Editing' },
  { id: 4,  src: '/gallery/IMG_20240817_184442.jpg',       title: 'Nature’s Detail',     category: 'Photography' },
  { id: 13, src: '/gallery/new_project_34.png',            title: 'Digital Creation',    category: 'Creative' },
  { id: 5,  src: '/gallery/IMG_20260117_165131.jpeg',      title: 'Grand Perspective',   category: 'Photography' },
  { id: 6,  src: '/gallery/IMG_20240911_182715.jpg',       title: 'Horizon Lines',       category: 'Photography' },
  { id: 7,  src: '/gallery/IMG_20251120_195440.jpeg',      title: 'Golden Perspective',  category: 'Photography' },
  { id: 8,  src: '/gallery/IMG_20250116_135055.jpg',       title: 'Daily Life',          category: 'Photography' },
  { id: 9,  src: '/gallery/IMG_20250505_183816.jpg',       title: 'Evening Glow',        category: 'Photography' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div className="header-text">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Visual <span className="gradient-text">Anthology</span></h2>
          </div>
          
          <div className="gallery-nav glass-panel">
            {['All', 'Photography', 'Editing', 'Creative'].map(cat => (
              <button 
                key={cat} 
                className={`nav-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="strips-wrapper">
        <AnimatePresence mode="wait">
          <motion.div 
            key={active}
            className="strips-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filtered.slice(0, 8).map((photo, index) => (
              <motion.div
                key={photo.id}
                className={`strip-item ${hovered === index ? 'expanded' : ''} ${hovered !== null && hovered !== index ? 'shrunk' : ''}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setLightbox(photo)}
              >
                <img src={photo.src} alt={photo.title} className="strip-image" />
                
                <div className="strip-overlay">
                  <div className="strip-info">
                    <span className="strip-category">{photo.category}</span>
                    <h3 className="strip-title">{photo.title}</h3>
                    <div className="strip-expand">
                      <Maximize2 size={20} />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>

                <div className="strip-vertical-label">
                  <span className="strip-num">0{index + 1}</span>
                  <span className="strip-name">{photo.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} />
              <div className="lightbox-info">
                <h3>{lightbox.title}</h3>
                <button className="btn-premium" onClick={() => setLightbox(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
