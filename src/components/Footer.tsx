import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div><h3 className="font-bold text-lg mb-4">Shoe Factory Los Angeles</h3><p className="text-gray-400">Expert footwear manufacturing since 2008</p></div>
        <div><h4 className="font-bold mb-4">Contact</h4><a href="tel:+13239184993" className="text-amber-400">(323) 918-4993</a><p className="text-gray-400">Los Angeles, CA</p></div>
        <div><h4 className="font-bold mb-4">Follow Us</h4><div className="flex gap-4"><a href="#" className="text-gray-400 hover:text-white">FB</a><a href="#" className="text-gray-400 hover:text-white">X</a><a href="#" className="text-gray-400 hover:text-white">IG</a></div></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500"><p>© 2026 Shoe Factory Los Angeles</p></div>
    </footer>
  );
}
