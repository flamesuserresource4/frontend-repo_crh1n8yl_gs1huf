import { useEffect, useRef } from 'react';

const About = () => {
  const termRef = useRef(null);

  useEffect(() => {
    const text = 'lazycook run --auto';
    let i = 0;
    const el = termRef.current;
    if (!el) return;

    el.textContent = '';
    const id = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i += 1;
      if (i === text.length) clearInterval(id);
    }, 70);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: '#F9F3E7' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#1C1B1B' }}>About LazyCook</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed" style={{ color: '#1C1B1B' }}>
          LazyCook is an agentic AI CLI package built to simplify your workflow. Run it in your terminal and let it do the heavy lifting — minimal input, maximal output.
        </p>

        <div className="mt-8 rounded-xl p-4 ring-1" style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}>
          <div className="mb-3 flex items-center gap-2 text-xs" style={{ color: '#F9F3E7' }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#C63D1C' }} />
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#C63D1C' }} />
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#C63D1C' }} />
            <span className="ml-2 opacity-70">Terminal</span>
          </div>
          <pre className="overflow-hidden rounded-lg p-4 text-sm" style={{ backgroundColor: '#1C1B1B', color: '#F9F3E7' }}>
{`$ `}<span ref={termRef} className="animate-pulse" />
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
