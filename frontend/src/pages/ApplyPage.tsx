import { FormEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import { submitLoanApplication } from '@/services/api'

export default function ApplyPage() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('product') ?? products[0].slug

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    productSlug: preselected,
    amountRequested: 100000,
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitLoanApplication(form)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section className="section max-w-xl text-center">
        <h1 className="text-3xl">Application Received</h1>
        <p className="mt-4 text-bc-ink/70">
          Thank you — a Baron Capital advisor will reach out shortly to guide you through next steps.
        </p>
      </section>
    )
  }

  return (
    <section className="section max-w-xl">
      <h1 className="text-4xl">Apply Now</h1>
      <p className="mt-2 text-bc-ink/70">Tell us a bit about what you need — we'll take it from there.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          required
          placeholder="Full name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
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
          required
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
        />
        <select
          value={form.productSlug}
          onChange={(e) => setForm({ ...form, productSlug: e.target.value })}
          className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
        >
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
        <input
          required
          type="number"
          min={1000}
          placeholder="Amount requested (KES)"
          value={form.amountRequested}
          onChange={(e) => setForm({ ...form, amountRequested: Number(e.target.value) })}
          className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
        />
        <textarea
          rows={4}
          placeholder="Anything else we should know? (optional)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded border border-bc-navy/20 px-3 py-2 focus:border-bc-navy focus:outline-none"
        />
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
          {status === 'sending' ? 'Submitting…' : 'Submit Application'}
        </button>
        {status === 'error' && <p className="text-red-700">Something went wrong. Please try again.</p>}
      </form>
    </section>
  )
}
