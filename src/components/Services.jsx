import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image, Camera, Video, Film, Smartphone, DollarSign, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Poster Editing',
    desc: 'High-impact cinematic posters and branding visuals designed to grab attention.',
    icon: Image,
    tag: 'Graphic Design'
  },
  {
    id: 2,
    title: 'Picture Editing',
    desc: 'Professional retouching and color grading to bring your photos to life.',
    icon: Camera,
    tag: 'Photography'
  },
  {
    id: 3,
    title: 'Video Editing',
    desc: 'Seamless storytelling with professional cuts, transitions, and sound design.',
    icon: Video,
    tag: 'Production'
  },
  {
    id: 4,
    title: 'Short Film Editing',
    desc: 'Narrative-driven editing that enhances the emotional depth of your films.',
    icon: Film,
    tag: 'Cinematic'
  },
  {
    id: 5,
    title: 'Reels Editing',
    desc: 'Fast-paced, viral-ready content optimized for social media engagement.',
    icon: Smartphone,
    tag: 'Motion'
  },
  {
    id: 6,
    title: 'Paid Editing',
    desc: 'Exclusive high-end editing services for professional clients and commercial projects.',
    icon: DollarSign,
    tag: 'Premium'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="section-header-left">
            <span className="section-tag">Service Offerings</span>
            <h2 className="section-title">EDITING <span className="text-accent">EXPERTISE</span></h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon-wrap">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <div className="service-content">
                  <span className="service-tag-mini">{service.tag}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>

                <div className="service-footer">
                  <a href="#contact" className="service-link">
                    INQUIRE NOW <ArrowRight size={14} />
                  </a>
                </div>
                
                <div className="card-bg-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
