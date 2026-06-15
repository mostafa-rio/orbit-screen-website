import { Download, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

import DownloadButton from './DownloadButton';

export default function Hero() {
  return (
    <section style={{ paddingTop: '180px', paddingBottom: '80px', textAlign: 'center' }} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gradient-text hero-title">
          Beautiful screen recordings.<br />Made effortlessly.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px auto', letterSpacing: '-0.01em' }}>
          Orbit Screen is a native macOS application that captures your screen and camera with zero performance hit using hardware acceleration.
        </p>
        <div className="hero-buttons">
          <DownloadButton large={true} />
          <a href="#showcase" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            <MonitorPlay size={20} /> View Showcase
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ marginTop: '80px', position: 'relative' }}
      >
        <img src="/mockups/tool-deck.png" alt="Tool Deck" style={{ maxWidth: '100%', width: '800px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)' }} />
      </motion.div>
    </section>
  );
}
