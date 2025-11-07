import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Step = ({ index, title, code, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="rounded-xl ring-1 p-5"
    style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}
  >
    <div className="mb-2 text-sm uppercase tracking-wide" style={{ color: '#C63D1C' }}>{title}</div>
    {children}
    {code && (
      <pre className="mt-3 overflow-x-auto rounded-lg p-4 text-sm" style={{ backgroundColor: '#121212', color: '#F9F3E7' }}>
        <code>{code}</code>
      </pre>
    )}
  </motion.div>
);

const QA = ({ q, a }) => (
  <div className="rounded-xl p-5 ring-1" style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}>
    <div className="text-base font-semibold" style={{ color: '#F9F3E7' }}>{q}</div>
    <p className="mt-2 text-sm opacity-90" style={{ color: '#F9F3E7' }}>{a}</p>
  </div>
);

const Manual = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const faqs = [
    {
      q: 'How LazyCook works internally',
      a: 'LazyCook orchestrates an agentic loop: parse intent, plan tasks, execute tools, and iterate on results until goals are met. Configuration and state are persisted locally so sessions can be resumed.'
    },
    {
      q: 'Supported command flags',
      a: '--auto, --dry-run, --plan-only, --max-steps <n>, --model <name>, --log-level <level>, --project <path>'
    },
    {
      q: 'Troubleshooting common issues',
      a: 'If the API key is missing or invalid, run `lazycook config --set-key <key>`. For network errors, verify connectivity and proxy settings. Use `--log-level debug` to inspect execution.'
    }
  ];

  const videos = [
    { id: 1, title: 'Running LazyCook', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Output Generation Demo', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  return (
    <section id="manual" className="py-20" style={{ backgroundColor: '#F9F3E7' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#1C1B1B' }}>Getting Started</h2>
        <p className="mt-2 text-[#1C1B1B] opacity-80">Install, configure, and run LazyCook in minutes.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Step index={0} title="1. Install LazyCook" code={`npm install -g lazycook`}>
            <p style={{ color: '#F9F3E7' }} className="opacity-90">Install globally for access anywhere.</p>
          </Step>

          <Step index={1} title="2. Get your Gemini API Key" code={`Open Google AI Studio → Create API key`}>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="underline" style={{ color: '#F9F3E7' }}>Open Google AI Studio</a>
          </Step>

          <Step index={2} title="3. Configure environment" code={`lazycook config --set-key <your_api_key>`}>
            <p style={{ color: '#F9F3E7' }} className="opacity-90">Store your key securely in LazyCook config.</p>
          </Step>

          <Step index={3} title="4. Run the AI" code={`lazycook run`}>
            <p style={{ color: '#F9F3E7' }} className="opacity-90">Kick off autonomous execution.</p>
          </Step>
        </div>

        <div className="mt-12 rounded-xl p-6 ring-1" style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}>
          <h3 className="text-xl font-semibold" style={{ color: '#F9F3E7' }}>How to get a Gemini API Key</h3>
          <p className="mt-2" style={{ color: '#F9F3E7' }}>
            Create an API key in Google AI Studio and paste it into your LazyCook configuration.
          </p>
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="mt-3 inline-block rounded-md px-4 py-2" style={{ backgroundColor: '#C63D1C', color: '#F9F3E7' }}>Open AI Studio</a>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold" style={{ color: '#1C1B1B' }}>Terminal Usage Examples</h3>
          <p className="mt-2 text-[#1C1B1B] opacity-80">Short demos showcasing LazyCook in action.</p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {videos.map((v) => (
              <div key={v.id} className="overflow-hidden rounded-xl ring-1" style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}>
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={v.url}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4" style={{ color: '#F9F3E7' }}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold" style={{ color: '#1C1B1B' }}>Docs / FAQ</h3>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {faqs.map((f, i) => (
              <QA key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manual;
