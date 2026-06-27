import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    { icon: '✉', label: 'Email', value: 'hello@alexandervoss.com' },
    { icon: '☎', label: 'Phone', value: '+43 1 234 5678' },
    { icon: '📍', label: 'Location', value: 'Vienna, Austria' },
  ];

  const socials = [
    { icon: 'In', label: 'Instagram' },
    { icon: 'Be', label: 'Behance' },
    { icon: '500', label: '500px' },
    { icon: 'Li', label: 'LinkedIn' },
  ];

  return (
    <section
      className="section"
      id="contact"
      style={{ background: 'var(--clr-bg-alt)' }}
    >
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Let's Create Together</h2>
            <div className="separator" />
            <p className="section-subtitle">
              Have a project in mind? I'd love to hear about it.
              Reach out and let's bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Info Side */}
          <ScrollReveal direction="left">
            <div className="contact-info">
              <p className="contact-info-text">
                Whether you're looking for portrait sessions, landscape prints,
                or commercial photography — I'm here to create something
                extraordinary with you. Every great image starts with a
                conversation.
              </p>

              {contactDetails.map((item, i) => (
                <div className="contact-detail" key={i}>
                  <div className="contact-detail-icon">{item.icon}</div>
                  <div>
                    <div className="contact-detail-label">{item.label}</div>
                    <div className="contact-detail-value">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="social-links">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="social-link"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal direction="right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder=" "
                  value={formState.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder=" "
                  value={formState.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                />
                <label htmlFor="contact-email" className="form-label">
                  Email Address
                </label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder=" "
                  value={formState.subject}
                  onChange={handleChange}
                  id="contact-subject"
                />
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder=" "
                  value={formState.message}
                  onChange={handleChange}
                  required
                  id="contact-message"
                />
                <label htmlFor="contact-message" className="form-label">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
