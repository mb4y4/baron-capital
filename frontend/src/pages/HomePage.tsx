import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import LoanCalculator from '@/components/common/LoanCalculator'
import Reveal from '@/components/common/Reveal'
import { fetchLatestPosts } from '@/services/api'
import type { BlogPost } from '@/types'

export default function HomePage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [postsLoaded, setPostsLoaded] = useState(false)

  useEffect(() => {
    fetchLatestPosts()
      .then(setPosts)
      .catch((err) => console.error('Failed to load blog posts:', err))
      .finally(() => setPostsLoaded(true))
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/hero-team.jpg"
          alt="The Baron Capital team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bc-navy/95 via-bc-navy/75 to-bc-navy/30 md:bg-gradient-to-r md:from-bc-navy/95 md:via-bc-navy/80 md:to-bc-navy/20" />
        <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-end md:min-h-[520px] md:items-center px-6 py-12 md:py-28">
          <div className="max-w-xl animate-[page-fade-in_0.8s_ease-out]">
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Your financial growth partner
            </h1>
            <p className="mt-3 font-heading text-lg text-bc-gold sm:text-xl">Let's keep you company.</p>
            <p className="mt-5 max-w-md text-sm text-white/80 sm:mt-6 sm:text-base">
              Fast, flexible, and transparent financing for businesses and individuals
              building something worth financing.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link to="/products" className="btn-primary text-sm sm:text-base">Explore products</Link>
              <Link to="/apply" className="btn-secondary text-sm sm:text-base">Apply now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section">
        <Reveal>
          <h2 className="mb-10 text-center text-3xl">Our Products</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delayMs={i * 80}>
              <Link
                to={`/products/${p.slug}`}
                className="card-lift block h-full rounded-lg border border-bc-navy/10 p-6 shadow-sm hover:shadow-md hover:border-bc-gold"
              >
                <h3 className="mb-2 text-lg">{p.name}</h3>
                <p className="text-sm text-bc-ink/70">{p.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Baron Capital */}
      <section className="bg-bc-navy text-white">
        <div className="section grid gap-10 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { title: 'Transparency', desc: 'No hidden fees, clear terms, honest advice from the first conversation.' },
            { title: 'Speed', desc: "Fast approvals, so you never miss an opportunity waiting on paperwork." },
            { title: 'Human-centric service', desc: 'Real people, real relationships — a partner, not just a lender.' },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delayMs={i * 100} className="pt-10 first:pt-0 md:px-10 md:pt-0 md:first:pl-0">
              <h3 className="text-xl text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pillar.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="section">
        <Reveal>
          <h2 className="text-3xl">Estimate your repayment</h2>
          <p className="mt-2 max-w-xl text-bc-ink/70">A quick estimate before you apply — no commitment, no paperwork.</p>
          <LoanCalculator className="mt-10" />
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="bg-bc-grey">
        <div className="section max-w-3xl">
          <Reveal>
            <h2 className="text-3xl">What clients say</h2>
          </Reveal>
          <div className="mt-10 space-y-10">
            {[
              { quote: 'Baron Capital got me funded in a day when I needed it most.', author: 'Small business owner, Nairobi' },
              { quote: 'Transparent terms, no surprises. Exactly what they promised.', author: 'Logbook loan client' },
              { quote: 'They treated me like a partner, not just a borrower.', author: 'Trade finance client' },
            ].map((t, i) => (
              <Reveal key={t.author} delayMs={i * 100}>
                <blockquote className="border-l-2 border-bc-gold pl-6">
                  <p className="font-heading text-xl leading-snug text-bc-navy">{t.quote}</p>
                  <footer className="mt-3 text-sm text-bc-ink/60">{t.author}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <Reveal>
          <h2 className="text-3xl">Insights</h2>
        </Reveal>

        {postsLoaded && posts.length === 0 && (
          <Reveal>
            <p className="mt-4 text-bc-ink/60">
              We're preparing our first articles on finance, business growth, and lending — check back soon.
            </p>
          </Reveal>
        )}

        {posts.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.id} delayMs={i * 80}>
                <article className="card-lift h-full rounded-lg border border-bc-navy/10 p-6 shadow-sm hover:shadow-md">
                  <p className="text-xs text-bc-ink/50">
                    {new Date(post.published_at).toLocaleDateString('en-KE', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </p>
                  <h3 className="mt-2 text-lg">{post.title}</h3>
                  <p className="mt-2 text-sm text-bc-ink/70">{post.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  )
}