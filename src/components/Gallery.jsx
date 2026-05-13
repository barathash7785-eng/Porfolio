import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Camera, Scissors, Sparkles } from 'lucide-react';
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

const GalleryImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="strip-img-wrap">
      {!loaded && <div className="shimmer" />}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
        className={`${loaded ? 'loaded' : ''} ${className || ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <section id="gallery" className="gallery-strips-section">
      <div className="container-full">
        <div className="strips-header">
          <div className="container">
            <span className="section-tag">Interactive Portfolio</span>
            <h2 className="section-title">VISUAL <span className="text-accent">STRIPS</span></h2>
            
            <div className="strips-nav">
              {['All', 'Photography', 'Editing', 'Creative'].map(cat => (
                <button 
                  key={cat} 
                  className={`strip-nav-btn ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="strips-container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={active}
              className="strips-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className={`strip-item ${hovered === index ? 'expanded' : ''} ${hovered !== null && hovered !== index ? 'shrunk' : ''}`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setLightbox(photo)}
                >
                  <GalleryImage src={photo.src} alt={photo.title} />
                  
                  <div className="strip-overlay">
                    <div className="strip-content">
                      <span className="strip-cat">{photo.category}</span>
                      <h3 className="strip-title">{photo.title}</h3>
                      <div className="strip-action">
                        <Maximize2 size={24} />
                        <span>EXPAND VIEW</span>
                      </div>
                    </div>
                  </div>

                  <div className="strip-label">
                    <span className="strip-index">0{index + 1}</span>
                    <span className="strip-name-vertical">{photo.title}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-v5" onClick={() => setLightbox(null)}>
          <div className="lightbox-v5-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} loading="eager" />
            <div className="v5-meta">
              <h3>{lightbox.title}</h3>
              <button onClick={() => setLightbox(null)}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
