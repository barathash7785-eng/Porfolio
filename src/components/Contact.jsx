import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">LET'S <br /> <span className="text-accent">CONNECT</span></h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-description">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="contact-methods">
                <div className="method-item">
                  <span>EMAIL ME</span>
                  <a href="mailto:manickavasagam1359@gmail.com">manickavasagam1359@gmail.com</a>
                </div>
                <div className="method-item">
                  <span>CALL ME</span>
                  <a href="tel:+919344326259">+91 93443 26259</a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  required 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  required 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="MESSAGE" 
                  rows="5" 
                  required
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {sent ? 'SENT!' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
