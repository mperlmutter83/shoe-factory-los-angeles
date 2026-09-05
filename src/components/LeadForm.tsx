'use client';

import { useState, useRef, useEffect } from 'react';

interface LeadFormProps {
  heading?: string;
  className?: string;
}

export default function LeadForm({ heading, className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // Spam-gate metadata (matches CRM expectations). Seeded on mount rather than
  // during render — crypto.randomUUID/Date.now are impure and unstable on re-render.
  const submissionId = useRef<string>('');
  const startedAt = useRef<number>(0);

  useEffect(() => {
    submissionId.current = crypto.randomUUID();
    startedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
          company_website:
            (document.getElementById('company_website') as HTMLInputElement)?.value ?? '',
        }),
      });

      if (response.ok) {
        // GA4/GTM conversion event — picked up by the site's GTM container when present.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: "generate_lead" });

        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-none';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {heading && <h3 className="text-2xl font-bold text-gray-900 mb-2">{heading}</h3>}

      {/* Honeypot — invisible to humans, bots fill it */}
      <input
        type="text"
        id="company_website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about your project
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-amber-600 text-white px-6 py-3 font-bold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-700 font-medium">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-600 font-medium">
          Something went wrong. Please call us at (323) 918-4993.
        </p>
      )}
    </form>
  );
}
