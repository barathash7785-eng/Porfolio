import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">LET'S WORK <br /> <span className="text-accent">TOGETHER</span></h2>
          <a href="mailto:manickavasagam1359@gmail.com" className="btn btn-primary">GET IN TOUCH</a>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">MANICK</div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/manickavasagam-s-794174291" target="_blank" rel="noreferrer" className="footer-link">LINKEDIN</a>
            <a href="https://www.instagram.com/manick.efx/" target="_blank" rel="noreferrer" className="footer-link">INSTAGRAM</a>
          </div>
          <p className="footer-copy">© {year} Manickavasagam — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
