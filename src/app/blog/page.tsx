import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog-data';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

// Revalidate every 24 hours (86400 seconds) so scheduled posts surface automatically

export const metadata: Metadata = {
  title: 'Blog | Shoe Factory Los Angeles',
  description: 'Insights on footwear manufacturing, development, and launching your own shoe line. Expert guidance from Shoe Factory Los Angeles.',
};

const SITE_DOMAIN = 'shoefactorylosangeles.com';

export const revalidate = 60;

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const publishedPosts: RenderPost[] = apiPosts.length > 0 ? apiPosts.map(toRenderPost) : getPublishedPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-gray-400 mt-2">Insights on footwear manufacturing and building your shoe brand</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {publishedPosts.length === 0 ? (
            <p className="text-gray-600 text-center py-12">No posts available yet. Check back soon!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-amber-600 text-sm mb-2">{post.date} • {post.category}</p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Shoe Line?</h2>
          <p className="mb-6 text-amber-100">Contact us to discuss your footwear manufacturing project.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
