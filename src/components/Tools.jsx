import { motion } from 'framer-motion';
import './Tools.css';

const tools = [
  {
    name: 'Canva',
    description: 'Design & Presentation',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    color: '#00C4CC'
  },
  {
    name: 'Adobe Photoshop',
    description: 'Photo Editing & Compositing',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
    color: '#31A8FF'
  },
  {
    name: 'Adobe After Effects',
    description: 'Motion Graphics & VFX',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
    color: '#CF96FD'
  },
  {
    name: 'Alight Motion',
    description: 'Mobile Motion Design',
    icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzRCOTA4RSIvPjxwYXRoIGQ9Ik0zMCA3MCBMNTAgMzAgTDcwIDcwIE00MCA2MCBMNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
    color: '#4B908E'
  },
  {
    name: 'VN Editor',
    description: 'Video Post-Production',
    icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHg9IjUiIHk9IjUiIHJ4PSIyMCIgZmlsbD0iI0ZGRDIwMCIvPjx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iYmxhY2siPlZOPC90ZXh0Pjwvc3ZnPg==',
    color: '#FFD200'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Tools() {
  return (
    <section id="tools" className="section tools-section">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p className="section-tag" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Tech Stack
          </motion.p>
          <motion.h2 className="section-title" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            Tools & <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #ff7b00, #ffae00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Software</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="tools-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              className="tool-card glass-card"
              style={{ '--tool-glow': tool.color }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="tool-icon-wrap">
                <img src={tool.icon} alt={tool.name} className="tool-icon" />
              </div>
              <div className="tool-info">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-desc">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
