'use client';

import CopyButton from '@/components/CopyButton';

export default function PackDetailClient({ pack }) {
  const pageEntries = Object.entries(pack.pages);
  const allPagesText = pageEntries.map(([key, val]) => `${key.toUpperCase()}\n${val}`).join('\n\n');
  const launchChecklist = pack.beginner_launch_checklist || [];
  const sevenDayChecklist = pack.seven_day_marketing_checklist || [];
  const mistakes = pack.beginner_mistakes_to_avoid || [];

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

  const formatList = (items = []) => items.map((item, index) => `${index + 1}. ${item}`).join('\n');
  const joinSections = (sections) => sections
    .filter((section) => section.value && (!Array.isArray(section.value) || section.value.length))
    .map((section) => `${section.title}\n${Array.isArray(section.value) ? formatList(section.value) : section.value}`)
    .join('\n\n');

  const storeNameText = formatList(pack.store_name_ideas || []);
  const pinterestText = joinSections([
    { title: 'Pinterest Pin Titles', value: pack.pinterest_pin_titles },
    { title: 'Pinterest Pin Descriptions', value: pack.pinterest_pin_descriptions }
  ]);
  const facebookInstagramText = joinSections([
    { title: 'Facebook Ad Primary Texts', value: pack.facebook_ad_primary_texts },
    { title: 'Facebook Ad Headlines', value: pack.facebook_ad_headlines },
    { title: 'Facebook Post Captions', value: pack.facebook_post_captions },
    { title: 'Instagram/Reels Captions', value: pack.instagram_reel_captions }
  ]);
  const tiktokText = joinSections([
    { title: 'TikTok Video Hooks', value: pack.tiktok_video_hooks },
    { title: 'TikTok Video Script', value: pack.tiktok_video_script }
  ]);
  const youtubeText = joinSections([
    { title: 'YouTube Shorts Titles', value: pack.youtube_shorts_titles },
    { title: 'YouTube Shorts Script', value: pack.youtube_shorts_script }
  ]);
  const xText = joinSections([
    { title: 'X/Twitter Posts', value: pack.x_posts },
    { title: 'X/Twitter Hooks', value: pack.x_hooks }
  ]);

  const ListBlock = ({ items }) => (
    <ul>{(items || []).map((item) => <li key={item}>{item}</li>)}</ul>
  );

  const TextBlock = ({ children }) => (
    <p style={{ whiteSpace: 'pre-wrap' }}>{children}</p>
  );

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
        <h2>Store Launch Content</h2>
        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Store Name Ideas</h3>
            <ListBlock items={pack.store_name_ideas} />
            <CopyButton text={storeNameText} label="Copy Store Names" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Homepage Hero</h3>
            <p><strong>Headline:</strong> {pack.hero_headline}</p>
            <CopyButton text={pack.hero_headline || ''} label="Copy Headline" />
            <p><strong>Subheadline:</strong> {pack.hero_subheadline}</p>
            <CopyButton text={pack.hero_subheadline || ''} label="Copy Subheadline" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Order Messages</h3>
            <p><strong>WhatsApp:</strong></p>
            <TextBlock>{pack.whatsapp_order_message}</TextBlock>
            <CopyButton text={pack.whatsapp_order_message || ''} label="Copy WhatsApp Message" />
            <p><strong>Gmail Subject:</strong> {pack.gmail_order_subject}</p>
            <p><strong>Gmail Body:</strong></p>
            <TextBlock>{pack.gmail_order_body}</TextBlock>
            <CopyButton text={pack.gmail_order_body || ''} label="Copy Gmail Body" />
          </article>
        </div>
      </section>

      <section className="section-title">
        <h2>Social Media Launch Kit</h2>
        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Pinterest</h3>
            <h4>Pin Titles</h4>
            <ListBlock items={pack.pinterest_pin_titles} />
            <h4>Pin Descriptions</h4>
            <ListBlock items={pack.pinterest_pin_descriptions} />
            <CopyButton text={pinterestText} label="Copy Pinterest Content" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Facebook / Instagram</h3>
            <h4>Facebook Ad Primary Texts</h4>
            <ListBlock items={pack.facebook_ad_primary_texts} />
            <h4>Facebook Ad Headlines</h4>
            <ListBlock items={pack.facebook_ad_headlines} />
            <h4>Facebook Post Captions</h4>
            <ListBlock items={pack.facebook_post_captions} />
            <h4>Instagram/Reels Captions</h4>
            <ListBlock items={pack.instagram_reel_captions} />
            <CopyButton text={facebookInstagramText} label="Copy Facebook/Instagram" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>TikTok</h3>
            <h4>Video Hooks</h4>
            <ListBlock items={pack.tiktok_video_hooks} />
            <h4>Short Script</h4>
            <TextBlock>{pack.tiktok_video_script}</TextBlock>
            <CopyButton text={tiktokText} label="Copy TikTok Content" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>YouTube Shorts</h3>
            <h4>Titles</h4>
            <ListBlock items={pack.youtube_shorts_titles} />
            <h4>Short Script</h4>
            <TextBlock>{pack.youtube_shorts_script}</TextBlock>
            <CopyButton text={youtubeText} label="Copy YouTube Shorts" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>X / Twitter</h3>
            <h4>Posts</h4>
            <ListBlock items={pack.x_posts} />
            <h4>Hooks</h4>
            <ListBlock items={pack.x_hooks} />
            <CopyButton text={xText} label="Copy X/Twitter Content" />
          </article>
        </div>
      </section>

      <section className="section-title">
        <h2>Beginner Launch Guide</h2>
        <div className="grid">
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Shopify Launch Checklist</h3>
            <ListBlock items={launchChecklist} />
            <CopyButton text={formatList(launchChecklist)} label="Copy Launch Checklist" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>First 7-Day Marketing Checklist</h3>
            <ListBlock items={sevenDayChecklist} />
            <CopyButton text={formatList(sevenDayChecklist)} label="Copy 7-Day Checklist" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>Beginner Mistakes to Avoid</h3>
            <ListBlock items={mistakes} />
            <CopyButton text={formatList(mistakes)} label="Copy Mistakes" />
          </article>
          <article className="card">
            <h3 style={{ marginTop: 0 }}>After First Customer Message</h3>
            <TextBlock>{pack.after_first_customer_message}</TextBlock>
            <CopyButton text={pack.after_first_customer_message || ''} label="Copy First Reply" />
            <p><strong>Note:</strong> {pack.kit_disclaimer_note}</p>
          </article>
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
