import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

// Revalidate every 24 hours (86400 seconds) so scheduled posts surface automatically
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-amber-400 text-sm mb-2">{post.date} • {post.category}</p>
          <h1 className="text-3xl lg:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg shadow-lg -mt-8"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700 prose-a:text-amber-600 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ul>
                );
              } else {
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                );
              }
            })}
          </div>

          {/* CTA Card */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Footwear Project?</h3>
            <p className="text-gray-600 mb-6">Contact Shoe Factory Los Angeles to discuss your manufacturing needs.</p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 font-bold hover:bg-amber-700 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
