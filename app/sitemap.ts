import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/site-config';
import { journalEntries, products } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/boutique', '/atelier', '/journal', '/livraison', '/carte-cadeau', '/mentions-legales', '/cgv'];
  const productRoutes = products.map((product) => `/boutique/${product.slug}`);
  const journalRoutes = journalEntries.map((entry) => `/journal/${entry.slug}`);

  return [...staticRoutes, ...productRoutes, ...journalRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
