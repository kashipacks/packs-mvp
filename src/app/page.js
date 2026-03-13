import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: '2.5rem' }}>
      <section className="card" style={{ padding: '2rem' }}>
        <h1 style={{ marginTop: 0 }}>Launch Your Shopify Store Faster with Ready-to-Use Packs</h1>
        <p>
          packs-mvp helps beginners find niche product packs with product copy, store pages,
          and ad ideas so you can start quickly without writing everything from scratch.
        </p>
        <Link href="/packs" className="btn">Browse Packs</Link>
      </section>

      <section className="grid" style={{ marginTop: '1.2rem' }}>
        <div className="card"><h3>1) Beginner Friendly</h3><p>Simple structure and clear steps for first-time Shopify users.</p></div>
        <div className="card"><h3>2) Done-for-You Copy</h3><p>Get product descriptions, page copy, and ad text instantly.</p></div>
        <div className="card"><h3>3) Shopify CSV Ready</h3><p>Download and import products with one click using a compatible CSV.</p></div>
      </section>
    </main>
  );
}
