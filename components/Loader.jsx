'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;
  return (
    <div className={`loader ${fade ? 'loader-out' : ''}`} aria-hidden="true">
      <div className="loader-in">
        <span className="loader-a">SHALVAH</span>
        <span className="loader-b">Homes Group</span>
        <span className="loader-bar" />
      </div>
    </div>
  );
}
