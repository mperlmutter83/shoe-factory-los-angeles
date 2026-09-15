import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for shoe manufacturing work in Los Angeles? Local factories are hiring. Fill out the quick form and we'll connect you — or call (323) 918-4993.",
  alternates: { canonical: 'https://shoefactorylosangeles.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local shoe manufacturing businesses that are actively hiring.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested businesses contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Sewing Machine Operators',
  'Pattern Makers',
  'Lasting & Assembly',
  'Cutters',
  'Sample Makers',
  'Production & QC',
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Looking for Work?</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Shoe Manufacturing Work in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Local footwear manufacturers are growing and looking for dependable people. Tell us
            about yourself and we&apos;ll connect you with businesses that are hiring — free, fast,
            and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-full bg-amber-600 px-7 py-3 font-semibold text-white hover:bg-amber-700"
            >
              Fill Out the Quick Form
            </a>
            <a
              href="tel:+13239184993"
              className="inline-block rounded-full border-2 border-amber-500 px-7 py-3 font-semibold text-amber-400 hover:bg-amber-500/10"
            >
              Or Call (323) 918-4993
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-3xl bg-amber-50 p-8 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/60 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Footwear manufacturers in the Los Angeles area hire for a range of production and
            craft roles, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 font-medium shadow-sm"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Apply in 60 Seconds</h2>
          <p className="mt-2 text-center text-gray-600">
            Free and confidential — we&apos;ll only share your details with businesses that are hiring.
          </p>
          <div className="mt-8">
            <WorkForm />
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          Run a footwear factory and need reliable people?{' '}
          <a href="tel:+13239184993" className="font-bold text-amber-700 underline">
            Call (323) 918-4993
          </a>
        </p>
      </section>
    </>
  );
}
