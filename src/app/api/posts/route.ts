import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog-data';

/**
 * Get current date in America/Los_Angeles timezone as YYYY-MM-DD
 */
function getTodayLA(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

export async function GET() {
  const posts = getAllPosts();
  const today = getTodayLA();

  const response = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    date: post.date,
    publishedAt: post.publishedAt,
    status: post.publishedAt <= today ? 'published' : 'scheduled',
    url: `https://www.shoefactorylosangeles.com/blog/${post.slug}`,
  }));

  return NextResponse.json(response, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
