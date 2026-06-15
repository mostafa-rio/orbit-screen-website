import { Cpu, Maximize, Mic2, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Cpu size={24} color="var(--accent)" />,
    title: "Hardware Accelerated",
    desc: "Built on top of Apple's VideoToolbox for buttery smooth 60fps recording without draining your battery."
  },
  {
    icon: <Palette size={24} color="var(--accent)" />,
    title: "Beautiful Overlays",
    desc: "Floating camera widgets that stay on top of everything. Choose between circles, rounded squares, or rectangles."
  },
  {
    icon: <Mic2 size={24} color="var(--accent)" />,
    title: "Multi-track Audio",
    desc: "Capture your microphone and system audio perfectly synced in separate tracks for easy editing."
  },
  {
    icon: <Maximize size={24} color="var(--accent)" />,
    title: "Smart Tool Deck",
    desc: "An unobtrusive, glassmorphic dock that auto-centers and gives you instant access to your recording tools."
  }
];

export default function Features() {
  return (
    <section id="features" className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="section-title">Engineered for creators.</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>Everything you need to create stunning screencasts, built into a lightning-fast native macOS app.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass" 
            style={{ padding: '32px', borderRadius: '24px' }}
          >
            <div style={{ background: 'rgba(37, 99, 235, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
