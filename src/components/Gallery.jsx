import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import ScrollReveal from './ScrollReveal';
import photos, { categories } from '../data/photos';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredPhotos =
    activeFilter === 'All'
      ? photos
      : photos.filter(
          (p) => p.category === activeFilter.toLowerCase()
        );

  const lightboxSlides = filteredPhotos.map((p) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    title: p.title,
  }));

  const handleClick = useCallback(({ index }) => {
    setLightboxIndex(index);
  }, []);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Selected Works</h2>
            <div className="separator" />
            <p className="section-subtitle">
              A curated collection of moments captured across landscapes,
              portraits, streets, and architectural forms.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.2}>
          <div className="gallery-filters">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <ScrollReveal delay={0.3}>
          <div className="gallery-grid">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RowsPhotoAlbum
                  photos={filteredPhotos}
                  targetRowHeight={280}
                  rowConstraints={{ maxPhotos: 4 }}
                  spacing={8}
                  onClick={handleClick}
                  componentsProps={{
                    wrapper: { className: 'gallery-image-wrapper' },
                  }}
                  render={{
                    extras: (_, { photo }) => (
                      <div className="gallery-image-overlay">
                        <div>
                          <div className="gallery-image-title">{photo.title}</div>
                          <div className="gallery-image-category">{photo.category}</div>
                        </div>
                      </div>
                    ),
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Lightbox */}
        <Lightbox
          slides={lightboxSlides}
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          plugins={[Zoom, Slideshow, Counter]}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
          counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
          }}
          animation={{ swipe: 300 }}
        />
      </div>
    </section>
  );
};

export default Gallery;
