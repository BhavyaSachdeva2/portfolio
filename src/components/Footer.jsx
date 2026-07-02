import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Photos', id: 'portfolio' },
    { label: 'Videos', id: 'videos' },
    { label: 'Design', id: 'design' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-accent">A</span>rnav{' '}
            <span className="logo-accent">T</span>anwar
          </div>

          <nav className="footer-nav">
            {links.map((link) => (
              <button
                key={link.id}
                className="footer-link"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Arnav Tanwar. All rights reserved.
          </p>

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
