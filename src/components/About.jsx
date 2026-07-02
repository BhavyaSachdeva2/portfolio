import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="section" id="about" style={{ background: 'var(--clr-bg-alt)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="about-image-container">
              <img
                src="/portrait.jpeg"
                alt="Arnav Tanwar"
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
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="about-text">
                "Design gives form to ideas, editing brings flow to time, and 
                photography captures the light that connects them all."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="about-text">
                I'm Arnav Tanwar, a multi-disciplinary visual creator specializing in photography, 
                video editing, and graphic designing. Based in Delhi, India, I merge clean Swiss grid structures, 
                cinematic rhythm, and precise camera composition to build immersive visual experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="about-text">
                Over the past decade, I've collaborated with art galleries, creative agencies, and luxury labels. 
                Whether organizing a layout, grading a commercial reel, or waiting for the perfect sunset 
                exposure, my goal remains the same: communication through uncompromising aesthetic alignment.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="about-disciplines">
                <div className="discipline-col">
                  <h4 className="discipline-col-title">Photography</h4>
                  <ul className="discipline-col-list">
                    <li>Wildlife</li>
                    <li>Products</li>
                    <li>Events and Fashion</li>
                  </ul>
                </div>
                <div className="discipline-col">
                  <h4 className="discipline-col-title">Video Editing</h4>
                  <ul className="discipline-col-list">
                    <li>Cinematic Storytelling</li>
                    <li>Color Grading</li>
                    <li>Premiere Pro</li>
                  </ul>
                </div>
                <div className="discipline-col">
                  <h4 className="discipline-col-title">Graphic Designing</h4>
                  <ul className="discipline-col-list">
                    <li>Social Media Creatives</li>
                    <li>Merchandise</li>
                    <li>Typography</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
