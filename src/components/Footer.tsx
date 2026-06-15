export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '64px 24px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
        <img src="/orbit-logo.png" alt="Orbit Logo" style={{ width: '24px', height: '24px', borderRadius: '5px' }} />
        <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>Orbit Screen</span>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Beautiful screen recordings for macOS.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <a href="https://github.com/mgna3/screen-studio-clone" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          GitHub Repository
        </a>
      </div>
    </footer>
  );
}
