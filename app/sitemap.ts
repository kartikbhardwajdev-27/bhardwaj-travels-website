import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.bhardwajtravels1.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.bhardwajtravels1.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.bhardwajtravels1.com/fleet', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.bhardwajtravels1.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://www.bhardwajtravels1.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.bhardwajtravels1.com/chandigarh-taxi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://www.bhardwajtravels1.com/zirakpur-taxi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://www.bhardwajtravels1.com/panchkula-taxi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.bhardwajtravels1.com/mohali-taxi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
