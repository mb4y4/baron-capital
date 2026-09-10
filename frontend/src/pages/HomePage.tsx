import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import LoanCalculator from '@/components/common/LoanCalculator'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bc-navy text-white">
        <div className="section text-center">
          <h1 className="font-heading text-4xl font-extrabold md:text-5xl">
            Your Financial Growth Partner
            <span className="block text-bc-gold">Let's keep you company.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Fast, flexible, and transparent financing for businesses and individuals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/apply" className="rounded border-2 border-white px-6 py-3 font-heading font-bold hover:bg-white hover:text-bc-navy transition">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section">
        <h2 className="mb-10 text-center text-3xl">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="rounded-lg border border-bc-navy/10 p-6 shadow-sm transition hover:shadow-md hover:border-bc-gold"
            >
              <h3 className="mb-2 text-lg">{p.name}</h3>
              <p className="text-sm text-bc-ink/70">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Baron Capital */}
      <section className="bg-bc-grey">
        <div className="section">
          <h2 className="mb-10 text-center text-3xl">Why Baron Capital?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Transparency', desc: 'No hidden fees, clear terms, honest advice.' },
              { title: 'Speed', desc: 'Fast approvals so you never miss an opportunity.' },
              { title: 'Human-Centric Service', desc: 'Real people, real relationships, real support.' },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-lg bg-white p-6 text-center shadow-sm">
                <h3 className="mb-2 text-xl">{pillar.title}</h3>
                <p className="text-sm text-bc-ink/70">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="section">
        <LoanCalculator />
      </section>

      {/* Testimonials */}
      <section className="bg-bc-grey">
        <div className="section">
          <h2 className="mb-10 text-center text-3xl">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: 'Baron Capital got me funded in a day when I needed it most.', author: 'Small Business Owner, Nairobi' },
              { quote: 'Transparent terms, no surprises. Exactly what they promised.', author: 'Logbook Loan Client' },
              { quote: 'They treated me like a partner, not just a borrower.', author: 'Trade Finance Client' },
            ].map((t) => (
              <blockquote key={t.author} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="italic text-bc-ink/80">"{t.quote}"</p>
                <footer className="mt-4 text-sm font-semibold text-bc-navy">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Insights placeholder */}
      <section className="section">
        <h2 className="mb-10 text-center text-3xl">Insights</h2>
        <p className="text-center text-bc-ink/60">
          Latest articles will be pulled from the Core service blog API.
        </p>
      </section>
    </>
  )
}
