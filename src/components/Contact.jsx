import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Headers centered cleanly above the grid columns */}
        <motion.div
          ref={ref}
          className="contact-header-top"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let’s Start <br /><span className="gradient-text">Something Great</span></h2>
          <p className="contact-desc" style={{ margin: '16px auto 0', maxWidth: '600px' }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Grid Container containing perfectly parallel left cards and right terminal window */}
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ alignItems: 'flex-start' }}
        >
          <div className="contact-info" style={{ marginTop: 0 }}>
            <div className="signal-cards-container">
              {/* Email Card */}
              <a href="mailto:manickavasagam1359@gmail.com" className="signal-card-row">
                <div className="s-icon-box purple-box">
                  <Mail size={18} />
                </div>
                <div className="s-card-info">
                  <span className="s-label">EMAIL</span>
                  <span className="s-val">manickavasagam1359@gmail.com</span>
                </div>
                <div className="s-arrow">→</div>
              </a>

              {/* Phone Card */}
              <a href="tel:+919344326259" className="signal-card-row">
                <div className="s-icon-box cyan-box">
                  <Phone size={18} />
                </div>
                <div className="s-card-info">
                  <span className="s-label">PHONE</span>
                  <span className="s-val">+91 93443 26259</span>
                </div>
                <div className="s-arrow">→</div>
              </a>

              {/* LinkedIn Card */}
              <a href="https://linkedin.com/in/manickavasagam-s-794174291" target="_blank" rel="noreferrer" className="signal-card-row">
                <div className="s-icon-box purple-box font-icon">
                  in
                </div>
                <div className="s-card-info">
                  <span className="s-label">LINKEDIN</span>
                  <span className="s-val">linkedin.com/in/manickavasagam-s</span>
                </div>
                <div className="s-arrow">→</div>
              </a>

              {/* Location Card */}
              <div className="signal-card-row no-hover">
                <div className="s-icon-box coral-box">
                  <MapPin size={18} />
                </div>
                <div className="s-card-info">
                  <span className="s-label">LOCATION</span>
                  <span className="s-val">Karur, Tamil Nadu, India</span>
                </div>
                <div className="s-arrow">→</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Shell Transmitter Form Window */}
          <div className="signal-terminal-window">
            {/* Terminal Header Bar */}
            <div className="terminal-top-bar">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">signal_transmitter.sh</span>
            </div>

            {/* Terminal Body Form */}
            <form className="terminal-body" onSubmit={handleSubmit}>
              <div className="term-input-group">
                <label className="term-label">
                  <span className="term-prefix">$</span> name:
                </label>
                <input 
                  type="text" 
                  className="term-input" 
                  placeholder="Enter your name..." 
                  required 
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="term-input-group">
                <label className="term-label">
                  <span className="term-prefix">$</span> email:
                </label>
                <input 
                  type="email" 
                  className="term-input" 
                  placeholder="your@email.com" 
                  required 
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="term-input-group">
                <label className="term-label">
                  <span className="term-prefix">$</span> message:
                </label>
                <textarea 
                  className="term-textarea" 
                  placeholder="Describe your mission..." 
                  rows="4" 
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="term-submit-btn">
                <span>{sent ? 'TRANSMITTED ✓' : 'TRANSMIT ↗'}</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
