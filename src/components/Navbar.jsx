import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Experiences' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Inquire' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${
      isActive ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-sand/60 bg-canvas/80 backdrop-blur-md shadow-xs py-0'
          : 'border-b border-transparent bg-transparent py-2'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3.5" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Third Perspective Media Logo"
            className="h-10 w-auto max-w-[48px] object-contain transition-transform duration-300 hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.18em] text-charcoal sm:text-2xl">
              THIRD PERSPECTIVE
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold">
              Media &middot; Lagos / Ibadan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-9 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="border border-gold bg-surface/30 backdrop-blur-xs px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="flex flex-col space-y-4 border-b border-sand bg-canvas/95 backdrop-blur-md px-8 py-6 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 border border-gold bg-gold px-6 py-3 text-center text-xs uppercase tracking-[0.2em] text-white"
          >
            Book Session
          </Link>
        </div>
      )}
    </header>
  )
}