import { Link, useParams } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug ?? '')

  if (!product) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl">Product not found</h1>
        <Link to="/products" className="btn-secondary mt-6 inline-block">Back to Products</Link>
      </section>
    )
  }

  return (
    <section className="section max-w-3xl">
      <h1 className="text-4xl">{product.name}</h1>
      <p className="mt-2 text-xl font-semibold text-bc-gold">{product.tagline}</p>
      <p className="mt-6 text-bc-ink/80">{product.description}</p>

      <h2 className="mt-10 text-2xl">Key Features</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        {product.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <h2 className="mt-10 text-2xl">How It Works</h2>
      <ol className="mt-4 space-y-3">
        {product.howItWorks.map((step, i) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bc-navy font-heading font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-1 text-bc-ink/80">{step}</span>
          </li>
        ))}
      </ol>

      <Link to={`/apply?product=${product.slug}`} className="btn-primary mt-10 inline-block">
        Apply Now
      </Link>
    </section>
  )
}
