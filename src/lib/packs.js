import fs from 'fs/promises';
import path from 'path';

const packsDir = path.join(process.cwd(), 'data', 'packs');

export async function getAllPacks() {
  const files = await fs.readdir(packsDir);
  const packFiles = files.filter((file) => file.endsWith('.json'));

  const packs = await Promise.all(
    packFiles.map(async (file) => {
      const fullPath = path.join(packsDir, file);
      const content = await fs.readFile(fullPath, 'utf8');
      return JSON.parse(content);
    })
  );

  return packs.sort((a, b) => a.pack_name.localeCompare(b.pack_name));
}

export async function getPackById(packId) {
  const packs = await getAllPacks();
  return packs.find((pack) => pack.pack_id === packId);
}

export function buildShopifyCsv(pack) {
  const headers = [
    'Handle',
    'Title',
    'Body (HTML)',
    'Vendor',
    'Tags',
    'Published',
    'Variant Price',
    'Variant Inventory Qty'
  ];

  const escapeField = (value) => {
    const normalized = String(value ?? '');
    return `"${normalized.replace(/"/g, '""')}"`;
  };

  const rows = pack.products.map((product) => [
    product.handle,
    product.title,
    product.body_html,
    pack.vendor,
    product.tags.join(', '),
    'TRUE',
    product.price,
    product.inventory_qty
  ]);

  return [headers, ...rows].map((row) => row.map(escapeField).join(',')).join('\n');
}
