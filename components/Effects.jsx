'use client';

import { useEffect, useRef } from 'react';

export default function Effects() {
  const glow = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    // scroll reveal
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );
    els.forEach((el) => io.observe(el));

    // progress bar + gentle hero parallax
    const hero = document.querySelector('.hero-img');
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      if (hero && y < 1000) hero.style.translate = `0 ${y * 0.12}px`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // cursor glow (fine pointers only)
    const fine = window.matchMedia('(pointer: fine)').matches;
    const move = (e) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    if (fine) window.addEventListener('pointermove', move, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="cursor-glow" ref={glow} />
    </>
  );
}
