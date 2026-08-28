import { Metadata } from 'next';
import BookingEmbed from '@/components/BookingEmbed';

export const metadata: Metadata = {
  title: 'Book An Appointment',
  description:
    'Schedule a free consultation with Shoe Factory Los Angeles. Sales, development, and production appointments for footwear manufacturing. Call (323) 918-4993.',
};

export default function BookPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Book An Appointment</h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Pick a time that works for you — free consultation, sales, development, or production.
            Prefer to talk now? Call{' '}
            <a href="tel:+13239184993" className="text-amber-500 font-bold">
              (323) 918-4993
            </a>
            .
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <BookingEmbed />
        </div>
      </section>
    </div>
  );
}
