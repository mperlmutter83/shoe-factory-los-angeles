import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = ['Tech packs', 'Custom Lasts', 'Sourcing materials', 'Design', '3D modeling', '3D printing', 'Custom Heel and Sole Injection molding', 'Custom Shoe and bag Samples', 'Bulk production services', 'Box and packaging services', 'Import and delivery'];
  return (
    <div>
      <section className="relative min-h-[500px] flex items-center">
        <Image src="/images/shoes-hero.jpeg" alt="Shoes" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
          <p className="text-amber-400 tracking-widest">Find Your Own Style</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">Shoe Factory<br/>Los Angeles</h1>
          <Link href="/contact" className="inline-block bg-amber-600 px-8 py-3 font-medium hover:bg-amber-700">Make An Appointment</Link>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600">We are a Los Angeles-based footwear and accessories manufacturer, school, and network of International development and production companies. Offering full-package services from concept to end-product. With over 15 years of experience, our focus is to help guide you through every step along the way to achieve your dream design into reality.</p>
          </div>
          <Image src="/images/shoes-factory.jpeg" alt="Factory" width={600} height={400} className="rounded-lg" />
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s, i) => <div key={i} className="bg-white p-4 rounded shadow-sm">{s}</div>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Book An Appointment Today</h2>
        <Link href="/contact" className="inline-block bg-white text-amber-600 px-8 py-3 font-bold hover:bg-gray-100">Book Now</Link>
      </section>
    </div>
  );
}
