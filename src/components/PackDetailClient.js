'use client';

import CopyButton from '@/components/CopyButton';

export default function PackDetailClient({ pack }) {
  const pageEntries = Object.entries(pack.pages);
  const allPagesText = pageEntries.map(([key, val]) => `${key.toUpperCase()}\n${val}`).join('\n\n');

  const allMarketing = [
    'Hooks:',
    ...pack.marketing.hooks,
    '',
    'Headlines:',
    ...pack.marketing.headlines,
    '',
    'Ad Primary Texts:',
    ...pack.marketing.primary_texts
  ].join('\n');

  return (
    <>
      <section className="section-title">
        <h2>Products Preview</h2>
        <div className="grid">
          {pack.products.map((product) => (
            <article className="card" key={product.handle}>
              <h3 style={{ marginTop: 0 }}>{product.title}</h3>
              <p>{product.description_preview}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
              <CopyButton text={product.body_html.replace(/<[^>]+>/g, '')} label="Copy Description" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-title">
        <h2>Pages Copy</h2>
        <div style={{ marginBottom: '0.6rem' }}>
          <CopyButton text={allPagesText} label="Copy All Pages" />
        </div>
        <div className="grid">
          {pageEntries.map(([name, content]) => (
            <article className="card" key={name}>
              <h3 style={{ marginTop: 0 }}>{name}</h3>
              <p style={{ whiteSpace: 'pre-wrap' }}>{content}</p>
              <CopyButton text={content} label={`Copy ${name}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-title" style={{ marginBottom: '2rem' }}>
        <h2>Marketing Kit</h2>
        <div style={{ marginBottom: '0.8rem' }}>
          <CopyButton text={allMarketing} label="Copy All Marketing" />
        </div>
        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>10 Hooks</h3>
            <ul>{pack.marketing.hooks.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>10 Headlines</h3>
            <ul>{pack.marketing.headlines.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>10 Ad Primary Texts</h3>
            <ul>{pack.marketing.primary_texts.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>
    </>
  );
}
