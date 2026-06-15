import { useState } from 'react';
import { Download, Cpu, X, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DownloadButton({ large = false }: { large?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const padding = large ? '16px 32px' : '8px 20px';
  const fontSize = large ? '1.1rem' : '0.9rem';
  const iconSize = large ? 20 : 16;

  return (
    <>
      <button 
        className="btn-primary" 
        style={{ padding, fontSize, cursor: 'pointer', outline: 'none' }}
        onClick={() => setIsOpen(true)}
      >
        <Download size={iconSize} /> {large ? 'Download for macOS' : 'Download'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
              }}
              onClick={() => setIsOpen(false)}
            />

            {/* Glassy Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
              className="glass"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                padding: '40px',
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute', top: '24px', right: '24px',
                  background: 'rgba(255,255,255,0.05)', border: 'none',
                  borderRadius: '50%', width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.0))', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Download size={32} color="var(--text-primary)" />
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.02em' }}>Download Orbit Screen</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.5 }}>Select the version that matches your Mac's processor for the best performance.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a 
                  href="https://github.com/mostafa-rio/orbit-screen/releases/download/v1.0.0/Orbit.Screen-1.0.0-arm64.dmg"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 24px',
                    background: 'rgba(255,255,255,0.03)', borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none',
                    color: 'var(--text-primary)', transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ background: 'var(--accent)', padding: '12px', borderRadius: '14px', display: 'flex' }}>
                    <Cpu size={24} color="#fff" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flex: 1 }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2px' }}>Apple Silicon</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>M1, M2, M3, M4 Macs</span>
                  </div>
                  <Download size={20} color="var(--text-secondary)" />
                </a>

                <a 
                  href="https://github.com/mostafa-rio/orbit-screen/releases/download/v1.0.0/Orbit.Screen-1.0.0.dmg"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 24px',
                    background: 'rgba(255,255,255,0.03)', borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none',
                    color: 'var(--text-primary)', transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '14px', display: 'flex' }}>
                    <Laptop size={24} color="var(--text-primary)" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', flex: 1 }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2px' }}>Intel Mac</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Older Mac models</span>
                  </div>
                  <Download size={20} color="var(--text-secondary)" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
