import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-heading text-sm font-semibold transition-colors ${
    isActive ? 'text-bc-gold-deep' : 'text-bc-navy hover:text-bc-gold-deep'
  }`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-bc-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="shrink-0">
          <img src="/logo-color.png" alt="Baron Capital" className="h-9 w-auto md:h-10" />
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
        <Link to="/apply" className="rounded-sm bg-bc-navy px-5 py-2 font-heading text-sm font-bold text-white transition-colors hover:bg-bc-navy-ink">
          Apply Now
        </Link>
      </div>
    </header>
  )
}