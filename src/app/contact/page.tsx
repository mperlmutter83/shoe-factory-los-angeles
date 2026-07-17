import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Contact Us</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded" />
            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border rounded" />
            <textarea placeholder="Tell us about your project" rows={5} className="w-full px-4 py-3 border rounded"></textarea>
            <button type="submit" className="bg-amber-600 text-white px-6 py-3 font-bold hover:bg-amber-700">Send Message</button>
          </form>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
            <div className="mb-4"><h3 className="font-bold">Phone</h3><a href="tel:+13239184993" className="text-amber-600 text-xl font-bold">(323) 918-4993</a></div>
            <div><h3 className="font-bold">Location</h3><p className="text-gray-600">Los Angeles, CA</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
