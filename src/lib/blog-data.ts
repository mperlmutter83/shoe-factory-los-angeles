export interface BlogPost { slug: string; title: string; date: string; category: string; excerpt: string; image: string; content: string; }

export const blogPosts: BlogPost[] = [
  {
    slug: 'private-label-shoe-manufacturing-guide',
    title: 'Private Label Shoe Manufacturing: A Complete Guide',
    date: 'April 29, 2026',
    category: 'Manufacturing',
    excerpt: 'Private label shoe manufacturing is one of the fastest and most flexible ways to launch or scale a footwear brand without owning a factory.',
    image: '/images/shoes-factory.jpeg',
    content: '<p>Private label shoe manufacturing is one of the fastest and most flexible ways to launch or scale a footwear brand without owning a factory. Learn how to get started with your own footwear line.</p>',
  },
  {
    slug: 'luxury-footwear-manufacturing-los-angeles',
    title: 'Luxury Footwear Manufacturing in Los Angeles',
    date: 'April 4, 2026',
    category: 'Luxury',
    excerpt: 'Los Angeles has become a powerhouse for premium and luxury fashion production, and footwear is no exception.',
    image: '/images/shoes-hero.jpeg',
    content: '<p>Los Angeles has become a powerhouse for premium and luxury fashion production, and footwear is no exception. Discover why LA is the ideal location for luxury shoe manufacturing.</p>',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined { return blogPosts.find((p) => p.slug === slug); }
export function getAllPostSlugs(): string[] { return blogPosts.map((p) => p.slug); }
