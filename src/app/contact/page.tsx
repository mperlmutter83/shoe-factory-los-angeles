import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Contact Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <LeadForm />
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
            <div className="mb-4"><h3 className="font-bold">Phone</h3><a href="tel:+13239184993" className="text-amber-600 text-xl font-bold">(323) 918-4993</a></div>
            <div className="mb-4"><h3 className="font-bold">Prefer to book a time?</h3><a href="/book" className="text-amber-600 font-bold">Schedule an appointment</a></div>
            <div><h3 className="font-bold">Location</h3><p className="text-gray-600">Los Angeles, CA</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
