
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Privacy from './components/Privacy';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="glow-bg"></div>
      <Navbar />
      <Hero />
      <Features />
      <Privacy />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
