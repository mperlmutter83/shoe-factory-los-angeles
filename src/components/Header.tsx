'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Shoe Factory LA</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <Link href="/about" className="hover:text-amber-600">About Us</Link>
          <Link href="/services" className="hover:text-amber-600">Services</Link>
          <Link href="/blogs" className="hover:text-amber-600">Blogs</Link>
          <Link href="/contact" className="hover:text-amber-600">Contact Us</Link>
          <a href="tel:+13239184993" className="text-amber-600 font-bold">(323) 918-4993</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <nav className="md:hidden px-4 pb-4 space-y-2"><Link href="/" className="block">Home</Link><Link href="/about" className="block">About</Link><Link href="/services" className="block">Services</Link><Link href="/blogs" className="block">Blogs</Link><Link href="/contact" className="block">Contact</Link></nav>}
    </header>
  );
}
