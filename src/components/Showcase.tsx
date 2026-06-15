import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section id="showcase" className="section-container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="section-title">See it in action.</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Sleek interfaces that stay out of your way.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <div style={{ flex: '1 1 400px' }}>
            <h3 className="subsection-title">Picture-in-picture perfection.</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Float above your work with dynamic camera overlays. Customize the shape, adjust the corner radius, and match your brand with custom glowing borders.</p>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <img src="/mockups/camera-overlay.png" alt="Camera Overlay" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap-reverse' }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <img src="/mockups/settings.png" alt="Settings Panel" style={{ width: '100%', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <h3 className="subsection-title">Configure in real-time.</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Tweak your camera radius or change border colors on the fly. The native settings panel communicates instantly with the camera overlay, so you never have to restart your recording.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
