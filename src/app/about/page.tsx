import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">About Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image src="/images/shoes-factory.jpeg" alt="Factory" width={800} height={500} className="rounded-lg mb-8" />
          <p className="text-gray-600 mb-4">We are a Los Angeles-based footwear and accessories manufacturer, school, and network of International development and production companies. Offering full-package services from concept to end-product.</p>
          <p className="text-gray-600">With over 15 years of experience, our focus is to help guide you through every step along the way to achieve your dream design into reality.</p>
        </div>
      </section>
    </div>
  );
}
