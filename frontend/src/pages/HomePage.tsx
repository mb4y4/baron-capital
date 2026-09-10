import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import LoanCalculator from '@/components/common/LoanCalculator'

export default function HomePage() {
  return (
    <>
      {/* Hero: full-bleed team photo with a navy scrim for text legibility */}
      <section className="relative overflow-hidden">
        <img
          src="/hero-team.jpg"
          alt="The Baron Capital team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,43,94,0.94) 0%, rgba(10,43,94,0.80) 35%, rgba(10,43,94,0.35) 70%, rgba(10,43,94,0.15) 100%)',
          }}
        />
        <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-6 py-20 md:py-28">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Your financial growth partner
            </h1>
            <p className="mt-3 font-heading text-xl text-bc-gold">Let's keep you company.</p>
            <p className="mt-6 max-w-md text-white/80">
              Fast, flexible, and transparent financing for businesses and individuals
              building something worth financing.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">Explore products</Link>
              <Link to="/apply" className="btn-secondary">Apply now</Link>
            </div>
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

      {/* Why Baron Capital: divided band, not cards */}
      <section className="bg-bc-navy text-white">
        <div className="section grid gap-10 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { title: 'Transparency', desc: 'No hidden fees, clear terms, honest advice from the first conversation.' },
            { title: 'Speed', desc: "Fast approvals, so you never miss an opportunity waiting on paperwork." },
            { title: 'Human-centric service', desc: 'Real people, real relationships — a partner, not just a lender.' },
          ].map((pillar) => (
            <div key={pillar.title} className="pt-10 first:pt-0 md:px-10 md:pt-0 md:first:pl-0">
              <h3 className="text-xl text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="section">
        <h2 className="text-3xl">Estimate your repayment</h2>
        <p className="mt-2 max-w-xl text-bc-ink/70">A quick estimate before you apply — no commitment, no paperwork.</p>
        <LoanCalculator className="mt-10" />
      </section>

      {/* Testimonials: single-column, quote-led, no card shadows */}
      <section className="bg-bc-grey">
        <div className="section max-w-3xl">
          <h2 className="text-3xl">What clients say</h2>
          <div className="mt-10 space-y-10">
            {[
              { quote: 'Baron Capital got me funded in a day when I needed it most.', author: 'Small business owner, Nairobi' },
              { quote: 'Transparent terms, no surprises. Exactly what they promised.', author: 'Logbook loan client' },
              { quote: 'They treated me like a partner, not just a borrower.', author: 'Trade finance client' },
            ].map((t) => (
              <blockquote key={t.author} className="border-l-2 border-bc-gold pl-6">
                <p className="font-heading text-xl leading-snug text-bc-navy">{t.quote}</p>
                <footer className="mt-3 text-sm text-bc-ink/60">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <h2 className="text-3xl">Insights</h2>
        <p className="mt-4 text-bc-ink/60">
          Latest articles will be pulled from the Core service blog API once published.
        </p>
      </section>
    </>
  )
}