import Image from 'next/image';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Lightbox from '../components/Lightbox';
import ContactForm from '../components/ContactForm';
import { ArrowIcon, WaIcon, MailIcon, PinIcon, IgIcon } from '../components/Icons';
import { SITE, SERVICES, STEPS, WHY, waLink } from '../lib/site';

const PROJECTS = [
  { src: '/img/villa.jpg', alt: 'Modern villa with pool and covered dining terrace', tag: 'Architecture', w: 1600, h: 900, span: 'wide' },
  { src: '/img/kitchen.jpg', alt: 'Marble island kitchen with brass pendant lights', tag: 'Kitchens', w: 965, h: 1280 },
  { src: '/img/kitchen4.jpg', alt: 'Champagne kitchen with fluted panelling and brass fittings', tag: 'Kitchens', w: 1024, h: 1281 },
  { src: '/img/kitchen2.jpg', alt: 'Grey gloss kitchen with lit display cabinets', tag: 'Kitchens', w: 965, h: 1280 },
  { src: '/img/kitchen3.jpg', alt: 'Completed open plan kitchen with island', tag: 'Kitchens', w: 756, h: 1008 },
  { src: '/img/wardrobe.jpg', alt: 'Fluted wardrobe and entry with arched lit mirror', tag: 'Wardrobes', w: 736, h: 920 },
  { src: '/img/entry.jpg', alt: 'Blush wardrobe with lit mirror and console', tag: 'Wardrobes', w: 1080, h: 1349 },
];

const CREW = [
  { src: '/img/a-engineer.jpg', alt: 'Shalvah Homes Group engineer on site', tag: 'On site', w: 1580, h: 956, span: 'wide' },
  { src: '/img/b-vest-man.jpg', alt: 'Site supervisor in Shalvah hi-vis vest', tag: 'On site', w: 480, h: 585 },
  { src: '/img/b-kit.jpg', alt: 'Shalvah uniform polo, cap and helmet', tag: 'Uniforms', w: 680, h: 585, span: 'wide' },
  { src: '/img/a-shirt-back.jpg', alt: 'Shalvah branded shirt', tag: 'Uniforms', w: 288, h: 478 },
  { src: '/img/b-jacket.jpg', alt: 'Shalvah branded jacket', tag: 'Uniforms', w: 288, h: 290 },
  { src: '/img/b-vest-back.jpg', alt: 'Shalvah safety vest', tag: 'Safety', w: 220, h: 290 },
  { src: '/img/b-gloves.jpg', alt: 'Shalvah work gloves', tag: 'Safety', w: 274, h: 240 },
];

const TICKER = ['Design', 'Build', 'Live Better', 'Interior Design', 'Construction Finishing', 'Renovations', 'Floor Plan Design'];

export default function Home() {
  return (
    <>
      <Loader />
      <Header />

      {/* HERO */}
      <section className="hero" id="top">
        <Image src="/img/villa.jpg" alt="Modern villa with pool by Shalvah Homes Group" fill priority sizes="100vw" className="hero-img" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow rise" style={{ '--d': '0.1s' }}>Construction and interior design · Dar es Salaam</p>
          <h1 className="rise" style={{ '--d': '0.25s' }}>
            Design. Build.<br />
            <em>Live Better.</em>
          </h1>
          <p className="lede rise" style={{ '--d': '0.45s' }}>
            Shalvah Homes Group is a construction and interior design company committed to delivering high-quality,
            modern and elegant spaces.
          </p>
          <div className="hero-cta rise" style={{ '--d': '0.6s' }}>
            <a className="btn btn-gold" href={waLink()} target="_blank" rel="noreferrer">
              <WaIcon /> {SITE.whatsappDisplay}
            </a>
            <a className="btn btn-line" href="#services">Our services <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-meta wrap">
          <span>Transforming Spaces, Enriching Lives.</span>
          <span className="scroll-cue">Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}<i /></span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">About us</p>
            <h2>Reliability, innovation and attention to detail.</h2>
            <p className="body">
              Shalvah Homes Group is a construction and interior design company committed to delivering high-quality,
              modern and elegant spaces.
            </p>
            <p className="body dim">We design, build and transform spaces with reliability, innovation and attention to detail.</p>
            <div className="stat-row">
              <div><b>4</b><span>Core services</span></div>
              <div><b>4</b><span>Steps, start to handover</span></div>
              <div><b>1</b><span>Team, one standard</span></div>
            </div>
          </div>
          <figure className="photo-stack reveal">
            <Image src="/img/kitchen.jpg" alt="Marble island kitchen" width={965} height={1280} sizes="(max-width: 900px) 90vw, 420px" className="ph ph-1" />
            <Image src="/img/wardrobe.jpg" alt="Fluted wardrobe and entry" width={736} height={920} sizes="(max-width: 900px) 70vw, 340px" className="ph ph-2" />
            <span className="badge">Design. Build. Live Better.</span>
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section dark-2" id="services">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">Our services</p>
            <h2>Everything a space needs.</h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <article className="svc reveal" key={s.key} style={{ '--i': i }}>
                <span className="svc-n">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href={waLink(`Hello Shalvah Homes Group, I am interested in ${s.title}.`)} target="_blank" rel="noreferrer" className="svc-link">
                  Ask about this <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">How we work</p>
            <h2>Four steps from first call to handover.</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step reveal" key={s.n} style={{ '--i': i }}>
                <span className="step-n">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FULL BLEED QUOTE */}
      <section className="bleed">
        <Image src="/img/kitchen2-wide.jpg" alt="" fill sizes="100vw" className="bleed-img" />
        <div className="bleed-shade" />
        <div className="wrap bleed-inner reveal">
          <p className="kicker">Why choose us</p>
          <h2>Your Vision. <em>Our Expertise.</em></h2>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">Projects</p>
            <h2>Spaces we design, build and <em>transform.</em></h2>
            <p className="body dim">Kitchens, wardrobes and whole homes, finished with attention to detail.</p>
          </div>
          <Lightbox items={PROJECTS} />
        </div>
      </section>

      {/* CREW */}
      <section className="section dark-2" id="gallery">
        <div className="wrap">
          <div className="head reveal">
            <p className="kicker">The crew</p>
            <h2>Professional uniforms. <em>Safety first.</em></h2>
            <p className="body dim">Quality work. Our identity.</p>
          </div>
          <Lightbox items={CREW} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section dark-2" id="contact">
        <div className="wrap split">
          <div className="reveal">
            <p className="kicker">Contact</p>
            <h2>Let’s build your <em>dream space.</em></h2>
            <ul className="contact-list">
              <li><WaIcon /><a href={waLink()} target="_blank" rel="noreferrer">{SITE.whatsappDisplay}</a></li>
              <li><MailIcon /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><IgIcon /><a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">@{SITE.instagram}</a></li>
              <li><PinIcon /><span>{SITE.address}</span></li>
            </ul>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div>
            <div className="brand">SHALVAH</div>
            <div className="brand-sub">Homes Group</div>
            <p className="dim">Design. Build. Live Better.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">How we work</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Talk to us</h4>
            <a href={waLink()} target="_blank" rel="noreferrer">{SITE.whatsappDisplay}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span className="dim">{SITE.address}</span>
          </div>
        </div>
        <div className="wrap foot-base">
          <span>© 2026 Shalvah Homes Group.</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
