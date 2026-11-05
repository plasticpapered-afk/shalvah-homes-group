import ContactForm from '../components/ContactForm';
import { WaIcon, SvcIcon, WhyIcon, PinIcon, MailIcon, IgIcon } from '../components/Icons';
import { SITE, SERVICES, STEPS, WHY, waLink } from '../lib/site';

function Swoosh() {
  return (
    <svg className="swoosh" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="gg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8f6612" />
          <stop offset=".35" stopColor="#f6d77a" />
          <stop offset=".7" stopColor="#e8b53a" />
          <stop offset="1" stopColor="#b8861b" />
        </linearGradient>
        <linearGradient id="gf" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0c0a05" stopOpacity="0" />
          <stop offset="1" stopColor="#050505" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path className="fill" d="M0 230 C 320 120, 640 380, 980 250 S 1300 130, 1440 200 L1440 420 L0 420 Z" />
      <path d="M0 230 C 320 120, 640 380, 980 250 S 1300 130, 1440 200" />
      <path d="M0 262 C 340 160, 660 400, 1000 282 S 1320 168, 1440 232" style={{ animationDelay: '.7s', opacity: 0.55 }} />
      <path d="M0 296 C 360 200, 680 420, 1020 316 S 1340 206, 1440 266" style={{ animationDelay: '1.1s', opacity: 0.3 }} />
    </svg>
  );
}

