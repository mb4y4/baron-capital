import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-heading text-sm font-semibold tracking-wide transition ${
    isActive ? 'text-bc-gold' : 'text-white hover:text-bc-gold'
  }`

export default function Header() {
  return (
    <header className="bg-bc-navy sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-xl font-extrabold text-white">
          Baron<span className="text-bc-gold">Capital</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Our Products
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <Link to="/apply" className="btn-primary !py-2 !px-5 text-sm">
          Apply Now
        </Link>
      </div>
    </header>
  )
}
