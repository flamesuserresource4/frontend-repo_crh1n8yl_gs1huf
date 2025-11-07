import { useState } from 'react';

const MediaGallery = () => {
  const [active, setActive] = useState(null);
  const videos = [
    { id: 1, title: 'Running LazyCook', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Output Generation Demo', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F9F3E7' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#1C1B1B' }}>Terminal Usage Examples</h2>
        <p className="mt-2 text-[#1C1B1B] opacity-80">Short demos showcasing LazyCook in action.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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
    </section>
  );
};

export default MediaGallery;
