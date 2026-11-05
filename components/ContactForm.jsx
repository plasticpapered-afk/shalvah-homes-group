'use client';

import { useState } from 'react';
import { SITE } from '../lib/site';

const OPTIONS = ['Interior Design', 'Construction Finishing', 'Renovations', 'Architectural Floor Plan Design'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState(OPTIONS[0]);
  const [msg, setMsg] = useState('');

  function send(e) {
    e.preventDefault();
    const text =
      `Hello Shalvah Homes Group,\n\nMy name is ${name || '(name)'}.\n` +
      `I am interested in: ${service}.\n` +
      (msg ? `\nAbout my project: ${msg}\n` : '') +
      `\nPlease get back to me. Thank you.`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  }

  return (
    <form className="form" onSubmit={send}>
      <div>
        <label htmlFor="n">Your name</label>
        <input id="n" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
      </div>
      <div>
        <label htmlFor="s">What do you need?</label>
        <select id="s" value={service} onChange={(e) => setService(e.target.value)}>
          {OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="m">Tell us about your space</label>
        <textarea id="m" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Location, size, what you have in mind" />
      </div>
      <button className="btn btn-gold" type="submit" style={{ justifyContent: 'center' }}>
        Send on WhatsApp
      </button>
      <p className="hint">This opens WhatsApp with your message ready to send to {SITE.whatsappDisplay}.</p>
    </form>
  );
}
