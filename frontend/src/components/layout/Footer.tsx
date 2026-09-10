import { Link } from 'react-router-dom'
import { branches } from '@/data/branches'

export default function Footer() {
  return (
    <footer className="border-t border-bc-line bg-white text-bc-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <img src="/logo-color.png" alt="Baron Capital" className="h-8 w-auto" />
          <p className="mt-3 text-sm text-bc-ink/60">Let's keep you company.</p>
        </div>

        <div>
          <h4 className="eyebrow-rule mb-4 border-bc-gold text-bc-navy">Quick links</h4>
          <ul className="space-y-2 text-sm text-bc-ink/70">
            <li><Link to="/products" className="hover:text-bc-gold-deep">Our Products</Link></li>
            <li><Link to="/about" className="hover:text-bc-gold-deep">About Us</Link></li>
            <li><Link to="/apply" className="hover:text-bc-gold-deep">Apply Now</Link></li>
            <li><Link to="/contact" className="hover:text-bc-gold-deep">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow-rule mb-4 border-bc-gold text-bc-navy">Branches</h4>
          <ul className="space-y-2 text-sm text-bc-ink/70">
            {branches.map((b) => (
              <li key={b.name}>{b.address}{b.isHQ ? ' — HQ' : ''}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow-rule mb-4 border-bc-gold text-bc-navy">Contact</h4>
          <ul className="space-y-2 text-sm text-bc-ink/70">
            <li>+254 700 000 000</li>
            <li>info@baroncapital.co.ke</li>
            <li>WhatsApp: +254 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bc-line py-5 text-center text-xs text-bc-ink/50">
        © {new Date().getFullYear()} Baron Capital. All rights reserved.
      </div>
    </footer>
  )
}