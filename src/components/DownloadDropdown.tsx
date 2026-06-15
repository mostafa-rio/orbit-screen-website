import { useState } from 'react';
import { Download, ChevronDown, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DownloadDropdown({ large = false }: { large?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const padding = large ? '16px 32px' : '8px 20px';
  const fontSize = large ? '1.1rem' : '0.9rem';
  const iconSize = large ? 20 : 16;

  return (
    <div style={{ position: 'relative' }} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="btn-primary" 
        style={{ padding, fontSize, cursor: 'pointer', outline: 'none', width: '100%' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <Download size={iconSize} /> {large ? 'Download for macOS' : 'Download'} <ChevronDown size={iconSize} style={{ marginLeft: '4px' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '100%',
              right: large ? 'auto' : '0',
              left: large ? '50%' : 'auto',
              transform: large ? 'translateX(-50%)' : 'none',
              marginTop: '12px',
              padding: '8px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '240px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              zIndex: 200
            }}
          >
            <a 
              href="https://github.com/mostafa-rio/orbit-screen/releases/download/v1.0.0/Orbit.Screen-1.0.0-arm64.dmg" 
              className="dropdown-item"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', textDecoration: 'none', color: 'var(--text-primary)', borderRadius: '10px', transition: 'background 0.2s' }}
            >
              <div style={{ background: 'rgba(37, 99, 235, 0.2)', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                <Cpu size={18} color="var(--accent)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Apple Silicon</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>M1, M2, M3, M4 Macs</span>
              </div>
            </a>

            <div style={{ height: '1px', background: 'var(--border-color)', margin: '4px 0' }}></div>

            <a 
              href="https://github.com/mostafa-rio/orbit-screen/releases/download/v1.0.0/Orbit.Screen-1.0.0.dmg" 
              className="dropdown-item"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', textDecoration: 'none', color: 'var(--text-primary)', borderRadius: '10px', transition: 'background 0.2s' }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                <Cpu size={18} color="var(--text-secondary)" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Intel Mac</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Older Mac models</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