function Blueprint() {
  return (
    <svg viewBox="0 0 400 500" aria-hidden="true">
      <defs>
        <linearGradient id="bp" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f6d77a" />
          <stop offset="1" stopColor="#b8861b" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#bp)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".9">
        <path d="M40 330 L40 190 L200 120 L360 190 L360 330 Z" />
        <path d="M40 190 L200 250 L360 190" />
        <path d="M200 250 L200 330" />
        <rect x="76" y="230" width="52" height="64" />
        <rect x="272" y="230" width="52" height="64" />
        <rect x="170" y="270" width="60" height="60" />
        <path d="M20 360 H380" strokeDasharray="4 6" />
        <path d="M40 372 V388 M360 372 V388 M40 380 H360" />
        <circle cx="200" cy="60" r="26" />
        <path d="M200 20 V8 M200 112 V100 M160 60 H148 M252 60 H240" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="brand">
            <b>SHALVAH</b>
            <small>HOMES GROUP</small>
          </a>
          <nav className="links">
            <a className="l" href="#about">About</a>
            <a className="l" href="#services">Services</a>
            <a className="l" href="#process">How we work</a>
            <a className="l" href="#why">Why us</a>
            <a className="l" href="#contact">Contact</a>
            <a className="btn btn-gold" href={waLink()} target="_blank" rel="noreferrer">
              <WaIcon /> WhatsApp
            </a>
          </nav>
          <button className="burger" type="button" aria-label="Menu">Menu</button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" />
          <Swoosh />
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow rv">Construction and interior design</span>
              <h1 className="hero-title rv" style={{ '--d': '.1s' }}>
                <span className="gold">SHALVAH</span>
                <br />
                Homes Group
              </h1>
              <div className="hero-sub rv" style={{ '--d': '.2s' }}>{SITE.tagline}</div>
              <p className="lead rv" style={{ '--d': '.3s' }}>
                We design, build and transform spaces with reliability, innovation and attention to detail.
              </p>
              <div className="cta-row rv" style={{ '--d': '.4s' }}>
                <a className="btn btn-gold" href={waLink('Hello Shalvah Homes Group, I would like to build my dream space.')} target="_blank" rel="noreferrer">
                  <WaIcon /> Let&apos;s build your dream space
                </a>
                <a className="btn btn-line" href="#services">Our services</a>
              </div>
            </div>

            <div className="hero-card rv" style={{ '--d': '.35s' }}>
              <div className="in">
                <div className="kick">{SITE.strap}</div>
                <h3 className="serif" style={{ marginTop: 10 }}>Your vision. Our expertise.</h3>
                <ul>
                  {STEPS.map((s) => (
                    <li key={s.n}>
                      <i>{s.n}</i>
                      <span><b>{s.title}</b><br /><span style={{ color: '#a39b88', fontSize: 14 }}>{s.text}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="scroll-cue">Scroll<span /></div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[0, 1].map((k) => (
              <div key={k} style={{ display: 'flex', gap: 56 }}>
                <span><b>Interior Design</b></span>
                <span><b>Construction Finishing</b></span>
                <span><b>Renovations</b></span>
                <span><b>Architectural Floor Plan Design</b></span>
                <span><b>Design. Build. Live Better.</b></span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="sec" id="about">
          <div className="wrap about-grid">
            <div>
              <span className="eyebrow rv">About us</span>
              <p className="about-big rv" style={{ marginTop: 22, '--d': '.1s' }}>
                Shalvah Homes Group is a construction and interior design company committed to delivering{' '}
                <em>high-quality, modern and elegant spaces.</em>
              </p>
              <p className="rv" style={{ color: '#a39b88', marginTop: 20, fontSize: 18, '--d': '.2s' }}>
                We design, build and transform spaces with reliability, innovation and attention to detail.
              </p>
              <div className="stat-row">
                <div className="stat rv" style={{ '--d': '.25s' }}><b>4</b><small>Core services</small></div>
                <div className="stat rv" style={{ '--d': '.32s' }}><b>4</b><small>Simple steps, start to handover</small></div>
              </div>
            </div>
            <div className="frame rv" style={{ '--d': '.15s' }}>
              <div className="lines" />
              <Blueprint />
              <div className="cap">
                <b className="serif">{SITE.strap}</b>
                <small>Dar es Salaam</small>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="sec" id="services" style={{ background: 'linear-gradient(180deg,#050505,#090805 50%,#050505)' }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow rv">Our services</span>
              <h2 className="rv" style={{ '--d': '.1s' }}>Everything your space <span className="gold">needs.</span></h2>
              <div className="rule rv" />
            </div>
            <div className="svc-grid">
              {SERVICES.map((s, i) => (
                <article className="svc rv" key={s.key} style={{ '--d': `${i * 0.1}s` }}>
                  <div className="in">
                    <span className="num serif">0{i + 1}</span>
                    <div className="ico"><SvcIcon k={s.key} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sec proc" id="process">
          <div className="wrap">
            <div className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
              <span className="eyebrow rv">How we work</span>
              <h2 className="rv" style={{ '--d': '.1s' }}>From first chat to <span className="gold">handover.</span></h2>
            </div>
            <div className="steps">
              {STEPS.map((s, i) => (
                <div className="step rv" key={s.n} style={{ '--d': `${i * 0.12}s` }}>
                  <div className="dot">{i + 1}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="sec" id="why">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow rv">Why choose us</span>
              <h2 className="rv" style={{ '--d': '.1s' }}>Built on <span className="gold">trust</span> and finish.</h2>
            </div>
            <div className="why-grid">
              {WHY.map((w, i) => (
                <div className="why rv" key={w.title} style={{ '--d': `${i * 0.1}s` }}>
                  <div className="tick"><WhyIcon i={i} /></div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BAND */}
        <section className="band">
          <div className="wrap">
            <q className="rv"><span className="gold">Your Vision.</span> Our Expertise.</q>
          </div>
        </section>

        {/* CONTACT */}
        <section className="sec" id="contact">
          <div className="wrap contact">
            <div className="panel rv">
              <div className="in">
                <span className="eyebrow">Get in touch</span>
                <h2>Let&apos;s Build Your <span className="gold">Dream Space</span></h2>
                <a className="wa-pill" href={waLink()} target="_blank" rel="noreferrer">
                  <WaIcon /> {SITE.whatsappDisplay}
                </a>
                <div className="info">
                  <a href={`mailto:${SITE.email}`}><i><MailIcon /></i>{SITE.email}</a>
                  <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer"><i><IgIcon /></i>@{SITE.instagram}</a>
                  <div><i><PinIcon /></i>{SITE.address}</div>
                </div>
              </div>
            </div>
            <div className="panel rv" style={{ '--d': '.12s' }}>
              <div className="in">
                <span className="eyebrow">Start your project</span>
                <h2 style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>Tell us what you have in mind</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <div className="brand" style={{ marginBottom: 16 }}>
                <b>SHALVAH</b>
                <small>HOMES GROUP</small>
              </div>
              <p>{SITE.tagline}</p>
              <p>{SITE.strap}</p>
            </div>
            <div>
              <h5>Explore</h5>
              <a href="#about">About us</a>
              <a href="#services">Our services</a>
              <a href="#process">How we work</a>
              <a href="#why">Why choose us</a>
            </div>
            <div>
              <h5>Contact</h5>
              <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp {SITE.whatsappDisplay}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">@{SITE.instagram}</a>
              <p>{SITE.address}</p>
            </div>
          </div>
          <div className="copy">
            <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
            <span>{SITE.tagline}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
