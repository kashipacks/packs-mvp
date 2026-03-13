import { buildShopifyCsv, getPackById } from '@/lib/packs';

export async function GET(_request, { params }) {
  const pack = await getPackById(params.packId);

  if (!pack) {
    return new Response('Pack not found', { status: 404 });
  }

  const csv = buildShopifyCsv(pack);

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${pack.pack_id}-shopify.csv"`
    }
  });
}
