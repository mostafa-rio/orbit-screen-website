import { ShieldCheck, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <section className="section-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ padding: '64px 32px', borderRadius: '32px', textAlign: 'center', border: '1px solid rgba(37, 99, 235, 0.2)', background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.15)', padding: '20px', borderRadius: '50%', marginBottom: '24px', boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)' }}>
            <ShieldCheck size={48} color="var(--accent)" strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '16px' }}>100% Local.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 auto', lineHeight: 1.6 }}>
            Orbit Screen is engineered to respect your privacy. All processing happens directly on your machine. No backend servers, no cloud storage, and absolutely no telemetry.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass"
          style={{ padding: '64px 32px', borderRadius: '32px', textAlign: 'center', border: '1px solid rgba(37, 99, 235, 0.2)', background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.15)', padding: '20px', borderRadius: '50%', marginBottom: '24px', boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)' }}>
            <Code2 size={48} color="var(--accent)" strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '16px' }}>100% Open Source.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '0 auto', lineHeight: 1.6 }}>
            We believe in transparency. Orbit Screen is completely open-source, so you can verify the code, contribute to its development, and build your own custom version freely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
