'use client';

import { useEffect, useState } from 'react';
import { SITE, waLink } from '../lib/site';

const LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['How we work', '#process'],
  ['Projects', '#projects'],
  ['Crew', '#gallery'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`nav ${solid ? 'nav-solid' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="wrap nav-in">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-a">SHALVAH</span>
          <span className="logo-b">Homes Group</span>
        </a>
        <nav className="nav-links">
          {LINKS.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
        </nav>
        <a className="btn btn-gold btn-sm nav-cta" href={waLink()} target="_blank" rel="noreferrer">
          {SITE.whatsappDisplay}
        </a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
