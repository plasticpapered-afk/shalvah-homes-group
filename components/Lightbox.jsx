'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Lightbox({ items }) {
  const tags = ['All', ...Array.from(new Set(items.map((i) => i.tag)))];
  const [tag, setTag] = useState('All');
  const [open, setOpen] = useState(null);
  const shown = items.filter((i) => tag === 'All' || i.tag === tag);

  useEffect(() => {
    if (open === null) return;
    const key = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % shown.length);
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + shown.length) % shown.length);
    };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [open, shown.length]);

  return (
    <>
      <div className="chips reveal">
        {tags.map((t) => (
          <button key={t} className={`chip ${t === tag ? 'chip-on' : ''}`} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <div className="mosaic">
        {shown.map((g, i) => (
          <button key={g.src} className={`tile ${g.span === 'wide' ? 'tile-wide' : ''}`} onClick={() => setOpen(i)} aria-label={`Open ${g.alt}`}>
            <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 700px) 50vw, 33vw" />
            <span className="tile-tag">{g.tag}</span>
          </button>
        ))}
      </div>
      {open !== null && shown[open] && (
        <div className="lb" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="lb-x" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <button className="lb-n lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length); }}>‹</button>
          <Image src={shown[open].src} alt={shown[open].alt} width={shown[open].w} height={shown[open].h} className="lb-img" onClick={(e) => e.stopPropagation()} />
          <button className="lb-n lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shown.length); }}>›</button>
          <p className="lb-cap">{shown[open].alt}</p>
        </div>
      )}
    </>
  );
}
