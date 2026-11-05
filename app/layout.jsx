import './globals.css';
import Effects from '../components/Effects';
import { WaIcon } from '../components/Icons';
import { SITE, waLink } from '../lib/site';

export const metadata = {
  title: 'Shalvah Homes Group | Design. Build. Live Better.',
  description:
    'Shalvah Homes Group is a construction and interior design company in Dar es Salaam, committed to delivering high-quality, modern and elegant spaces.',
  openGraph: {
    title: 'Shalvah Homes Group',
    description: 'Design. Build. Live Better.',
    type: 'website',
  },
};

export const viewport = { themeColor: '#050505' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Effects />
        {children}
        <a className="float-wa" href={waLink()} target="_blank" rel="noreferrer" aria-label={`Chat on WhatsApp ${SITE.whatsappDisplay}`}>
          <WaIcon />
        </a>
      </body>
    </html>
  );
}
