import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bhardwajtravels.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://bhardwajtravels.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://bhardwajtravels.com/fleet', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://bhardwajtravels.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://bhardwajtravels.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ];
}
