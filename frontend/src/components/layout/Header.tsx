import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-heading text-sm font-semibold transition-colors ${
    isActive ? 'text-bc-gold-deep' : 'text-bc-navy hover:text-bc-gold-deep'
  }`

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block py-3 font-heading text-base font-semibold border-b border-bc-line ${
    isActive ? 'text-bc-gold-deep' : 'text-bc-navy'
  }`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-bc-line bg-white">
      {/* <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"> */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        {/* <Link to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img src="/logo-color.png" alt="Baron Capital" className="h-9 w-auto md:h-10" />
        </Link> */}
        <Link to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img src="/logo-color.png" alt="Baron Capital" className="h-11 w-auto sm:h-12 md:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Our Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="hidden rounded-sm bg-bc-navy px-5 py-2 font-heading text-sm font-bold text-white transition-colors hover:bg-bc-navy-ink md:inline-block"
          >
            Apply Now
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 text-bc-navy md:hidden"
          >
            {menuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="border-t border-bc-line bg-white px-6 md:hidden">
          <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Our Products</NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <Link
            to="/apply"
            onClick={() => setMenuOpen(false)}
            className="my-4 block rounded-sm bg-bc-navy px-5 py-3 text-center font-heading text-sm font-bold text-white"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  )
}