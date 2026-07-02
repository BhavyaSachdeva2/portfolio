import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import designs, { designCategories } from '../data/designs';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Design = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? designs
      : designs.filter((p) => p.category === activeFilter.toLowerCase());

  const openProject = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Disable page scrolling
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = ''; // Re-enable page scrolling
  };

  return (
    <section className="section" id="design">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Graphic Design</span>
            <h2 className="section-title">My Designs</h2>
            <div className="separator" />
            <p className="section-subtitle">
              Visual identity systems and editorial layouts 
              built on grid systems and purpose.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.15}>
          <div className="design-filters">
            {designCategories.map((cat) => (
              <motion.button
                key={cat}
                className={`design-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Design Grid */}
        <ScrollReveal delay={0.25}>
          <motion.div className="design-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="design-card"
                  onClick={() => openProject(project)}
                >
                  <div className="design-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="design-card-overlay">
                      <div className="design-card-meta">
                        <span className="design-card-category">{project.category}</span>
                        <h3 className="design-card-title">{project.title}</h3>
                        <span className="design-card-link">View Details →</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* Design Case Study Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="design-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeProject}
            >
              <motion.div
                className="design-modal"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button className="design-modal-close" onClick={closeProject} aria-label="Close modal">
                  <CloseIcon />
                </button>

                <div className="design-modal-content">
                  {/* Left Side: Media */}
                  <div className="design-modal-media">
                    <img src={activeProject.image} alt={activeProject.title} />
                  </div>

                  {/* Right Side: Details */}
                  <div className="design-modal-info">
                    <div>
                      <span className="design-modal-category">{activeProject.category}</span>
                      <h3 className="design-modal-title">{activeProject.title}</h3>
                      <div className="design-modal-separator" />
                      
                      {/* Safety check for description */}
                      {activeProject.description && (
                        <p className="design-modal-desc">{activeProject.description}</p>
                      )}
                    </div>

                    {/* Metadata table - only renders if client, year, or tools exist */}
                    {(activeProject.client || activeProject.year || activeProject.tools) && (
                      <div className="design-modal-meta-grid">
                        {activeProject.client && (
                          <div className="meta-item">
                            <span className="meta-label">Client</span>
                            <span className="meta-val">{activeProject.client}</span>
                          </div>
                        )}
                        {activeProject.year && (
                          <div className="meta-item">
                            <span className="meta-label">Year</span>
                            <span className="meta-val">{activeProject.year}</span>
                          </div>
                        )}
                        {activeProject.tools && (
                          <div className="meta-item">
                            <span className="meta-label">Tools Used</span>
                            <div className="meta-tools">
                              {activeProject.tools.map((tool) => (
                                <span key={tool} className="tool-pill">{tool}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Design;
