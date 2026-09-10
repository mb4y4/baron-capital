import { Link } from 'react-router-dom'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <section className="section">
      <h1 className="mb-4 text-4xl">Our Products</h1>
      <p className="mb-10 max-w-2xl text-bc-ink/70">
        Whatever you're building, there's a Baron Capital product designed around it.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <div key={p.slug} className="rounded-lg border border-bc-navy/10 p-8 shadow-sm">
            <h2 className="mb-1 text-2xl">{p.name}</h2>
            <p className="mb-4 font-semibold text-bc-gold">{p.tagline}</p>
            <p className="mb-4 text-sm text-bc-ink/70">{p.description}</p>
            <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-bc-ink/80">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to={`/products/${p.slug}`} className="btn-secondary !py-2 !px-4 text-sm">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
