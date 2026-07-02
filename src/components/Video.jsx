import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

import videos from '../data/videos';

// Play icon SVG
const PlayIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="23" stroke="rgba(201,169,110,0.6)" strokeWidth="2" />
    <path d="M19 14.5L34 24L19 33.5V14.5Z" fill="var(--clr-gold)" />
  </svg>
);

// Close icon
const CloseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M6 6L22 22M22 6L6 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Video = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="section" id="videos">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Videos</span>
            <h2 className="section-title">My Edits</h2>
            <div className="separator" />
            <p className="section-subtitle">
              Recordings — Shot and Edited
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Video */}
        <ScrollReveal delay={0.15}>
          <motion.div
            className="video-featured"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openVideo(videos[0])}
          >
            <img
              src={videos[0].thumbnail}
              alt={videos[0].title}
              className="video-featured-img"
            />
            <div className="video-featured-overlay">
              <motion.div
                className="video-play-btn-large"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon size={72} />
              </motion.div>
              <div className="video-featured-info">
                <span className="video-featured-category">{videos[0].category}</span>
                <h3 className="video-featured-title">{videos[0].title}</h3>
                <span className="video-featured-duration">{videos[0].duration}</span>
              </div>
            </div>
            <div className="video-featured-badge">Featured Reel</div>
          </motion.div>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="video-grid">
          {videos.slice(1).map((video, i) => (
            <ScrollReveal key={video.id} delay={0.1 + i * 0.08}>
              <motion.div
                className="video-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openVideo(video)}
              >
                <div className="video-card-thumb">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-card-overlay">
                    <motion.div
                      className="video-play-btn"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <PlayIcon size={44} />
                    </motion.div>
                  </div>
                  <span className="video-card-duration">{video.duration}</span>
                </div>
                <div className="video-card-info">
                  <span className="video-card-category">{video.category}</span>
                  <h4 className="video-card-title">{video.title}</h4>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="video-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeVideo}
            >
              <motion.div
                className="video-modal"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="video-modal-close" onClick={closeVideo}>
                  <CloseIcon />
                </button>
                <div className="video-modal-header">
                  <span className="video-modal-category">{activeVideo.category}</span>
                  <h3 className="video-modal-title">{activeVideo.title}</h3>
                </div>
                <div className="video-modal-player">
                  <video
                    ref={videoRef}
                    src={activeVideo.url}
                    controls
                    autoPlay
                    style={{ width: '100%', borderRadius: '8px', background: '#000' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Video;
