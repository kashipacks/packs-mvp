'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function PacksLibraryClient({ packs }) {
  const [search, setSearch] = useState('');
  const [niche, setNiche] = useState('All');

  const niches = useMemo(() => ['All', ...new Set(packs.map((pack) => pack.niche))], [packs]);

  const filtered = useMemo(() => {
    return packs.filter((pack) => {
      const matchesSearch = [pack.pack_name, pack.summary, pack.country]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesNiche = niche === 'All' || pack.niche === niche;
      return matchesSearch && matchesNiche;
    });
  }, [packs, search, niche]);

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.8rem' }}>
          <input className="input" placeholder="Search packs..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="select" value={niche} onChange={(e) => setNiche(e.target.value)}>
            {niches.map((entry) => <option key={entry}>{entry}</option>)}
          </select>
        </div>
      </div>

      <div className="grid">
        {filtered.map((pack) => (
          <article className="card" key={pack.pack_id}>
            <h3 style={{ marginTop: 0 }}>{pack.pack_name}</h3>
            <p style={{ margin: '0.2rem 0' }}><strong>Niche:</strong> {pack.niche}</p>
            <p style={{ margin: '0.2rem 0' }}><strong>Target Country:</strong> {pack.country}</p>
            <p>{pack.summary}</p>
            <div>{pack.badges.slice(0, 3).map((badge) => <span className="badge" key={badge}>{badge}</span>)}</div>
            <div style={{ marginTop: '0.9rem' }}>
              <Link href={`/packs/${pack.pack_id}`} className="btn secondary">Open Pack</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
