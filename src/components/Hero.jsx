import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToManual = () => {
    const el = document.getElementById('manual');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full text-[#F9F3E7]" style={{ backgroundColor: '#1C1B1B' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1C1B1B]/60 via-[#1C1B1B]/50 to-[#1C1B1B]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 md:pt-36 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            {/* Minimal logo block - replace with real image if available in public/ */}
            <div className="h-12 w-12 rounded-xl" style={{ backgroundColor: '#C63D1C' }} />
            <span className="text-2xl font-semibold tracking-tight" style={{ color: '#F9F3E7' }}>LazyCook</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ color: '#F9F3E7' }}>
            Your AI that cooks up results — not prompts.
          </h1>
          <p className="max-w-2xl text-base md:text-lg" style={{ color: '#F9F3E7' }}>
            Agentic AI CLI that turns minimal input into maximal output. Run it in your terminal and let it do the heavy lifting.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button onClick={handleScrollToManual} className="rounded-lg px-5 py-3 font-medium transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C63D1C] focus:ring-offset-2 focus:ring-offset-[#1C1B1B]" style={{ backgroundColor: '#C63D1C', color: '#F9F3E7' }}>
              Get Started
            </button>
            <a href="#" target="_blank" rel="noreferrer" className="rounded-lg px-5 py-3 font-medium ring-1 transition-transform duration-300 hover:scale-[1.02]" style={{ color: '#F9F3E7', borderColor: '#C63D1C' }}>
              GitHub Repo
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: 'Agentic CLI', desc: 'Acts autonomously to reach goals.' },
            { title: 'Minimal Input', desc: 'Give a hint, get full outcomes.' },
            { title: 'Dev Friendly', desc: 'Built for speed in your terminal.' },
          ].map((c, i) => (
            <div key={i} className="rounded-xl p-4 backdrop-blur-md ring-1" style={{ backgroundColor: 'rgba(28,27,27,0.55)', borderColor: 'rgba(198,61,28,0.35)' }}>
              <div className="text-sm uppercase tracking-wide" style={{ color: '#C63D1C' }}>{c.title}</div>
              <div className="mt-1 text-sm" style={{ color: '#F9F3E7' }}>{c.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
