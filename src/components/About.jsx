import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Animated counter component
const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { number: 12, suffix: '+', label: 'Years Experience' },
    { number: 850, suffix: '+', label: 'Projects Completed' },
    { number: 24, suffix: '', label: 'Awards Won' },
  ];

  return (
    <section className="section" id="about" style={{ background: 'var(--clr-bg-alt)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="about-image-container">
              <img
                src="/portrait.png"
                alt="Alexander Voss — Fine Art Photographer"
                loading="lazy"
              />
              <div className="about-image-border" />
              <div className="about-image-accent" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div className="about-content">
            <ScrollReveal>
              <span className="section-label">About Me</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                The Eye Behind
                <br />
                the Lens
              </h2>
              <div className="separator" style={{ margin: 'var(--space-lg) 0' }} />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="about-text">
                "Photography is not about what you see — it's about what you
                feel when you see it."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="about-text">
                I'm Alexander Voss, a fine art photographer based in Vienna,
                Austria. For over a decade, I've dedicated my craft to
                capturing the extraordinary in the ordinary — the way light
                transforms a landscape, the raw emotion in a glance, the
                hidden geometry of urban architecture.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="about-text">
                My work has been featured in National Geographic, VOGUE,
                and exhibited in galleries across Europe. I believe great
                photography happens at the intersection of patience,
                curiosity, and a deep respect for the moment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="about-stats">
                {stats.map((stat, i) => (
                  <div className="stat-item" key={i}>
                    <div className="stat-number">
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
