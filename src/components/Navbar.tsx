
import DownloadButton from './DownloadButton';

export default function Navbar() {
  return (
    <nav className="glass nav-container" style={{
      position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)', maxWidth: '1000px', borderRadius: '100px',
      padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/orbit-logo.png" alt="Orbit Logo" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
        <span className="nav-brand-text" style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Orbit Screen</span>
      </div>
      
      <div className="nav-links">
        <a href="#features" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Features</a>
        <a href="#showcase" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>Showcase</a>
        <DownloadButton />
      </div>
    </nav>
  );
}
