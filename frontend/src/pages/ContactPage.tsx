import { FormEvent, useState } from 'react'
import { submitContactForm } from '@/services/api'

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
    <section className="section max-w-2xl">
      <h1 className="text-4xl">Contact Us</h1>
      <p className="mt-3 text-bc-ink/70">
        Phone:{' '}
        <a href="tel:+254715547978" className="text-bc-navy hover:text-bc-gold-deep">
          +254 715 547 978
        </a>
        {' '}· Email:{' '}
        <a href="mailto:info@baroncapital.co.ke" className="text-bc-navy hover:text-bc-gold-deep">
          info@baroncapital.co.ke
        </a>
        {' '}· WhatsApp:{' '}
        
        <a href="https://wa.me/254715547978"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bc-navy hover:text-bc-gold-deep"
        >
          +254 715 547 978
        </a>
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
    </section>
  )
}
