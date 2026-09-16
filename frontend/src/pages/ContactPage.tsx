import { FormEvent, useState } from 'react'
import { submitContactForm } from '@/services/api'

const contactMethods = [
  {
    label: 'Call us',
    value: '+254 715 547 978',
    href: 'tel:+254715547978',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Email us',
    value: 'info@baroncapital.co.ke',
    href: 'mailto:info@baroncapital.co.ke',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp us',
    value: '+254 715 547 978',
    href: 'https://wa.me/254715547978',
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.14h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section max-w-3xl">
      <h1 className="text-4xl">Contact Us</h1>
      <p className="mt-3 text-bc-ink/70">We usually reply within a few hours.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.external ? '_blank' : undefined}
            rel={method.external ? 'noopener noreferrer' : undefined}
            className="card-lift flex flex-col items-start gap-3 rounded-lg border border-bc-line p-5 hover:border-bc-gold-deep hover:shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bc-navy text-bc-gold">
              {method.icon}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-bc-ink/50">{method.label}</p>
              <p className="mt-0.5 font-heading font-bold text-bc-navy">{method.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 border-t border-bc-line pt-10">
        <h2 className="text-2xl">Send us a message</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
          />
          <input
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
          />
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
          />
          <button type="submit" disabled={status === 'sending'} className="btn-primary">
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-green-700">Thanks — we'll be in touch shortly.</p>}
          {status === 'error' && <p className="text-red-700">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}