import { notFound } from 'next/navigation';
import PackDetailClient from '@/components/PackDetailClient';
import { getPackById } from '@/lib/packs';

export default async function PackDetailPage({ params }) {
  const pack = await getPackById(params.packId);
  if (!pack) return notFound();

  return (
    <main className="container" style={{ paddingTop: '1.5rem' }}>
      <h1>{pack.pack_name}</h1>
      <p><strong>Niche:</strong> {pack.niche} • <strong>Country:</strong> {pack.country}</p>
      <p>{pack.summary}</p>
      <a className="btn" href={`/api/packs/${pack.pack_id}/csv`} download>
        Download Shopify CSV
      </a>
      <PackDetailClient pack={pack} />
    </main>
  );
}
