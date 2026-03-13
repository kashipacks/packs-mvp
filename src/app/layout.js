import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Packs MVP',
  description: 'Beginner-friendly Shopify packs library MVP'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
          <nav className="container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/" style={{ fontWeight: 800 }}>packs-mvp</Link>
            <Link href="/packs">Library</Link>
            <Link href="/wizard">Wizard</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
