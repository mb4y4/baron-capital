import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import Reveal from '@/components/common/Reveal'

export default function ProductsPage() {
  return (
    <section className="section">
      <Reveal>
        <h1 className="mb-4 text-4xl">Our Products</h1>
        <p className="mb-10 max-w-2xl text-bc-ink/70">
          Whatever you're building, there's a Baron Capital product designed around it.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.slug} delayMs={i * 80}>
            <div className="card-lift h-full rounded-lg border border-bc-navy/10 p-8 shadow-sm hover:shadow-md">
              <h2 className="mb-1 text-2xl">{p.name}</h2>
              <p className="mb-4 font-semibold text-bc-gold-deep">{p.tagline}</p>
              <p className="mb-4 text-sm text-bc-ink/70">{p.description}</p>
              {p.features.length > 0 && (
                <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-bc-ink/80">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
              <Link
                to={`/products/${p.slug}`}
                className="inline-block rounded-sm border-2 border-bc-navy px-4 py-2 font-heading text-sm font-bold text-bc-navy transition-colors hover:bg-bc-navy hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}