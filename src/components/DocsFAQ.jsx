const QA = ({ q, a }) => (
  <div className="rounded-xl p-5 ring-1" style={{ backgroundColor: '#1C1B1B', borderColor: 'rgba(198,61,28,0.35)' }}>
    <div className="text-base font-semibold" style={{ color: '#F9F3E7' }}>{q}</div>
    <p className="mt-2 text-sm opacity-90" style={{ color: '#F9F3E7' }}>{a}</p>
  </div>
);

const DocsFAQ = () => {
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

  return (
    <section className="py-20" style={{ backgroundColor: '#F9F3E7' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#1C1B1B' }}>Docs / FAQ</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map((f, i) => (
            <QA key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocsFAQ;
