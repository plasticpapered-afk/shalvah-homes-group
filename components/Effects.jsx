'use client';

import { useEffect, useRef } from 'react';

export default function Effects() {
  const glow = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    // scroll reveal
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));

    // nav solid + progress
    const nav = document.querySelector('.nav');
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('solid', y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      const bg = document.querySelector('.hero-bg');
      if (bg && y < 900) bg.style.transform = `translateY(${y * 0.18}px) scale(1.05)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // cursor glow
    const move = (e) => {
      if (glow.current) { glow.current.style.left = e.clientX + 'px'; glow.current.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('pointermove', move, { passive: true });

    // card spotlight + 3D tilt
    const cards = document.querySelectorAll('.svc');
    const spot = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px');
      e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px');
    };
    cards.forEach((c) => c.addEventListener('pointermove', spot));

    const tilt = document.querySelector('.hero-card');
    const tmove = (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg)`;
    };
    const treset = () => { if (tilt) tilt.style.transform = ''; };
    if (tilt) { tilt.addEventListener('pointermove', tmove); tilt.addEventListener('pointerleave', treset); }

    // nav mobile toggle
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');
    const toggle = () => links && links.classList.toggle('open');
    const close = () => links && links.classList.remove('open');
    if (burger) burger.addEventListener('click', toggle);
    links && links.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', move);
      cards.forEach((c) => c.removeEventListener('pointermove', spot));
      if (tilt) { tilt.removeEventListener('pointermove', tmove); tilt.removeEventListener('pointerleave', treset); }
      if (burger) burger.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="glow" ref={glow} style={{ left: '-999px', top: '-999px' }} />
    </>
  );
}
