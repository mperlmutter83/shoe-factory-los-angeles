import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  const services = [
    { name: 'Tech Packs', desc: 'Comprehensive blueprints for the entire manufacturing process.' },
    { name: 'Custom Lasts', desc: 'Tailored to match anatomical characteristics of your target customers.' },
    { name: '3D Modeling', desc: 'Advanced 3D modeling services to bring your concepts to life.' },
    { name: '3D Printing', desc: 'Small-batch custom footwear with rapid prototyping.' },
    { name: 'Custom Heel and Sole Injection Molding', desc: 'Precision molding for unique heel and sole designs.' },
    { name: 'Custom Shoe and Bag Samples', desc: 'High-quality samples before bulk production.' },
    { name: 'Sourcing Materials', desc: 'Access to premium materials worldwide.' },
    { name: 'Design Services', desc: 'Expert design consultation and development.' },
    { name: 'Bulk Production', desc: 'Scalable manufacturing solutions.' },
    { name: 'Box and Packaging', desc: 'Custom packaging solutions for your brand.' },
    { name: 'Import and Delivery', desc: 'End-to-end logistics support.' },
  ];
  return (
    <div>
      <section className="bg-gray-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Our Services</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <div key={i} className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold text-gray-900 mb-2">{s.name}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>)}
        </div>
      </section>
    </div>
  );
}
