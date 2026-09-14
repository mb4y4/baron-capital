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
      <p className="mt-2 text-xl font-semibold text-bc-gold-deep">{product.tagline}</p>
      <p className="mt-6 text-bc-ink/80">{product.description}</p>

      {product.introParagraphs?.map((para) => (
        <p key={para} className="mt-4 text-bc-ink/80">{para}</p>
      ))}

      {product.features.length > 0 && (
        <>
          <h2 className="mt-10 text-2xl">Key Features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {product.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </>
      )}

      {product.howItWorks.length > 0 && (
        <>
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
        </>
      )}

      {product.instruments && product.instruments.length > 0 && (
        <>
          <h2 className="mt-10 text-2xl">Our Trade Finance Products</h2>
          <div className="mt-6">
            {product.instruments.map((instrument, i) => (
              <div key={instrument.title} className="ledger-row">
                <h3 className="text-lg text-bc-navy">
                  <span className="mr-2 text-bc-gold-deep">{i + 1}.</span>
                  {instrument.title}
                </h3>
                <p className="mt-2 text-sm text-bc-ink/70">{instrument.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {product.whyChooseUs && product.whyChooseUs.length > 0 && (
        <>
          <h2 className="mt-10 text-2xl">Why Choose Baron Capital?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-bc-ink/80">
            {product.whyChooseUs.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </>
      )}

      {product.closingHeading && (
        <div className="mt-10 border-t border-bc-line pt-8">
          <h2 className="text-2xl">{product.closingHeading}</h2>
          {product.closingParagraph && (
            <p className="mt-4 text-bc-ink/80">{product.closingParagraph}</p>
          )}
        </div>
      )}

      <Link to={`/apply?product=${product.slug}`} className="btn-primary mt-10 inline-block">
        Apply Now
      </Link>

      {product.disclaimer && (
        <p className="mt-8 text-xs text-bc-ink/50">{product.disclaimer}</p>
      )}
    </section>
  )
}