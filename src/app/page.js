import Link from 'next/link';

const pricingTiers = [
  {
    title: 'Single Pack',
    price: '$19',
    whatsappLink:
      'https://wa.me/923257215983?text=Hi%2C%20I%20want%20to%20order%20the%20Single%20Pack%20(%2419).%20Please%20send%20me%20the%20payment%20request.%20My%20email%20is%3A%20______',
    features: [
      '1 niche pack',
      'Shopify CSV',
      'store pages copy',
      'marketing kit',
      'beginner wizard',
    ],
  },
  {
    title: '3 Pack Bundle',
    price: '$49',
    featured: true,
    whatsappLink:
      'https://wa.me/923257215983?text=Hi%2C%20I%20want%20to%20order%20the%203%20Pack%20Bundle%20(%2449).%20Please%20send%20me%20the%20payment%20request.%20My%20email%20is%3A%20______',
    features: [
      'any 3 packs',
      '3 Shopify CSV files',
      'store pages copy',
      'marketing kit',
      'beginner wizard',
    ],
  },
  {
    title: 'All 10 Packs',
    price: '$99',
    whatsappLink:
      'https://wa.me/923257215983?text=Hi%2C%20I%20want%20to%20order%20All%2010%20Packs%20(%2499).%20Please%20send%20me%20the%20payment%20request.%20My%20email%20is%3A%20______',
    features: [
      'all 10 starter packs',
      'all Shopify CSV files',
      'all store pages copy',
      'all marketing kits',
      'beginner wizard',
    ],
  },
];

const emailLink =
  'mailto:kashimehar47@gmail.com?subject=Shopify%20Launch%20Kit%20Order';

export default function HomePage() {
  return (
    <main className="container homepage" style={{ paddingTop: '2.5rem' }}>
      <section className="card hero-card" style={{ padding: '2rem' }}>
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

      <section className="pricing-section" aria-labelledby="launch-kit-pricing-heading">
        <div className="pricing-header">
          <p className="eyebrow">Pricing & Contact</p>
          <h2 id="launch-kit-pricing-heading">Choose Your Launch Kit</h2>
          <p className="pricing-subheading">
            Get ready-to-use Shopify packs with CSV, store pages, and marketing copy.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <article
              key={tier.title}
              className={`card pricing-card${tier.featured ? ' featured' : ''}`}
            >
              <div>
                <div className="pricing-card-header">
                  <h3>{tier.title}</h3>
                  {tier.featured ? <span className="pricing-badge">Best Value</span> : null}
                </div>
                <p className="pricing-price">{tier.price}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="pricing-actions">
                <a
                  href={tier.whatsappLink}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order on WhatsApp
                </a>
                <a href={emailLink} className="btn secondary">
                  Email to Order
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pricing-notes">
          <p>
            To order, contact us on WhatsApp or email. After payment, your files will be
            delivered manually.
          </p>
          <p>
            Theme design, product images, and full store setup are not included. This launch
            kit provides ready pack files, copy, and CSV for faster setup.
          </p>
          <p>
            Need help choosing a pack? Contact us on WhatsApp or email and we’ll guide you.
          </p>
        </div>
      </section>
    </main>
  );
}
