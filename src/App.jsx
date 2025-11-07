import Hero from './components/Hero';
import About from './components/About';
import Manual from './components/Manual';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F3E7' }}>
      <Hero />
      <About />
      <Manual />
      <Footer />
    </div>
  );
}

export default App;
