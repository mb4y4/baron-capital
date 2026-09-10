import { Link } from 'react-router-dom'
import { branches } from '@/data/branches'

export default function Footer() {
  return (
    <footer className="bg-bc-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-extrabold text-white">
            Baron<span className="text-bc-gold">Capital</span>
          </h3>
          <p className="mt-3 text-sm text-white/80">Let's keep you company.</p>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-bc-gold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/products" className="hover:text-bc-gold">Our Products</Link></li>
            <li><Link to="/about" className="hover:text-bc-gold">About Us</Link></li>
            <li><Link to="/apply" className="hover:text-bc-gold">Apply Now</Link></li>
            <li><Link to="/contact" className="hover:text-bc-gold">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-bc-gold">
            Branches
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {branches.map((b) => (
              <li key={b.name}>{b.address}{b.isHQ ? ' (HQ)' : ''}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-bc-gold">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Phone: +254 715 547 978</li>
            <li>Email: info@baroncapital.co.ke</li>
            <li>WhatsApp: +254 715 547 978</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Baron Capital. All rights reserved.
      </div>
    </footer>
  )
}
