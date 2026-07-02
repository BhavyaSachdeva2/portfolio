import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Stagger children animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero" id="hero">
      {/* Parallax Background */}
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/hero.jpeg"
          alt="sunset landscape photograph"
          loading="eager"
        />
      </motion.div>

      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-label" variants={itemVariants}>
          Photography • Video Editing • Graphic Design
        </motion.span>

      
        <motion.p className="hero-subtitle" variants={itemVariants}>
"Design gives form to ideas, editing brings flow to time, and photography captures the light that connects them all."
        </motion.p>

        <motion.button
          className="hero-cta"
          variants={itemVariants}
          onClick={scrollToPortfolio}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Portfolio
          <span className="arrow">→</span>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
