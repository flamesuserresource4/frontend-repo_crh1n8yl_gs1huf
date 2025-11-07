const Footer = () => {
  return (
    <footer className="mt-20" style={{ backgroundColor: '#1C1B1B' }}>
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#C63D1C]/20 to-transparent" />
        <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md" style={{ backgroundColor: '#C63D1C' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#F9F3E7' }}>LazyCook</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline" style={{ color: '#F9F3E7' }}>GitHub</a>
            <a href="#" className="text-sm hover:underline" style={{ color: '#F9F3E7' }}>Discord</a>
            <a href="#" className="text-sm hover:underline" style={{ color: '#F9F3E7' }}>Twitter</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs opacity-70" style={{ color: '#F9F3E7' }}>
          © 2025 LazyCook
        </div>
      </div>
    </footer>
  );
};

export default Footer;
