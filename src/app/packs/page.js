import PacksLibraryClient from '@/components/PacksLibraryClient';
import { getAllPacks } from '@/lib/packs';

export const metadata = {
  title: 'Packs Library | packs-mvp'
};

export default async function PacksPage() {
  const packs = await getAllPacks();

  return (
    <main className="container" style={{ paddingTop: '1.5rem' }}>
      <h1>Packs Library</h1>
      <p>Browse starter packs, filter by niche, and open a pack to get copy + Shopify CSV.</p>
      <PacksLibraryClient packs={packs} />
    </main>
  );
}
